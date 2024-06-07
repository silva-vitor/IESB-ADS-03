const Fornecedor = require('../models/Fornecedor')

async function create(req,res){
    const fornecedor = new Fornecedor(req.body)
    const fornecedorCriado = await fornecedor.save()
    res.status(201).json(fornecedorCriado)
}

async function getAll(req, res){
 const fornecedor =await Fornecedor.findById(req.params.id)
}
async function getById(req,res){
    const fornecedor = await Fornecedor.findById(req.params.id)
    if(fornecedor){
        req.json(fornecedor)
    }else{
        res.status.json({
            mensagem: "id invalido "
        })
    }
    
}
async function update(req, res){
    const fornecedorAtualizado = await Fornecedor.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(fornecedorAtualizado){
        res.json(fornecedorAtualizado)
    }else{
        res.json({mensagem: "Fornecedo não encontrado enforme um id valido "})
    }
}
async function remove(req, res ){
    const excluirFornecedor = await Fornecedor.findByIdAndDelete(req.params.Id)
    if(excluirFornecedor){
        res.json({mensagem: "fornecedor excuido ", excluirFornecedor})
    }else{
        res.status(404).json({mensagem: "Fornecedo não encontrado informe um id valido "})
    }
}
        module.exports = {
            create,
            getAll,
            getById,
            update,
            remove
        }