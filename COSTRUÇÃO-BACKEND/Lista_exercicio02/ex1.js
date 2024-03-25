
const express = require('express');
const app = express();

app.use(express.json())
//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
 //PATH PARAMS
 app.get('/ex1/:quantidadeMin/:quatidadeMax', (req,res)=>{
    const quantidadeMinima =Number(req.params.quantidadeMin)
    const quantidadeMaxima= Number(req.params.quatidadeMax)

    const estoqueMedio= (quantidadeMinima + quantidadeMaxima)/2
     res.send(
        `Aquatidade media:${estoqueMedio}`
     )
 })
 

//query param 
app.get('/ex1', (req, res )=>{
   
    const quantidadeMinima = Number(req.query.quantidadeMin)
    const quantidadeMaxima = Number(req.query.quantidadeMax)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) /2
    
    res.send( `Aquantidade media:${estoqueMedio}  ` )
})
app.post('/ex1', (req, res )=>{
   
    const quantidadeMinima = Number(req.body.quantidadeMin)
    const quantidadeMaxima = Number(req.body.quantidadeMax)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) /2
    
    res.send( `Aquantidade media:${estoqueMedio}  ` )
})


app.listen(3000, ()=>{
    console.log("porta da aplicação e http://localhhost:3000")
 })