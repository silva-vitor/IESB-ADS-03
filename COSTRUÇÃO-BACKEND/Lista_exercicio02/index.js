
const express = require('express');
const app = express();

app.use(express.json())
//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
 //PATH PARAMS
 app.get('/ex1/:quantidadeMin/:quatidadeMax', (req,res)=>{
    const quantidadeMinima =Number(req.params.quantidadeMin)
    const quantidadeMaxima= Number(req.params.quatidadeMax)

    const estoqueMedio= (quantidadeMinima + quantidadeMaxima)/2
     res.send(
        `Aquatidade media:${estoqueMedio}`
     )
 })
 

//query param 
app.get('/ex1', (req, res )=>{
   
    const quantidadeMinima = Number(req.query.quantidadeMin)
    const quantidadeMaxima = Number(req.query.quantidadeMax)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) /2
    
    res.send( `Aquantidade media:${estoqueMedio}  ` )
})
app.post('/ex1', (req, res )=>{
   
    const quantidadeMinima = Number(req.body.quantidadeMin)
    const quantidadeMaxima = Number(req.body.quantidadeMax)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) /2
    
    res.send( `Aquantidade media:${estoqueMedio}  ` )
})

/*2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um 
funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.*/

 //PATH PARAMS
app.get('/ex2/:salario', (req, res)=>{

const salario = Number(req.params.salario)
if(salario < 1000){
    const reajuste = (salario * 30) / 100
    const novoSalario = reajuste + salario
    res.json(`O novo salario e ${novoSalario}`)}else{
        res.json("Nao tem direito ao reajuste")
        
    }
   
} ) //query param 
    app.get('/ex2', (req , res )=>{
        const salario = Number(req.query.salario)
        
        if(salario < 1000){
            const reajuste = (salario * 30)/100
            const novoSalario = reajuste + salario
            res.json(`O novo salario e ${novoSalario}`)
        }else{
            res.json("Não tem direito ao reajuste")
        }
    })
    //bady
    app.post('/ex2', (req, res)=>{
        const salario = Number (req.body.salario)
        

       if(salario < 1000){
            const reajuste = (salario * 30) / 100
            const novoSalario = reajuste + salario
            res.json (`O novo salario e de ${novoSalario}`)
        }else{
            res.json ("Nâo tem direito ao reajuste")
        }
    })
    /*3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas 
    por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor.
     Escrever o nome do vendedor e seu salário total.
*/
//params
app.get('/ex3/:nome/:salario/:vendas/:porcentagem', (req, res ) =>{

const nome =  req.params.nome
const salario =Number(req.params.salario)
const vendas = Number(req . params.vendas)
const porcentagem = Number(req.params.porcentagem)

const por =  (vendas * porcentagem) /100
const salarioFinal = salario +por

res.json(`Ola ${nome} seu salario esse mes foi de R$ ${salarioFinal}`)
})

//query
app.get('/ex3', (req, res ) =>{

    const nome =  req.query.nome
    const salario =Number(req.query.salario)
    const vendas = Number(req . query.vendas)
    const porcentagem = Number(req.query.porcentagem)
    
    const por =  (vendas * porcentagem) /100
    const salarioFinal = salario +por
    
    res.json(`Ola ${nome} seu salario esse mes foi de R$ ${salarioFinal}`)
    })
   //body
    app.post('/ex3', (req, res ) =>{

        const nome =  req.body.nome
        const salario =Number(req.body.salario)
        const vendas =Number(req . body.vendas)
        const porcentagem =Number(req.body.porcentagem)
        
        const por =  (vendas * porcentagem) /100
        const salarioFinal = salario +por
        
        res.json(`Ola ${nome} seu salario esse mes foi de R$ ${salarioFinal}`)
        })
        /*4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la
         (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase:
          A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
 */
//params

 app.get('/ex4/:nome/:distancia/:tempo',(req, res )=>{
    const nome = req.params.nome
    const distancia = req.params.distancia
    const tempo = req.params.tempo

    const velocidadeMedia = distancia/tempo

    res.json(`A velocidade média do ${nome} foi de ${velocidadeMedia} Km/h`)
 })
 //query
 app.get ('/ex4',(req, res)=>{
    const nome = req.query.nome
    const distancia = Number(req.query.distancia)
    const tempo = Number(req.query.tempo)

    const velocidadeMedia = distancia/tempo

    res.json(`a velocidade media do ${nome}foi de ${velocidadeMedia}Km/h`)
 })
 //body
 app.post(`/ex4`, (req, res)=>{
    const nome = req.body.nome
    const distancia = Number(req.body.distancia)
    const tempo = Number (req.body.tempo)

    const velocidadeMedia = distancia/tempo

    res.json(`A velocidade media do ${nome}foi de ${velocidadeMedia}Km/h`)
 })
