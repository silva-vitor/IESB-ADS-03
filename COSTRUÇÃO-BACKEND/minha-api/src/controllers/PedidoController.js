const Pedido = require('../models/Pedido');

async function create(req, res){
    const pedido = new Pedido(req.body);
    const criarPedido = await pedido.save();
    res.status(200).json(criarPedido);
}

async function getAll(req, res) {
    res.json(await Pedido.find())
}

async function getById (req, res ){
    const pedido = await Pedido.findById(req.params.id );
    if(pedido){
        res.json(pedido)
    }else{
        res.status(404).json({ mensagem: "Pedido não encontrado !"});
    }
}
async function update(req,res){
    const atualizarPedido =await Pedido.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(atualizarPedido){
        res.json(atualizarPedido);
    }else{
    req.status(404).json({ mensagem: "Pedido nao encontrado id invalido"});
    }
}
async function remove(req,res){
    const PedidoDeletado = await Pedido.findBayIdDelete(req.params.id)
    if(PedidoDeletado){
        res.json(PedidoDeletado),PedidoDeletado
    }else{
        res.status(404).json({mensagem: "Pedido não encontrado id invalido !"})
    }
}
module.exports= {
    create,
    getAll,
    getById,
    update,
    remove
}