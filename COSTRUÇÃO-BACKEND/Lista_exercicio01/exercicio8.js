const prompt = require('prompt-sync') ();

const raio = Number (prompt("Qual o valor do raio?"));
const altura = Number (prompt("Qual o valor da altura?"));

val= Math.PI;
valorRaio=raio*raio;
valorDeAgua = val*valorRaio*altura;

console.log("valor de água: ", valorDeAgua + " litros");
