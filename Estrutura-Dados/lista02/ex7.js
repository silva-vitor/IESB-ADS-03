/*07. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz,
inicialize todos os elementos de 1 até 'linha x coluna'. Para preencher cada elemento use a
soma dos seus índices.*/


let arrayVazio = []
let array = [1, 2, 3, 4, 5,6]
let array1 = [1, 2, 3, 4, 5,6]
let soma = 0
let soma1 = 0

function somando(resultado){


for(let i = 0; i < array.length; i++ ){
    soma += array[i]
   

}

for(let j = 0; j < array1.length; j++){
    soma1+= array1[j]
}

resultado = soma + soma1
return resultado



}

let total = somando(arrayVazio)

console.log(total)