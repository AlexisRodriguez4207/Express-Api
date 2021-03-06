// Usando Objeto Express
const express = require('express')

// App de Express
const app = express()
// Indicamos que usaremos JSON
app.use(express.json())

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// HTTP METHODS
app.get('/v1/explorers', (req,res) => {
    console.log(`Api Explorers Get All requests ${new Date()}`)
    const explorer1 = {id:1, name:"Carlos1"}
    const explorer2 = {id:2, name:"Carlos2"}
    const explorer3 = {id:3, name:"Carlos3"}
    const explorer4 = {id:4, name:"Alexis"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
})

// GET creacion de un endpoint que te regrese un explorer mediando un ID
app.get('/v1/explorers/:id', (req,res) =>{
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name:"Carlo"}
    res.status(200).json(explorer)
})

// POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    // Parámetros de un cliente
    const requestBody = req.body
    res.status(201).json({messegae: "Created"})
})

// PUT Crea un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id',(req,res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    // Parámetros de un cliente
    const requestBody = req.body
    res.status(200).json({message: "Update!"})
})

// DELETE Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    // Parámetros de un cliente
    const requestBody = req.body
    res.status(200).json({message: "Delated"})
})



