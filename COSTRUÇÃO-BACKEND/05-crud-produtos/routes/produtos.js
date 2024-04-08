    const express = require('express')
    const router = express.Router()


    //lista mockada
    let listaProdutos=[
        {
            id:1,
            nome:" coca-cola",
            preco:4.99
        },
        {
            id: 2,
            nome: "Bata frita",
            preco: 9.99
        },
        {
            id: 3,
            nome: "arroz",
            preco: 29.99

        }
    ]

    //READ -> Buscar todos os produtos
    router.get('/produtos', (req, res )=>{
        res.json(listaProdutos)
    })
    //READ -> Busca produto pelo id
    router.get('/produtos/:id',(req,res)=>{
        const id = req.params.id
        const index = listaProdutos.findIndex(produto => produto.id == id)
        const produto = listaProdutos[index]
        res.json(produto)
    })
    //create -> criar um produto
    router.post('/produtos',(req,res)=>{
        const novoProduto = req.body

        const produto= {
            id: listaProdutos.length +1,
            nome: novoProduto.nome,
            preco: novoProduto.preco
        }
        listaProdutos.push(produto)
        res.json({mensagem:"Produto cadastrado com sucesso!"})
    })

    modulo.express= router