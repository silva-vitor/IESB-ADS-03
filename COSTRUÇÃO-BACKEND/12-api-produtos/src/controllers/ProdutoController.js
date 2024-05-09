    const Produto = require ('../models/produtos')


// busca
 async function getAll(req, res){
    const produtos = await Produto.find()
    res.json(produtos)
 }
 //criar 

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







    module. exports ={
        getAll,
        create
    }