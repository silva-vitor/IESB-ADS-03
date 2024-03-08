let prompt = require('prompt-sync') ();

let total_de_eleitores = Number (prompt("Total de eleitores?"));
let votos_branco = Number (prompt("Votos em branco?"));
let votos_nulos = Number (prompt("Votos nulos?"));
let votos_validos = Number (prompt("Votos validos?"));
let porcentagem_branco = (votos_branco * 100) / total_de_eleitores
let porcentagem_nulos = (votos_nulos * 100) / total_de_eleitores
let porcentagem_validos = (votos_validos * 100) / total_de_eleitores
console.log("Porcentagem de votos em branco: ", porcentagem_branco ,"%")
console.log("Porcentagem de votos nulos: ", porcentagem_nulos, "%")
console.log("Porcentagem de votos validos: ", porcentagem_validos, "%")