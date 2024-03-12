let prompt = require('prompt-sync') ();

let raio = Number (prompt("Qual o valor do raio?"));
let altura = Number (prompt("Qual o valor da altura?"));

val= Math.PI;
raio=raio*raio;
valorDeAgua = val*raio*altura;

console.log("valor de água: ", valorDeAgua + " litros");
