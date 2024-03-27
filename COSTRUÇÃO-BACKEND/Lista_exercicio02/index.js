
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

/*7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
• O maior preço lido; e
• A média aritmética dos preços dos produtos*/
app.post('/ex7', (req, res)=>{
    const corpo = req.body 
    let lista = []
    corpo.forEach(produto => {
       lista.push(produto)
      
    });
    let soma = 0 
    lista.forEach(produto=>{
        soma = soma + produto.preco;
    })
    const mediaPrecos = soma / lista.length
    //calcular o maior preço
   let maiorPreco = 0
    //logica
    lista.forEach(produto=>{
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })
   
   

    const resultado = {
        precoMedia:mediaPrecos.toFixed(2)
    }
    res.json(resultado)
})



app.listen(3000, ()=>{
    console.log("porta da aplicação e http://localhhost:3000")
 })