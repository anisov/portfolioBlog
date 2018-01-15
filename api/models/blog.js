'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    BlogSchema = new Schema({
        title: {
            type: String,
            required: [true, 'Укажите заголовок статьи']
        },
        body: {
            type: String,
            required: [true, 'Укажите содержимое статьи']
        },
        date: {
            type: Date,
            default: Date.now,
            required: [true, 'Укажите дату публикации']
        },
        code: {
            type: String,
        },
    });
mongoose.model('blog', BlogSchema);