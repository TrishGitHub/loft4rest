const mongoose = require('mongoose');

module.exports.getSkills = function(req, res) {
    const skill = mongoose.model('skill');

    skill
        .find()
        .then(items => {
            if (!items.length) {
                res
                    .status(200)
                    .json({ skills: [] });
            } else {
                res
                    .status(200)
                    .json({ skills: items });
            }
        });
};

module.exports.createSkill = function(req, res) {
    const Model = mongoose.model('skill');
    let item = new Model({
        name: req.body.name,
        percents: req.body.percents,
        type: req.body.type
    });
    item
        .save()
        .then(item => {
            return res
                .status(201)
                .json({ status: 'Навык успешно добавлен' });
        }, err => {
            res
                .status(404)
                .json({
                    status: 'При добавлении навыка произошла ошибка: ' + err
                });
        });
};

module.exports.editSkill = function(req, res) {
    const id = req.params.id;

    let data = {
        title: req.body.title,
        date: new Date(req.body.date),
        body: req.body.text
    };

    const Model = mongoose.model('skill');

    Model
        .findByIdAndUpdate(id, { $set: data })
        .then((item) => {
            if (item) {
                res
                    .status(200)
                    .json({ status: 'Запись успешно обновлена' });
            } else {
                res
                    .status(404)
                    .json({ status: 'Запись в БД не обнаружена' });
            }
        })
        .catch((err) => {
            res
                .status(404)
                .json({
                    status: 'При обновлении записи произошла ошибка: ' + err
                });
        });
};

module.exports.deleteSkill = function(req, res) {
    const id = req.params.id;
    const Model = mongoose.model('skill');

    Model
        .findByIdAndRemove(id)
        .then((item) => {
            if (item) {
                res.status(200).json({ status: 'Запись успешно удалена' });
            } else {
                res.status(404).json({ status: 'Запись в БД не обнаружена' });
            }
        }, (err) => {
            res.status(404).json({
                status: 'При удалении записи произошла ошибка: ' + err
            });
        });
}