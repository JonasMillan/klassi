'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MateriasSchema = new Schema({
    nombre: {
        type: String,
    },
    escolaridad: {
        type: Schema.Types.ObjectId,
        ref: 'Escolaridad' 
    }
});

module.exports = mongoose.model('Materias', MateriasSchema);




// materias
// nombre
// escolaridad