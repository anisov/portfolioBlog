const mongoose = require('mongoose');

module.exports.getArticles = (req, res) => {
    const Blog = mongoose.model('blog');

    Blog.find().then(items => {
        res.status(200).json({
            articles: items
        });
    });
};
module.exports.createArticle = (req, res) => {
    const Model = mongoose.model('blog');

    let item = new Model({
        title: req.body.title,
        date: new Date(req.body.date),
        body: req.body.text,
        code: req.body.code,
        href: req.body.href
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

module.exports.editArticle = (req, res) => {
    const id = req.body.id;
    let data = {
        title: req.body.title,
        date: new Date(req.body.date),
        body: req.body.text,
        code: req.body.code,
        href: req.body.href
    };

    const Model = mongoose.model('blog');

    Model.findByIdAndUpdate(id, {
            $set: data
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

module.exports.deleteArticle = (req, res) => {
    const id = req.body.id;
    const Model = mongoose.model('blog');

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