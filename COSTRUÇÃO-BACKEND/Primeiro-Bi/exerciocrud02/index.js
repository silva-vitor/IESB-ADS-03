const express = require('express')
const app = express()


//middewres
app.use(express.json())

//rotas
const pessoas = require('./routes/pessoas')
app.use(pessoas)

app.listen(3000, ()=>{
    console.log("Apicação rodando em hhtp://localhost:3000")
})