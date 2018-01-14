'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    skillSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Укажите имя технологии']
        },
        percents: {
            type: Number,
        },
        type: {
            type: Number,
        }
    });

mongoose.model('skill', skillSchema);