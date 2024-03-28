//configuração
const express = require('express');
const app = express();

const tutorial = require('./routes/tutorial')

//middlewares
//middlewares que tranforma o corpo
//
app.use(express.json());

app.use(tutorial);

//contrato -> configuração das rotas e da logica
app.get('/', (req , res) =>{

    res.send("Aplicação rodando!!! ")
});



app.listen(3000, ()=>{
    console.log("Aplicação iniciada em http://localhost:3000")
});