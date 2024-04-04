/*
05. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array
com os números de Fibonacci. Exiba o resultado usando o método join.
*/


function nacci(n1, n2){
    const fibo = []
    
    fibo.push(n1)
    fibo.push(n2)
    
    for (let i = 2; i < 20; i++) {
        fibo[i] = fibo[i - i] + fibo[i - 2]
    
    }
    
    console.log(fibo.join('-'))
    
    }
    
    nacci(5,8)
    
    