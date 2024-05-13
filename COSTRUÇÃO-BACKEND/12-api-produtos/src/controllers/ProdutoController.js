    const Produto = require ('../models/produtos')



 

 async function create (req, res){
   try{ const produto = new Produto(req.body)
    const produtoCriado = await produto.save()
     res.status(201).json(produtoCriado)}
     catch(error){
        console.log(error)
        res.status(500).json(
            {
                mensagem: "ocorreu um erro ao conectar produto", 
                erro:error
            }
        )
     }
 }
 async function getAll(req,res){
    res.json(await Produto.find())
}

 async function getById(req, res){
        const produto = await Produto.findById(req.params.id)
        if(produto){
            res.json(produto)
        }else{
            res.status(404).json({mensagem:"Produto não encontrado"})
        }
    }
    async function update(req, res) {
        try {
            const produtoAtulizado = await Produto.findByIdAndUpdate(req.params.id, req.body)
            res.json(produtoAtulizado)
        } catch (error) {
            console.error("Erro ao atualizar produto: ", error)
            res.status(400).json({
                mensagem: "Erro ao atualizar produto!",
                erro: error.message
            })
        }
    }
    
    async function remove(req,res){
        await Produto.findByIdAndDelete(req.params.id)
        res.json({
            mensagem: "produto excuido com sucesso"
        })
    }


module.exports = {
create,
getAll,
getById,
update,
remove

}







    module. exports ={
        getAll,
        create
    }