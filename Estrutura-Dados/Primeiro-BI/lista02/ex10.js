/*10. Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
acordo com as regras a seguir:
a. Se o número for par, empilhe na deClasse chamada par;
b. Se o número for ímpar, empilhe na deClasse chamada impar;
c. Se o número for zero (0), desempilhe um elemento de cada deClasse. Caso alguma deClasse
esteja vazia, mostre uma mensagem de erro na tela.
d. Ao final do programa desempilhe todos os elementos das duas deClasses, imprimindo-os na
tela
*/

var prompt = require('prompt-sync')();

class deClasse {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        if (this.isEmpty()) {
            return "deClasse vazia";
        }
        return this.itens.pop();
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    clear() {
        this.itens = [];
    }

    saida() {
        return this.itens;
    }

    desempilhar() {
        let elementosDesempilhados = [];

        while (!this.isEmpty()) {
            elementosDesempilhados.push(this.pop());
        }

        return elementosDesempilhados;
    }
}

function principal() {
    let par = new deClasse();
    let impar = new deClasse();

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Digite um número:"));

        if (numero % 2 === 0) {
            par.push(numero);
        } else {
            impar.push(numero);
        }
    }

    if (!par.isEmpty() && !impar.isEmpty()) {
        par.pop();
        impar.pop();
    } else {
        console.log("Erro: uma das deClasses está vazia.");
    }

    console.log("par:", par.saida());
    console.log("ímpar:", impar.saida());

    console.log("desempilhados", par.desempilhar());
    console.log("desempilhados", impar.desempilhar());

    // Limpando as pilhas
    par.clear();
    impar.clear();
}

principal();
