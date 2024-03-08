let prompt = require('prompt-sync') ();

let valorCusto = Number(prompt("qual o valor de custo do veiculo ? R$"));
let valorDistribuidor= Number(prompt("qual a porcentagem do distribuidor ? "));
let valorImpostos= Number(prompt("qual a porcentagem dos impostos ? "));


 custoDistribuidor = valorCusto * valorDistribuidor/100;
 custoImpostos = valorCusto * valorImpostos/100;
 custo = valorCusto + custoDistribuidor + custoImpostos;

 console.log("Valor de venda : R$ ", custo)