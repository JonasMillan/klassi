'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClaseSchema = new Schema({

    alumno: {
        type: Schema.Types.ObjectId,
        ref: 'Alumno'
    },
    profesor: {
        type: Schema.Types.ObjectId,
        ref: 'Profesor'
    },
    materia: {
        type: Schema.Types.ObjectId,
        ref: 'Materia' 
    },
    zona: {
        type: Schema.Types.ObjectId,
        ref: 'Zona'
    },
    fecha:{
        type: String
    },
    hora:{
        type: String
    }
});

module.exports = mongoose.model('Clase', ClaseSchema);





// clase
// alumno
// profe
// materia
// zona
// fecha
// hora 