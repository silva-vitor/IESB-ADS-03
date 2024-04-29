const prompt = require('prompt-sync') ();

const votosBrancos = Number (prompt("Quantos votos brancos?"));
const votosNulos = Number (prompt("Quantos votos nulos?"));

const totosValidos = Number (prompt("Quantos votos validos?"));
const votosValidos = Number (prompt("Quantos votos validos?"));
const totalVotos = votosBrancos + votosNulos + votosValidos;

const porcentagemVotosBrancos = (votosBrancos / totalVotos) * 100;
const porcentagemVotosNulos = (votosNulos / totalVotos) * 100;
const porcentagemVotosValidos = (votosValidos / totalVotos) * 100;

console.log("Porcentagem de votos brancos: ", porcentagemVotosBrancos);
console.log("Porcentagem de votos nulos: ", porcentagemVotosNulos);
console.log("Porcentagem de votos validos: ", porcentagemVotosValidos);
console.log("Total de votos: ", totalVotos)