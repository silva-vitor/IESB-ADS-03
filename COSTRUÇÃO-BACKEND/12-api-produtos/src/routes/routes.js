const express = require ('express')
    const router = express.Router()

    const ProdutoController= require('../controllers/ProdutoController')

    router.get ('/', (req, res )=>{
        res.json ("OK")
    })

    // rotas de Produtos

// Rota para obter todos os produtos
router.get('/', ProdutoController.getAll);

// Rota para criar um novo produto
router.post('/', ProdutoController.create);



    module.exports = router