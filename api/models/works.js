'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    workSchema = new Schema({
        title: {
            type: String,
            required: [true, 'Укажите заголовок статьи']
        },
        tech: {
            type: Array,
            required: [true, 'Укажите технологии']
        },
        image: {
            type: String,
            required: [true, 'Загрузите картинку']
        },
        href: {
            type: String,
            required: [true, 'Укажите ссылку']
        }
    });
mongoose.model('work', workSchema);