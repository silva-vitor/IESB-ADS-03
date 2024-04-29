const express = require('express')
const app = express()

//middewares
app.use(express.json())

//rotas
const produtos = require('./routes/produtos')
app.use(produtos)



app.listen(3000, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})