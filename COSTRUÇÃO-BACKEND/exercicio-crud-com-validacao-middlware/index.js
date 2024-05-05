const express = require('express');
const app = express();


app.use(express.json())

//rotas

const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)


app.listen(3000,()=>{
    console.log("apicação rodando ")
})
