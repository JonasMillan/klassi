const Alumno = require('../models/alumno')
const Escolaridad = require('../models/escolaridad') 
const Zona = require('../models/zona')

const postRegister = async (req, res) => {
    const {nombre, apellido, email, password, escolaridad, zona} = req.body
    const nivel = await Escolaridad.find({nivel: escolaridad})
    const ubicacion = await Zona.find({nombre: zona})
    if(nivel.length > 0){
        if(ubicacion.length > 0){
            const alumno = new Alumno({
                nombre,
                apellido,
                email,
                password,
                escolaridad: nivel[0]._id,
                zona:ubicacion[0]._id,
                clases:[]
            })
            await alumno.save()
            res.json({result: alumno})
        }else{
            res.json({error:'Zona no encontrada'})
        }
    }else{
        res.json({error:'Escolaridad no encontrada'})
    }
}

const postLogin = async (req, res) => {
    const { email, password } = req.body
    const alumno = await Alumno.find({email})

    if(alumno.length > 0){
        if(alumno[0].password === password){
            res.json({
                result: alumno[0]._id
            })
        }
    }else{
        res.json({error:'Email no encontrada'})
    }
}

const findAlumno = async (req, res) => {
    const id = req.params.id
    const alumno = await Alumno.findById(id).populate('escolaridad').populate('zona').populate('clases')
    if(alumno){
        res.json({ result: alumno })
    }else{
        res.json({ error:'id no encontrada' })
    }
}

module.exports = {
    postRegister,
    postLogin,
    findAlumno
}

