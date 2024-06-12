const Cargo = require('../models/Cargo')

async function create(req,res){
    const cargo = new Cargo(req.body)  
    const cargoCriado = await cargo.save() 
 res.status(201).json(cargoCriado) 

}

async function getAll(req , res){
    res.json(await Cargo.find())

}
 async function getById (req, res){
    const cargo = await Cargo.findById(req.params.id)
    if(cargo){
        res.json(cargo)
    }else{
        res.status(404).json({ mensagem: "Cargo não encontrado !"})
    }
 }

 async function update(req, res){
    const atualizarCargo = await Cargo.findByIdAndUpdate(req.params.id , req.body, {new: true})
    if(atualizarCargo){
        res.json(atualizarCargo)
    }else{
        req.status(404).json({ mensagem : "CArgo nao encontrado !"})
    }
 }
 async function remove(req, res){
    const procurarDELETAR = await Cargo.findByIdAndDelete(req.params.id)
    if(procurarDELETAR){
        res.json({mensagem:" deletado com sucesso!",
            procurarDELETAR
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
};