'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZonaSchema = new Schema({
    nombre: {
        type: String,
    }
});

module.exports = mongoose.model('Zona', ZonaSchema);