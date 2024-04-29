//localhost:3000 Chama a API

let contador = 0;
const server= require('http');
server .createServer((req, res) =>{
    contador++;
    console.log("contador de Requisições:"+ contador);
    
    res.write("Bem vindo ao meu backend! contador de Requisições:" +contador);
    res.end();
} ).listen(3000);