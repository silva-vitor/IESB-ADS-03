let prompt = require('prompt-sync') ();

let votosBrancos = Number (prompt("Quantos votos brancos?"));
let votosNulos = Number (prompt("Quantos votos nulos?"));
let votosValidos = Number (prompt("Quantos votos validos?"));

let totalVotos = votosBrancos + votosNulos + votosValidos;

let porcentagemVotosBrancos = (votosBrancos / totalVotos) * 100;
let porcentagemVotosNulos = (votosNulos / totalVotos) * 100;
let porcentagemVotosValidos = (votosValidos / totalVotos) * 100;

console.log("Porcentagem de votos brancos: ", porcentagemVotosBrancos);
console.log("Porcentagem de votos nulos: ", porcentagemVotosNulos);
console.log("Porcentagem de votos validos: ", porcentagemVotosValidos);
console.log("Total de votos: ", totalVotos)