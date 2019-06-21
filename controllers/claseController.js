const Clase = require('../models/clases')
const Profesor = require('../models/profesor')
const Alumno = require('../models/alumno')
const Materia = require('../models/materias')
const Zona = require('../models/zona')

const createClass = async (req, res) => {
    const { idProfesor, idAlumno, idMateria, idZona, fecha, hora} = req.body
    
    const profesor = await Profesor.findById(idProfesor)
    const alumno = await Alumno.findById(idAlumno)
    const materia = await Materia.findById(idMateria)
    const zona = await Zona.findById(idZona)

    if( profesor ){
        if( alumno ){
            if( materia ){
                if( zona ){
                    
                    const clase = new Clase({
                        alumno: alumno._id,
                        profesor: profesor._id,
                        materia: materia._id,
                        zona: zona._id,
                        fecha,
                        hora
                    })
                    
                    alumno.clases.push(clase._id)
                    profesor.clases.push(clase._id)
                    
                    await clase.save()
                    await alumno.save()
                    await profesor.save()

                    res.json({result: clase})
                }else{
                    res.json({error: 'id zona no encontrado'})
                }
            }else{
                res.json({error: 'id materia no encontrado'})
            }
        }else{
            res.json({error: 'id alumno no encontrado'})
        }
    }else{
        res.json({error: 'id profesor no encontrado'})
    }
}

module.exports = {
    createClass
}