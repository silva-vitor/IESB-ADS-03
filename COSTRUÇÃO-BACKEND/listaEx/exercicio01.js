let prompt = require('prompt-sync') ();
let nome =prompt("Qual o seu nome?")

console.log( "Ola " + nome)

let idade = prompt("Qual a sua idade?")

console.log("Qual a sua idade?")

//

 if(idade >=18 ) {
     console.log("Maior de idade")
 }else{
     console.log("Menor de idade")
 }


 let notaProva1 = Number (prompt("Qual foi sua nota na prova 1?")) // tranformando string para numero baasta usa (Number)
 let notaProva2 = Number (prompt("Qual foi sua nota na prova 2?"))

 let media = (notaProva1 + notaProva2) / 2
 console.log("Media: ", media)
 if (media >=6){
    console.log ("Aluno aprovado")
 }else{
    console.log ("Aluno reprovado")
 }