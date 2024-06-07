const Cliente = require('../models/Clinte');

async function create(req, res){
    const cliente = new Cliente(req.body);
    const criarCliente = await cliente.save();
    res.status(200).json(criarCliente);
}

async function getAll(req, res) {
    res.json(await Cliente.find())
}

async function getById (req, res ){
    const cliente = await Cliente.findById(req.params.id );
    if(cliente){
        res.json(cliente)
    }else{
        res.status(404).json({ mensagem: "Cliente não encontrado !"});
    }
}
async function update(req,res){
    const atualizarCliente =await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(atualizarCliente){
        res.json(atualizarCliente);
    }else{
    req.status(404).json({ mensagem: "cliente nao encontrado id invalido"});
    }
}
async function remove(req,res){
    const ClienteDeletado = await Cliente.findBayIdDelete(req.params.id)
    if(ClienteDeletado){
        res.json(ClienteDeletado),ClienteDeletado
    }else{
        res.status(404).json({mensagem: "Cliente não encontrado id invalido !"})
    }
}
module.exports= {
    create,
    getAll,
    getById,
    update,
    remove
}