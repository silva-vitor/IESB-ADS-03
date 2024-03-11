let prompt = require('prompt-sync') ();

let salario = Number (prompt("Qual o seu salario? R$"));
let reajuste= Number (prompt("quantos porcento de reajuste?"));
let novosalario =  (1+ reajuste / 100) *salario ;
console.log("Novo salario:R$ ", novosalario);
