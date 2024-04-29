const prompt = require('prompt-sync') ();

const nota1 = Number (prompt("Nota da P1 ?"));
const nota2 = Number (prompt("Nota da P2 ?"));


nota1= nota1 * 0.4
nota2= nota2 * 0.6
media = (nota1 + nota2) 
console.log("Media: ", media)

if (media >=5){
    console.log ("APROVADO ")
}else{
    console.log (" REPROVADO")
}