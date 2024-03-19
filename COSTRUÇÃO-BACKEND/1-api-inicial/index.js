// criando uma instância do modulo express
const express = require('express')
//Criando nossa aplicação 
const app = express()

//Definindo os caminhos da aplicação 
app.get('/',(req, res)=>{ 
    res.send("Olá mundo")
})
app.get('/hello',(req, res)=>{
    res.send('hello word')
})
app.get('/nome',(req,res)=> {
    res.send('Vitor Pereira')
})
app.post('/teste', (req , res)=>{
    res.send("test GET QUALQUER ALTERAÇÃO OK  ")
})/*//cria um endepoint que devolva e matricula do /aluno
 app.get('/aluno',(req,res)=>{
    res.send("  NOME: Vítor pereira da silva \n MATRICULA: 23114290066") // (\n )pula de linha  //<br> pula linha no html
 })*/
 app.get('/Aluno/:matricula/:curso', (req, res)=>{
    console.log(req.params)
    res.send("ok")
 })

app.post('/teste',(req, res) => { 
   res.send("Teste POST ok")
})

// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
// Path Param
/*
app.get('exercicio01/:nota1/ :nota2/ :nota3/ :nota4',(req, res)=> {
    const nota1 = Number ((req.params.nota1));
    const nota2 = Number ((req.params.nota2));
    const nota3 = Number ((req.params.nota3));
    const nota4 = Number ((req.params.nota4));
     
 
    const media = (nota1 + nota2 + nota3 + nota4) /4

    const resultado = media >=7 ? "Aprovado" : "Reprovado" // como se fosse o if & else 

    res.send(`Media: ${media} Aluno ${resultado}`)
})*/
// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
app.get('AlunoA',(req, res)=> {
    console.log (req.params)
    res.send('ok')
    
    
   
})*

//executando a aplicação na porta definida
app.listen(3000,()=>{
console.log(`Api iniciado! Rodando em http://localhost:3000`)

})