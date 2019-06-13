const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000
app.use(cors());

const materias = [
    {
        id:'1',
        nombre:'Algoritmos'
    },
    {
        id:'2',
        nombre:'Matematica'
    },
    {
        id:'3',
        nombre:'Ingles'
    }
]
const users = [
    {
        id: '1',
        nombre: 'Santi',
        apellido: 'Pueigrredon (claramente es un chiste, antes de que me jodan...)',
        materias: ['mate', 'algo', 'base']
    },
    {
        id: '2',
        nombre: 'jorge',
        apellido: 'ni idea',
        materias: ['mate', 'algo', 'base']
    },
    {
        id: '3',
        nombre: 'lau',
        apellido: 'ni idea',
        materias: ['mate', 'algo', 'base']
    },
    {
        id: '4',
        nombre: 'Mora',
        apellido: 'Stok',
        materias: ['mate', 'algo', 'base']
    },
    {
        id: '5',
        nombre: 'Jonas',
        apellido: 'Millan',
        materias: ['mate', 'algo', 'base']
    },
];

const profesores = [
    {
        id: '1',
        nombre: 'Marcos',
        idMateria: '1'
    },
    {
        id: '2',
        nombre: 'Profe de mate',
        idMateria: '2'
    },
    {
        id: '3',
        nombre: 'Profe de Ingles',
        idMateria: '3'
    },
    {
        id: '4',
        nombre: 'Profe de Ingles2',
        idMateria: '3'
    },
    {
        id: '5',
        nombre: 'Profe de Mate2',
        idMateria: '2'
    },
    {
        id: '6',
        nombre: 'Profe de Mate3',
        idMateria: '2'
    },
    {
        id: '7',
        nombre: 'Profe de Algoritmos',
        idMateria: '1'
    },
]

app.get('/api/users', (req, res) =>  res.json({'result': users}));

app.get('/api/users/:id', (req, res) => res.json({'result': users.filter(user => user.id === req.params.id)}));

app.get('/api/profesores', (req, res) =>  res.json({'result': profesores}));

app.get('/api/profesores/:id', (req, res) => res.json({'result': profesores.filter(teacher => teacher.id === req.params.id)}));

app.get('/api/profesores/materias/:id', (req, res) => res.json({'result': profesores.filter(teacher => teacher.idMateria === req.params.id)}));

app.get('/api/materias', (req,res) => res.json({'result': materias}))

app.listen(PORT);