/*
04. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde
esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o
número aparece (como nos métodos indexOf e lastIndexOf).
*/


function vetores(n1, n2, n3, array){
    array = []
    array.push(n1, n2, n3)
    for(let i = 0; i < array.length; i++){
        console.log(`índice: ${i}, número: ${array[i]}`)

    }    

}

vetores(1, 2, 3)