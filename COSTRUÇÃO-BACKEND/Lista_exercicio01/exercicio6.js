const prompt = require('prompt-sync') ();


 const numeroCarros = Number (prompt("Quantos carros foram vendidos?"));
 const valorTotalVendido = Number (prompt("Qual o valor total de vendas?"));
 const salerioFixo = Number (prompt("Qual o valor do salerio fixo?"));
 const valorPorCarroVendido = Number (prompt("Qual o valor por carro vendido?"));
 



 comisao= 0.05;

 comisaoveiculo= valorPorCarroVendido * 0.05;
 comisaoFixa = numeroCarros*comisaoveiculo;
 salarioFinal = comisaoveiculo + comisaoFixa + salerioFixo;

  console.log ("Salário Final: ",salarioFinal)
 
  