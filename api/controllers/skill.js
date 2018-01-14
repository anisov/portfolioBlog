const mongoose = require('mongoose');

module.exports.getSkill = (req, res) => {
    const skill = mongoose.model('skill');

    skill.find().then(items => {
        res.status(200).json({
            articles: items
        });
    });
};
module.exports.createSkill = (req, res) => {
    const Model = mongoose.model('skill');
    let item = new Model({
        name: req.body.name,
        percents: req.body.percents,
        type: req.body.type
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
};

module.exports.editSkill = (req, res) => {
    const id = req.body.id;
    
    let item = new Model({
        name: req.body.name,
        percents: req.body.percents,
        type: req.body.type
    });

    const Model = mongoose.model('skill');

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

module.exports.deleteSkill = (req, res) => {
    const id = req.body.id;
    const Model = mongoose.model('skill');

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