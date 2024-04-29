const express = require('express')
const router = express.Router()

//lista mokada
let listaProdutos= [{

 id: 1,
 nome:"coca-cola",
 preco:4.99
},
{
    id: 2,
    nome: "Batata frita",
    preco:9.99
},
{
    id:3,
    nome: "Arroz",
    preco: 29.99
}]
// READ-> Buscar todos os produtos
router.get('/produtos',(req, res )=>{
    res.json(listaProdutos)
})
// READ -> Busca o produto pelo id
router.get('/produtos/:id',(req,res)=>{
    const id = req.params.id
    const index= listaProdutos.findIndex(produto=>produto.id == id)
    const produto = listaProdutos[index]
    res.json(produto)
})
//Crate->criar um produto
router.post('/produtos',(req, res)=>{
    const novoProduto = req.body
    const produto={
        id: listaProdutos.length +1,
        nome: novoProduto.nome,
        preco:novoProduto.preco
    }
    listaProdutos.push(produto)
    res.json("produto cadastado")
})
// DELETE -> Deletar um produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const index = listaProdutos.findIndex(produto => produto.id == id);
     res.json("Produto exluido")
})// UPDATE -> Alterar um produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produtoAlterado = {
        id: id,
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAlterado

    res.json({ mensagem: "Produto alterado com sucesso!"})
})

    module.exports= router