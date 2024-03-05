//comentario de uma linha

/* comentário de várias linhas (em bloco)

*/

//Inpresão de dados no console (terminal)
console.log("testando impressão no terminal")

console.error("testando erro")

console.warn("testando console.warn")

//criando variáveis com var
var nome;
nome = "vitor";
nome="vitor silva";

console.log("imprimindo variável nome: ")
console.log(nome)

// let e cost

//cost (costante)
//cria variaveis que não podem ser alteradas
const primeiroNome = "vitors"
//primeiroNome ="carlos" //Não posso reatribuir variáveis constantes

console.log(primeiroNome)

//let
// criar variaveis que podem ser alteradas

let idade
idade =20
idade = 30
idade= "trinta"

console.log("imprimindo o valor da variavel idade (com let)")
console.log(idade)

//Tipo de dados
//string

let nomeCompleto = "vitor pereira da silva "
nomeCompleto='vitor pereira da silva '

//let textoOla= "ola" + nomeCompleto +",tudo bem com você ?"+ "qual o seu nome ?"+ idade + "anos"
let textoOlaCOmplateString = `ola ${nomeCompleto}, tudo bem com você ?` // template string

console.log(textoOlaCOmplateString)

let nomeUsuario = "vitor silva"
let idadeUsuario = 23
let cusoUsuario = "analise e desenvolvimento de sistemas"

//template string
let pessoaComTemplateString = `
Olá ${nomeUsuario},
sua idade é ${idadeUsuario},
e seu curso é ${cusoUsuario}
no IESB 
`

console.log(pessoaComTemplateString)








