let prompt = require('prompt-sync') ();

let nota1 = Number (prompt("Nota da P1 ?"));
let nota2 = Number (prompt("Nota da P2 ?"));
let nota3 = Number (prompt("Nota da P3 ?"));
let nota4 = Number (prompt("Nota da P4 ?"));

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Media: ", media)
if (media >=7){
   console.log ("APROVADO ")
}else{
   console.log (" REPROVADO")
}
