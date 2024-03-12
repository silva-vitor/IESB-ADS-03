const prompt = require('prompt-sync') ();

const nota1 = Number (prompt("Nota da P1 ?"));
const nota2 = Number (prompt("Nota da P2 ?"));
const nota3 = Number (prompt("Nota da P3 ?"));
const nota4 = Number (prompt("Nota da P4 ?"));

const media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Media: ", media)
if (media >=7){
   console.log ("APROVADO ")
}else{
   console.log (" REPROVADO")
}
