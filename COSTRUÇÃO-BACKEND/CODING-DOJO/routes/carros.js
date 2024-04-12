const express = require('express')
const router = express.Router()

let listaCarros = []

router.get('/carros', (req, res) => {
    res.status(200).json(listaCarros)
})

router.post('/carros', (req, res) => {
    const dados = req.body
    // Verificar se todos os campos obrigatórios foram fornecidos
    if (!dados.marca || !dados.modelo || !dados.cor || !dados.valor) {
        res.status(400).json('Obrigatório informar os campos marca, modelo, cor e valor')
    } else {
        const novoCarro = {
            marca: dados.marca,
            modelo: dados.modelo,
            cor: dados.cor,
            valor: dados.valor
        }
        listaCarros.push(novoCarro)
        res.status(201).json(novoCarro)
    }
})

router.get('/carros/:cor', (req, res) => {
    const cor = req.params.cor 
    const carrosComCor = listaCarros.filter(carro => carro.cor === cor)
    res.status(200).json(carrosComCor)
})
module.exports = router
