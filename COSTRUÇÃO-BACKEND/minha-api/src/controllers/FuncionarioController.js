const Funcionario = require('../models/Funcionario')

async function create(req, res) {
    
        const funcionario = new Funcionario(req.body);
        const funcionarioCriado = await funcionario.save();
        res.status(201).json(funcionarioCriado);
    }
      
async function getAll(req, res) {
  
        res.json(await Funcionario.find().populate(['cargo']));
    
   }




async function getById(req, res) {
    
        const funcionario = await Funcionario.findById(req.params.id).populate(['cargo']);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado" });
        }
    }
async function update(req, res) {
   
        const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (funcionarioAtualizado) {
            res.json(funcionarioAtualizado);
        } else {
            res.status(404).json({ mensagem: "Funcionário não encontrado" });
        }
    }



    async function remove(req, res){
        const procurarDELETAR = await Funcionario.findByIdAndDelete(req.params.id)
        if(procurarDELETAR){
            res.json({mensagem:"Funcionário deletado com sucesso!",
                procurarDELETAR
            })
        }
        else{
            res.status(400).json({mensagem:"Erro ao deletar funcionário!"})
        }
    }
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
