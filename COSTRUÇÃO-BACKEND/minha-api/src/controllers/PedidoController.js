const Pedido = require('../models/Pedido')

async function create(req, res) {
    
        const pedido = new Pedido(req.body);
        const pedidoCriado = await pedido.save();
        res.status(201).json(pedidoCriado);
    }
      
async function getAll(req, res) {
  
        res.json(await Pedido.find())
    
   }




async function getById(req, res) {
    
        const pedido = await Pedido.findById(req.params.id)
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ mensagem: "não encontrado" });
        }
    }
async function update(req, res) {
   
        const pedidoAt = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pedidoAt) {
            res.json(pedidoAt);
        } else {
            res.status(404).json({ mensagem: " não encontrado" });
        }
    }



    async function remove(req, res){
        const procurarDELETAR = await Pedido.findByIdAndDelete(req.params.id)
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
}
