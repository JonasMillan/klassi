const Zona = require('./models/zona')
const Materia = require('./models/materias')
const Escolaridad = require('./models/escolaridad')
const Profesor = require('./models/profesor')

const seeds = async () => {
    const escolaridades = await Escolaridad.find() 

    
    if(escolaridades.length === 0){
        const Belgrano = new Zona({nombre:'Belgrano'})
        const Palermo = new Zona({nombre:'Palermo'})
        const Colegiales = new Zona({nombre:'Colegiales'})
        const Saavedra = new Zona({nombre:'Saavedra'})
        const arrZonas = [Belgrano,Palermo,Colegiales, Saavedra]
        
        const Primario = new Escolaridad({nivel:'Primario'})
        const Secundario = new Escolaridad({nivel:'Secundario'})
        const Terciario = new Escolaridad({nivel:'Terciario'})
        const Universitario = new Escolaridad({nivel:'Universitario'})
        const arrEsco = [Primario,Secundario,Terciario,Universitario]
        
        const MatematicaPrimaria = new Materia({nombre:'Matematica', escolaridad: Primario._id})
        const MatematicaSecundario = new Materia({nombre:'Matematica', escolaridad: Secundario._id})
        const MatematicaTerciario = new Materia({nombre:'Matematica', escolaridad: Terciario._id})
        const MatematicaUniversitario = new Materia({nombre:'Matematica', escolaridad: Universitario._id})
        const FisicaPrimaria = new Materia({nombre:'Fisica', escolaridad: Primario._id})
        const FisicaSecundario = new Materia({nombre:'Fisica', escolaridad: Secundario._id})
        const FisicaTerciario = new Materia({nombre:'Fisica', escolaridad: Terciario._id})
        const FisicaUniversitario = new Materia({nombre:'Fisica', escolaridad: Universitario._id})
        const LiteraturaPrimaria = new Materia({nombre:'Literatura', escolaridad: Primario._id})
        const LiteraturaSecundario = new Materia({nombre:'Literatura', escolaridad: Secundario._id})
        const LiteraturaTerciario = new Materia({nombre:'Literatura', escolaridad: Terciario._id})
        const LiteraturaUniversitario = new Materia({nombre:'Literatura', escolaridad: Universitario._id})
        const QuimicaPrimaria = new Materia({nombre:'Quimica', escolaridad: Primario._id})
        const QuimicaSecundario = new Materia({nombre:'Quimica', escolaridad: Secundario._id})
        const QuimicaTerciario = new Materia({nombre:'Quimica', escolaridad: Terciario._id})
        const QuimicaUniversitario = new Materia({nombre:'Quimica', escolaridad: Universitario._id})
        const seedsMaterias = [
            MatematicaPrimaria,
            MatematicaSecundario,
            MatematicaTerciario,
            MatematicaUniversitario,
            FisicaPrimaria,
            FisicaSecundario,
            FisicaTerciario,
            FisicaUniversitario,
            LiteraturaPrimaria,
            LiteraturaSecundario,
            LiteraturaTerciario,
            LiteraturaUniversitario,
            QuimicaPrimaria,
            QuimicaSecundario,
            QuimicaTerciario,
            QuimicaUniversitario,
        ]
        
        const pancaracio = new Profesor({
            nombre: 'Pancracio',
            apellido: 'Pancrastico',
            email: 'MachoAlfa@gmail.com',
            descripcion: 'esto es una descripcion bastante descriptiva...',
            clases: [],
            zonas: [Belgrano._id],
            materias: [MatematicaPrimaria._id, FisicaPrimaria._id, LiteraturaPrimaria._id, QuimicaPrimaria._id]    
        })
        const Mora = new Profesor({
            nombre: 'Mora',
            apellido: 'Profe',
            email: 'Mora@gmail.com',
            descripcion: 'esto es una descripcion bastante descriptiva...',
            clases: [],
            zonas: [Palermo._id],
            materias: [MatematicaSecundario._id, FisicaSecundario._id, LiteraturaSecundario._id, QuimicaSecundario._id]    
        })
        const Jonas = new Profesor({
            nombre: 'Jonas',
            apellido: 'Profe',
            email: 'Jonas@gmail.com',
            descripcion: 'esto es una descripcion bastante descriptiva...',
            clases: [],
            zonas: [Palermo._id],
            materias: [MatematicaSecundario._id, FisicaSecundario._id, LiteraturaSecundario._id, QuimicaSecundario._id]    
        })
        const Jor = new Profesor({
            nombre: 'Jor',
            apellido: 'Profe',
            email: 'Jor@gmail.com',
            descripcion: 'esto es una descripcion bastante descriptiva...',
            clases: [],
            zonas: [Palermo._id],
            materias: [MatematicaSecundario._id, FisicaSecundario._id, LiteraturaSecundario._id, QuimicaSecundario._id]    
        })
        const Santi = new Profesor({
            nombre: 'Santi',
            apellido: 'Pueihgyredon',
            email: 'Pueihgyredon@gmail.com',
            descripcion: 'esto es una descripcion bastante descriptiva...',
            clases: [],
            zonas: [Colegiales._id],
            materias: [MatematicaTerciario._id, FisicaTerciario._id, LiteraturaTerciario._id, QuimicaTerciario._id]    
        })
        const Lau = new Profesor({
            nombre: 'Lautaro',
            apellido: 'tebanque',
            email: 'tebanco@gmail.com',
            descripcion: 'esto es una descripcion bastante descriptiva...',
            clases: [],
            zonas: [Colegiales._id],
            materias: [MatematicaUniversitario._id, FisicaUniversitario._id, LiteraturaUniversitario._id, QuimicaUniversitario._id]    
        })

        const profes = [pancaracio,Mora,Santi,Lau,Jonas,Jor]

        const allSeeds = [...arrEsco,...seedsMaterias, ...arrZonas, ...profes]
        allSeeds.map(e => e.save())
        console.log('done!!!!')
    }
}

module.exports = {
    seeds
}