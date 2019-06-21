const Profesor =  require('../models/profesor')

const findProfesorByMateria = async (req, res) => {
    const id = req.params.id
    const profes = await Profesor.find().populate('materias')
    const data = []
    profes.forEach( profe => {
        const encontro = profe.materias.find(mate => mate._id.toString() === id)
        if(encontro){
            data.push(profe)
        }
    })
    if(data.length > 0){
        res.json({result: data})
    }else{
        res.json({error: 'No existen profesores para dicha materia'})
    }
}

const findProfesorById = async (req, res) => {
    const id = req.params.id
    const profe = await Profesor.findById(id).populate('materias').populate('zonas')
    if(profe){
        res.json({result: profe})
    }else{
        res.json({error: 'No existen profesores para dicho id'})
    }
}

module.exports = {
    findProfesorByMateria,
    findProfesorById
}