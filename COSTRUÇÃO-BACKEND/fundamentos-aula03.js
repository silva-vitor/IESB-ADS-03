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

// verificar o tipo de variável

console.log("verificando o tipo de variável pessoaComTemplateString")
console.log(typeof pessoaComTemplateString)

//tipo number
let numeroInteiro = 2000
let numeroNegativo = -60
let numeroFlutuante = 25.90

console.log ( numeroInteiro)
console.log ( numeroNegativo)
console.log ( numeroFlutuante)

//tipo array 
//let listacheia = ["wolkeswagem","fiat","honda"]
//let listaCheiaMisturada = [1,2,"nome", null, true]
let lista =[]

console.log(typeof lista)
console.log(lista)

lista. push("PrimeiroItem")

console.log(lista)

//lista.Pop()

console.log(lista)

//boolean
true
false

//tipo object (tipo objeto)

let pessoa ={

    nome: "vitor",
    idade: 23,
    curso: "ADS",
    semestre: "3/2024"

    }

    console.log("imprimindo o objeto pessoa")
    console.log(pessoa)
    console.log (typeof pessoa)
    console.log (`Ola ${pessoa.nome}`)

    // tipo NaN (not a number)

    let teste = 10/ "olá"
    console.log (teste)

    //Tratamento de dados (string)
    let texto = "Vitor Pereira da silva"
    // .length // quantidade de caracteres do texto
    console.log(texto.length)
    
    //texto em caixa alta
    console.log(texto.toUpperCase())

   // texto em caixa baixa
    console.log(texto.toLowerCase()) 

    // replace (substituir)
    let valor="10,50,"
    console.log("valor antes do replace: ", valor)
    
    valor =valor.replace(",", ".")
    console.log( "valor depois do replace: ", valor)

    //tratamento de dados (number)
    let numero = 10.777777777777777777777777

    //fixa o numero de casas do numero flutuante (tofixed)
    console.log(numero.toFixed(2))

    //transformar float para inteiro (parseInt)
    console.log(Number.parseInt(numero))

    let numerointeiro = 10

    //tranformando inteiro para float 
    console.log(Number.parseFloat(numerointeiro).toFixed(2))

    let valorEmDolar = 10.54
    
    console.log(valorEmDolar.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}))
    console.log(valorEmDolar.toLocaleString("pt-BR", {style:"currency", currency:"USD"}))

    let idadeUser = 24
    console.log(Number(idadeUser))
    console.log(Math.PI)
    









