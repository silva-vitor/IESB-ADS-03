class Aluno {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}

// Instanciando um objeto Aluno com seu nome
let aluno = new Aluno("Seu Nome", 18, 70.5);

// Acessando e alterando os valores correspondentes aos tipos
aluno.nome = "vitor pereira";
aluno.idade = 23;
aluno.peso = 85.5;

// Apresentando na console o conteúdo de cada propriedade do objeto
console.log("Nome: " + aluno.nome);
console.log("Idade: " + aluno.idade);
console.log("Peso: " + aluno.peso);