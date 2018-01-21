const mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');
const formidable = require('formidable');

module.exports.getWork = (req, res) => {
    const work = mongoose.model('work');

    work.find().then(items => {
        res.status(200).json({
            articles: items
        });
    });
};

module.exports.createWork = (req, res) => {
    let form = new formidable.IncomingForm();
    let fileName;
    let upload = 'build/img/work';
    const Model = mongoose.model('work');
    form.uploadDir = path.join(process.cwd(), upload);
    form.parse(req, function (err, fields, files) {
        if (err) {
            return 'message:' + err
        }
        if (!fields.title) {
            fs.unlink(files.image.path);
            return res.status(400).json({
                message: `При добавление записи произошла ошибка:  + ${err.message}`
            });
        }
        fileName = path.join(upload, files.image.name);
        fs.rename(files.image.path, fileName, function (err) {
            if (err) {
                fs.unlink(fileName);
                fs.rename(files.image.path, fileName);
            }
            let image = fileName.substr(fileName.indexOf('\\'));
            let item = new Model({
                title: fields.title,
                tech: fields.tech,
                image: image,
                href: fields.href,
                
            });
            item
                .save()
                .then(item => {
                    return res.status(201).json({
                        message: 'Запись успешно добавлена'
                    });
                })
                .catch(err => {
                    res.status(400).json({
                        message: `При добавление записи произошла ошибка:  + ${err.message}`
                    });
                });
        });
    });
};
// не работает
module.exports.editWork = (req, res) => {
    const id = req.body.id;
    let item = new Model({
        tech: req.body.tech,
        number: req.body.number,
    });

    const Model = mongoose.model('work');

    Model.findByIdAndUpdate(id, {
            $set: item
        })
        .then(item => {
            if (!!item) {
                res.status(200).json({
                    message: 'Запись успешно обновлена'
                });
            } else {
                res.status(404).json({
                    message: 'Запись в БД не обнаружена'
                });
            }
        })
        .catch(err => {
            res.status(400).json({
                message: `При обновлении записи произошла ошибка:  + ${err.message}`
            });
        });
};

module.exports.deleteWork = (req, res) => {
    const id = req.body.id;
    const Model = mongoose.model('work');

    Model.findByIdAndRemove(id)
        .then(item => {
            if (!!item) {
                res.status(200).json({
                    message: 'Запись успешно удалена'
                });
            } else {
                res.status(404).json({
                    message: 'Запись в БД не обнаружена'
                });
            }
        })
        .catch(err => {
            res.status(400).json({
                message: `При удалении записи произошла ошибка: ' + ${err.message}`
            });
        });
};