/*5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/
//params
app.get('/ex5/:salario', (req, res) => {
    const salario = Number(req.params.salario);

  
    if (salario <= 2000){
        const reajuste1 = salario + (salario * 50 )/100
        res.json(`seu novo salario e de  ${reajuste1}`)
    }if (salario >2000){
        const reajuste2 = salario + (salario * 30)/100
        res. json (`seu novo salario e de ${reajuste2}`)
    }
})

//query
app.get('/ex5', (req, res)=>{
    const salario = Number(req.query.salario)

    if(salario <= 2000){
        const reajuste1 = salario + (salario*50)/100
        res.json(`Seu novo salario e de ${reajuste1}`)
    }if( salario > 2000){
        const reajuste2 = salario + (salario*30)/100
        res.send(`Seu novo salario e de ${reajuste2}`)
    }
})
//body

app.post('/ex5',(req, res)=>{
    const salario = Number(req.body.salario)
    if(salario <= 2000){
        const reajuste1 = salario + (salario*50)/100
        res.json(`Seu novo salario e de ${reajuste1}`)
    }if( salario > 2000){
        const reajuste2 = salario + (salario*30)/100
        res.send(`Seu novo salario e de ${reajuste2}`)
    }
    /*6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
 */
})
//params

app.get('/ex6/:altura/:sexo', (req, res) => {
    const altura = Number(req.params.altura);
    const sexo = req.params.sexo;

    if (sexo === 'Masculino') {
        const calculoPeso = (72.7 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calculoPeso.toFixed(2)} kg.`);
    } else if (sexo === 'feminino') {
        const calcularPesoMulher = (62.1 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calcularPesoMulher.toFixed(2)} kg.`);
    } else {
        res.status(400).json('Por favor, especifique "Masculino" ou "feminino" como sexo.');
    }
});
//query
app.get ('/ex6',(req, res)=>{
    const altura = Number(req.query.altura)
    const sexo = req.query.sexo

    if (sexo === 'masculino') {
        const calculoPeso = (72.7 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calculoPeso.toFixed(2)} kg.`);
    } else if (sexo === 'feminino') {
        const calcularPesoMulher = (62.1 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calcularPesoMulher.toFixed(2)} kg.`);
    } else {
        res.status(400).json('Por favor, especifique "Masculino" ou "feminino" como sexo.');
    }
})
//body
app.post('/ex6', (req,res)=>{
    const altura = Number(req.body.altura)
    const sexo = req.body.sexo

    if (sexo === 'masculino') {
        const calculoPeso = (72.7 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calculoPeso.toFixed(2)} kg.`);
    } else if (sexo === 'feminino') {
        const calcularPesoMulher = (62.1 * altura) - 58;
        res.status(200).json(`Seu peso ideal é ${calcularPesoMulher.toFixed(2)} kg.`);
    } else {
        res.status(400).json('Por favor, especifique "Masculino" ou "feminino" como sexo.');
    }
})
    /*  7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.*/

    app.post("/ex7", (req, res) => {
        const corpo = req.body
        let listaProdutos = []
        
        corpo.forEach(produto => {
            listaProdutos.push(produto)
        });
    
        let soma = 0
        listaProdutos.forEach(produto => {
            soma = soma + produto.preco
        })
    
        const media = soma / listaProdutos.length
    
        // calcular o maiorPreco
        let maiorPreco = 0
        // logica
        listaProdutos.forEach(produto => {
            if (produto.preco > maiorPreco){
                maiorPreco = produto.preco
            }
        })
    
        const resultado = {
            precoMedio: media.toFixed(2),
            maiorPreco: maiorPreco
        }
        res.json(resultado)
    })
    /* 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo.
     Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não
      estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/
//PARAMS
app.get('/ex8/:salario/:codigo', (req, res)=>{
    const salario = Number(req.params.salario)
    const codigo = Number (req.params.codigo)

 if(codigo === 101){
    const reajuste = salario + (salario * 5)/100
    const diferença = reajuste - salario

    res.json(`seu salario atigo e R$${salario} seu novo salario era R$ ${reajuste}seu almento foi de R$ ${diferença}`)



 }if (codigo === 102){
    const reajuste = salario +(salario * 7.5)/100
    const diferença = reajuste - salario

    res.json(`Seu salario antigo era R$ ${salario}seu novo salario e R$ ${reajuste} seu almento foi de  R$ ${diferença}`)


 }else if(codigo === 103){
    const reajuste =salario + (salario * 10)/100
    const diferença =reajuste - salario 
    res.json (`seu salario antigo era R$ ${salario} seu novo salario e de R$ ${reajuste} seu almento foi de R$ ${diferença}`)

    

 }else{
    const foraDaTabela = salario +(salario*15)/100
    const diferença = foraDaTabela - salario

    res.json(`seu salario antigo era de R$ ${salario}Seu novo salario e de ${foraDaTabela} seu almento foi de R$ ${diferença}`)
 } 
})
//QUERY
app.get ('/ex8', (req, res )=>{
    const salario = Number (req.query.salario)
    const codigo = Number (req.query.codigo)

    if(codigo === 101){
        const reajuste = salario + (salario * 5)/100
        const diferença = reajuste - salario
    
        res.json(`seu salario atigo e R$${salario} seu novo salario era R$ ${reajuste}seu almento foi de R$ ${diferença}`)
    
    
    
     }if (codigo === 102){
        const reajuste = salario +(salario * 7.5)/100
        const diferença = reajuste - salario
    
        res.json(`Seu salario antigo era R$ ${salario}seu novo salario e R$ ${reajuste} seu almento foi de  R$ ${diferença}`)
    
    
     }else if(codigo === 103){
        const reajuste =salario + (salario * 10)/100
        const diferença =reajuste - salario 
        res.json (`seu salario antigo era R$ ${salario} seu novo salario e de R$ ${reajuste} seu almento foi de R$ ${diferença}`)
    
        
    
     }else{
        const foraDaTabela = salario +(salario*15)/100
        const diferença = foraDaTabela - salario
    
        res.json(`seu salario antigo era de R$ ${salario}Seu novo salario e de ${foraDaTabela} seu almento foi de R$ ${diferença}`)
     } 
    })
    //BODY
    app.post('/ex8', (req , res )=>{ 
        const salario = Number(req.body.salario)
        const codigo = Number(req.body.codigo)

        if(codigo === 101){
            const reajuste = salario + (salario * 5)/100
            const diferença = reajuste - salario
        
            res.json(`seu salario atigo e R$${salario} seu novo salario era R$ ${reajuste}seu almento foi de R$ ${diferença}`)
        
        
        
         }if (codigo === 102){
            const reajuste = salario +(salario * 7.5)/100
            const diferença = reajuste - salario
        
            res.json(`Seu salario antigo era R$ ${salario}seu novo salario e R$ ${reajuste} seu almento foi de  R$ ${diferença}`)
        
        
         }else if(codigo === 103){
            const reajuste =salario + (salario * 10)/100
            const diferença =reajuste - salario 
            res.json (`seu salario antigo era R$ ${salario} seu novo salario e de R$ ${reajuste} seu almento foi de R$ ${diferença}`)
        
            
        
         }else{
            const foraDaTabela = salario +(salario*15)/100
            const diferença = foraDaTabela - salario
        
            res.json(`seu salario antigo era de R$ ${salario}Seu novo salario e de ${foraDaTabela} seu almento foi de R$ ${diferença}`)
         }
    })
    /*9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a 
    quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
 */
app.get('/ex9', (req , res)=>{
    const salarioMinimo = Number(req.params.salarioMinimo);
    const horasTrabalhadas  = Number (req.params.horasTrabalhadas);
    const depensentes = Number(req.params.depensentes);
    const horasExtras = Number(req.params.horasExtras);

    const valorHoras = salarioMinimo / 5;
     const salarioMensal = horasTrabalhadas * valorHoras;
     const valorExtra=  (valorHoras * 50) /100
     const valorDependente = depensentes * 32
     const salarioBruta =  salarioMensal + depensentes
     
})

app.listen(3000, ()=>{
    console.log("porta da aplicação e http://localhhost:3000")
 })