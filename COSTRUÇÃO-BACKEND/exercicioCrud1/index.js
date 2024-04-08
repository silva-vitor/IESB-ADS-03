
const express = require('express')
const  app = express()


//imports
const pessoas= require('./routes/pessoas')

//middlewoares
 app.use(express.json());
 
 


 //trazer as rotas do modulo pessoas
 app.use(pessoas)



app.listen(3000, ()=>{
    console.log("Aplicação rodando na porta http/localhoste:3000")
})  
