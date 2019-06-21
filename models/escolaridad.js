'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EscolaridadSchema = new Schema({
    nivel: {
        type: String,
    }
});

module.exports = mongoose.model('Escolaridad', EscolaridadSchema);

// escolaridad
// nivel