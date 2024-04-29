/*
06. Faça o mesmo do exercício anterior, mas com fatorial.
Fatorial de 0: 0! = '
Fatorial de 1: 1 x elemento0 = 1
Fatorial de 2: 2 x elemento1 = 2
Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
...
Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!
*/

function fatorial(numeros) {
    let arrayFatorial = []
    let fatorial = 1
    
    for (let i = 1; i <= numeros; i++) {
        fatorial *= i
        arrayFatorial.push(fatorial)
    }
    console.log(arrayFatorial.join(' - '))
}

fatorial(9)