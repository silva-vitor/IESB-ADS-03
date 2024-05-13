const Funcionario = require('../models/Funcionario')


async function create(req , res){
    try{
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch(error){
        console.error("Error ao criar funcionario ", error)
        res.status(400).json(
            {
                mensagem: "Erro ao criar funcinario ",
                erro: error.message



             })
         }
    }
        async function getAll(req, res){
            res.json(await Funcionario.find())
        }
                async function getById(req, res){
                    const funcionario = await Funcionario.findById(req.params.id)
                    if (funcionario){
                        res.json(funcionario)
                    }else{
                        res.status(404).json({mensagem:" Funcionario não encontrado"})
                    }
                }
                async function update(req,res){
                   try{ 
                        const funcionarioAtualizado= await Funcionario.findByIdAndUpdate(req.params.id,req.body)
                        res.json(funcionarioAtualizado)
                    }catch(error){
                        console.error("Erro ao atualizar funcionario",error)
                        res.status(4040).json({
                            mensagem: "Erro ao atualizar funcionario "
                        })
                    }
                }
                async function remove(req, res){
                    await Funcionario.findByIdAndDelete(req.params.id)
                    res.json("Funcionario escluido com sucesso")
                }

    module.exports={
        create,
        getAll,
        getById,
        update,
        remove
    }