const express= require('express')
const app = express()

/*Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api 
que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha
 direito ao aumento.*/
 app.get('/salario', (req, res)=>{
    
    const salario = (req.params.salario)
    const reajuste = 1000 * 0.30
    const resultado = reajuste <1000 ? "reajusta salario " :"Não tem rejuste "
    res.send(`salario:${resultado}`)
  })
  app.listen(3000,()=>{
    console.log(`Serviso rodando em http//localhost:3000`)
  })

  




