
    //função sem paramentro e sem retorno

    function executador() {
        console.log("executado")
    }
    executador()

    // função com paramento e sem retorno
    
    function soma(numA, numB){
        console.log(numA + numB)
    }
    soma(2, 2)
    soma(6, 8)
    soma(10, 10)
console.log("dentro da variável")
    //função na variavel
    //tem que chama o arquivo para ser executado
    const soma2 = function(numA, numB){
        console.log(numA + numB)
    }

    soma2(2, 3)
    soma2(6, 9)
    soma2(13, 10)

    //função na variavel retorno
    //tem que chama o arquivo para ser executado
    console.log("retorno da variável")
    const soma3 = function(numA, numB){
       return numA + numB
    }

    
    const resultado = soma3(13, 10)
    console.log("o resultado e: ", resultado)


    const multiplicacao = function(numA, numB){
        return numA * numB
        
    }
    console.log("o resultado da multiplicação e: ")
    console.log(multiplicacao(10, 1000))

    const multiplicar2 = (numA, numB)=> numA * numB

    console.log("chamando multiplicar2")
    console.log(multiplicar2(10, 10))
  