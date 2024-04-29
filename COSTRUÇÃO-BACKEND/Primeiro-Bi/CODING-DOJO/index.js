const express = require('express')
const app = express()

app.use(express.json())

//rota
const carros = require('./routes/carros')
app.use(carros)

app.listen(3000, ()=> {
    console.log("Aplicação rodando em http://localhost:3000")
})