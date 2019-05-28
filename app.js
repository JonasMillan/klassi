const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000
app.use(cors());

const materias = [
    'Algoritmos', 'Matematica', 'Ingles'
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

app.get('/api/users', (req, res) =>  res.json({'result': users}));

app.get('/api/users/:id', (req, res) => res.json({'result': users.filter(user => user.id === req.params.id)}));

app.get('/api/materias', (req,res) => res.json({'result': materias}))

app.listen(PORT);