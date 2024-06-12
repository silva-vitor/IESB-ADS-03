const Produtos = require('../models/Produtos')
async function create(req, res){
    const produtos = new Produtos(req.body);
    const produtosCriados = await produtos.save()
    res.status(201).json(produtosCriados)
}
async function getAll(req, res){
  res.json(await Produtos.find().populate(['fornecedor']))
}

async function getById(req, res) {
    
    const produto = await Produtos.findById(req.params.id).populate(['fornecedor']);
    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ mensagem: "produto não encontrado" });
    }
}
async function update(req, res) {
   
    const produtoAt = await Produtos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (produtoAt) {
        res.json(produtoAt);
    } else {
        res.status(404).json({ mensagem: " não encontrado" });
    }
}
 async function remove(req, res){
    const produtoDeletado= await Produtos.findByIdAndDelete(req.params.id)
    if(produtoDeletado){
        res.json({mensagem: "Produto excluido com sucesso",produtoDeletado})
    }else{
        res.status(404).json({mensagem: "Produto não encontrado enforme um id valido paque seja excluido"})
    }
    
 }
  
module.exports = {
    create,
    getAll,
    getById,
    update,

    remove
}