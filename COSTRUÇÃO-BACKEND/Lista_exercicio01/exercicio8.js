let prompt = require('prompt-sync') ();

let raio = Number (prompt("Qual o valor do raio?"));
let altura = Number (prompt("Qual o valor da altura?"));


pi= 3,14
raio=raio*raio;
valorDeAgua = pi*raio*altura;

console.log("valor de água: ", valorDeAgua + " litros");
