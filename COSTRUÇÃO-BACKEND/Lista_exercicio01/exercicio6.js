let prompt = require('prompt-sync') ();


 let numeroCarros = Number (prompt("Quantos carros foram vendidos?"));
 let valorTotalVendido = Number (prompt("Qual o valor total de vendas?"));
 let salerioFixo = Number (prompt("Qual o valor do salerio fixo?"));
 let valorPorCarroVendido = Number (prompt("Qual o valor por carro vendido?"));
 



 comisao= 0.05;

 comisaoveiculo= valorPorCarroVendido * 0.05;
 comisaoFixa = numeroCarros*comisaoveiculo;
 salarioFinal = comisaoveiculo + comisaoFixa + salerioFixo;

  console.log ("Salário Final: ",salarioFinal)
 
  