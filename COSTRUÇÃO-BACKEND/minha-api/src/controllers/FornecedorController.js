const Fornecedor = require('../models/Fornecedor')

async function create(req,res){
    const fornecedor = new Fornecedor(req.body)
    const fornecedorCriado = await fornecedor.save()
    res.status(201).json(fornecedorCriado)
}

async function getAll(req, res) {
  
    res.json(await Fornecedor.find());

}

async function getById(req, res) {
    
    const fornecedor = await Fornecedor.findById(req.params.id)
    if (fornecedor) {
        res.json(fornecedor);
    } else {
        res.status(404).json({ mensagem: "fornecedor não encontrado" });
    }
}
async function update(req, res) {
   
    const fornecedorAte = await Fornecedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (fornecedorAte) {
        res.json(fornecedorAte);
    } else {
        res.status(404).json({ mensagem: " não encontrado" });
    }
}
async function remove(req, res){
    const fornecedorDel = await Fornecedor.findByIdAndDelete(req.params.id)
    if(fornecedorDel){
        res.json({mensagem:" deletado com sucesso!",
             fornecedorDel
        })
    }
    else{
        res.status(400).json({mensagem:"Erro ao deletar !"})
    }
}
        module.exports = {
            create,
            getAll,
            getById,
            update,
            remove
        }