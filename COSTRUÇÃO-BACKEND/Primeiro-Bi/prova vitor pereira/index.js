
const express = require ('express')
const app = express()

app.use(express.json())


const livros = require('./routes/livros')
app.use(livros)





app.listen(3000, ()=>{
    console.log("aplicação rodando ")
})