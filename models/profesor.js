'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfesorSchema = new Schema({
  
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    descripcion:{
        type: String
    },
    clases: [{
        type: Schema.Types.ObjectId,
        ref: 'Clase' 
    }],
    zonas: [{
        type: Schema.Types.ObjectId,
        ref: 'Zona' 
    }],
    materias: [{
        type: Schema.Types.ObjectId,
        ref: 'Materias' 
    }]
});

module.exports = mongoose.model('Profesor', ProfesorSchema);


// profesor
// email
// nombre
// apellido
// descripcion
// [materias]
// [zona]
// [clases]
