const express = require('express');

const router = express.Router();



 let listaCarros= [
{
    id: 1,
    marca: "vw",
    modelo:"gol",
    cor: "rosa",
    valor: 80000
},
{
    id: "2",
    marca: "renaut",
    modelo:"kild",
    cor: "branco",
    valor: 70000
}

 ]
//buscar por id
 router.get('/carros',(req,res)=>{
    res.json(listaCarros)
 })

 router.get('/carros/:id',(req,res)=>{
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)
    if(carro){
        res.json(carro)
    }
    return res.status(404).json("Carro nao encontrado")
 })

 //cadastras carros
 router.post('/carros',(req,res)=>{
    const corpo = req.body
    if(!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor){
        return res.status(400).json("campos marca, modelo, cor, valor são obrigatorios")
    }
    const carro ={
        
            id: Math.round(Math.random() * 1000),
            marca:corpo.marca ,
            modelo:corpo.modelo,
            cor:corpo.cor ,
            valor: corpo.valor
       
    }
    listaCarros.push(carro)
    return res.status(201).json('carro criado com sucesso!')
 })
 // atualizar carro
 router.put('carros/id', (req,res)=>{
    if(!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor){
    return res.status(400).json("campos marca, modelo, cor, valor são obrigatorios")
}
const index = listaCarros

 })


module.exports =router