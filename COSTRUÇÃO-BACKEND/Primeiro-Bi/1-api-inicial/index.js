//criando uma instalão do modulo express
const express = require('express')
//Criando nossa aplicação 
const app = express()

//definir o caminho da aplicação
app.get ('/',(req, res)=>{  
    res.send("Olá mundo ")
})
app.get('/hello',(req, res)=>{
    res.send("hello word")
})
app.get('/nome',(req, res)=>{
    
    res.send("vitor")
})
//  CRIA UNM ENDPONT QUE DEVOLVA SEU NOME /ALUNO
/*app.get('/ALUNO',(req, res)=>{
    res.send("Nome: vitor pereira da silva \n Matricula: 23114290066 ") // (\n) ussado para pula linha em app
})*/
app.get('/teste',(req,res)=>{
    res.send("TESTE GET QUALQUER  ALTERAÇÃO OK")
})
 app.post('/teste',(req, res)=>{
    res.send("teste POST OK")
 })
 //PATH PARAMS ->:nome
 app.get('/aluno/:nome/:matricula/:curso', (req, res)=>{
    console.log(req.params)
    res.send(`
    Olá ${req.params.nome},
    sua matricula e ${req.params.matricula}
    seu curso e ${req.params.curso}
    `)
 })
 //QUERY PARAMS
 app.get('/pessoa', (req,res)=>{
    console.log(req.query)
    res.send("OK");
 })
 // 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
 app.get('/Aluno',(req, res)=>{
    console.log(req.query)
    const nota1= Number(req.query.nota1)
    const nota2= Number(req.query.nota2)
    const nota3= Number(req.query.nota3)
    const nota4= Number(req.query.nota4)

    const media = (nota1 + nota2 + nota3 + nota4) /4

    const resutado = media >= 7 ? "APROVADO" : "REPROVADO"
    res.send(` 
       Media: ${media.toFixed(1)}
       Resutado: ${resutado}`
        
    )
 })
//executando a aplicação na porta definida
app.listen(3000,()=>{
console.log(`Api iniciado! Rodando em http://localhost:3000`)



})