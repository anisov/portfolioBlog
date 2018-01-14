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
            required: [true, 'Укажите содержимое статьи']
        },
        image: {
            type: String,
            required: [true, 'Укажите содержимое статьи']
        }
    });
mongoose.model('work', workSchema);