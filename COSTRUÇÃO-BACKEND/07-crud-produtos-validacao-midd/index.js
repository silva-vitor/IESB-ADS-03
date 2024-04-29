const express = require('express')
const app = express()

app.use(express.json())

//rotas
const produtos = require('./routes/produtos')
app.use(produtos)


app.listen(3000,()=>{
    console.log("aplicação rodando ")
})

