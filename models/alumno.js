'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnoSchema = new Schema({
  
  nombre: {
    type: String
  },
  apellido: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  escolaridad: {
    type: Schema.Types.ObjectId,
    ref: 'Escolaridad' 
  },
  zona: {
    type: Schema.Types.ObjectId,
    ref: 'Zona'
  },
  clases: [{
    type: Schema.Types.ObjectId,
    ref: 'Clase' 
  }]
});

module.exports = mongoose.model('Alumno', AlumnoSchema);

// almuno
// password
// email
// nombre 
// apellido
// zona 
// escolaridad
// [clases] 