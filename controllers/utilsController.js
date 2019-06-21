const Materia = require('../models/materias')
const Zona = require('../models/zona')
const Esconalidad = require('../models/escolaridad')

const getMaterias = async (req, res) => {
    const result = await Materia.find().populate('escolaridad')
    res.json({result})
}

const getZona = async (req, res) => {
    const result = await Zona.find()
    res.json({result})
}

const getEscolaridad = async (req, res) => {
    const result = await Esconalidad.find()
    res.json({result})
}

module.exports = {
    getZona, getEscolaridad, getMaterias
}