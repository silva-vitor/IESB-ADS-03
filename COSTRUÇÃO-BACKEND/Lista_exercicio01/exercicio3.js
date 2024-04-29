const prompt = require('prompt-sync') ();

const salario = Number (prompt("Qual o seu salario? R$"));
const reajuste= Number (prompt("quantos porcento de reajuste?"));
const novosalario =  (1+ reajuste / 100) *salario ;

console.log("Novo salario:R$ ", novosalario);
