// IMPORTS
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

//configuração
const express = require('express');
const app = express();
const cors = require('cors')


//middlewares
//middlewares que tranforma o corpo da requisição em json
//dentro da nossa aplicação
app.use(express.json());

//configuração de cors
app.use(cors({origin:'*'}))

//trazendo as rotas do modulo tutorial pra dentro da minha aplicação
app.use(tutorial);

//TRAZENDO AS ROTAS DO MODELO SUBROTA
app.use('/rota',subrota);
//TRAZENDO AS ROTAS DO MODELO CONTATOS
app.use(contatos)

//contrato -> configuração das rotas e da logica
app.get('/', (req , res) =>{

    res.send("Aplicação rodando!!! ")
});


//start da nossa aplicação na porta 3000
app.listen(3000, ()=>{
    console.log("Aplicação iniciada em http://localhost:3000")
});