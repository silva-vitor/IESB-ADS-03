//condiçães
//if else 

    let nomeAluno = "vitor"
    let idade = 23
    let curso = "ADS"

    if (idade > 18) {
        console.log(`${nomeAluno} e maior de idade`)
    } else {
        console.log(`${nomeAluno} e menor de idade`)
    }
     //se as duas condição for atendida o else vai ser executado

    if(idade >=18 && curso == "ADS") {
        console.log("Aluno e Valido")
    }
  // alguma das enformação tem que ser atendida
    if(idade >=18 || curso == "ADS") {
        console.log("Aluno e Valido")
    }

    if(nomeAluno == "vitor") {
        console.log("O nome do aluno e vitor")
    }if(idade == 23) {
        console.log("Aluno e maior de idade")
    }if(curso == "ADS") {
        console.log("Aluno e do curso de ADS")
    }

// Repetição loop
// laço for
    /* for(inicializacao; condicao; incremento) {
        //bloco de instruções
    } */

    /* for (let contador = 0; contador  < 10; contador = contador ++) {
        console.log("loop")
    } */

    for(let contador = 1; contador <= 10; contador = contador +1) {
        console.log("contador", contador)
        console.log("teste")
        console.log("validando")
        console.log("ola")
    }
    for(let i = 0; i <= 10; i = i +1) {
        console.log("i", i)
    }


    
