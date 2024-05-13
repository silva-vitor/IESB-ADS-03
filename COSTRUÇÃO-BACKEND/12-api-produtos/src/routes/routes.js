const express = require ('express')
    const router = express.Router()

    const ProdutoController= require('../controllers/ProdutoController')


    // rotas de Produtos

router.post('/produtos',ProdutoController.create)
router.get('/produtos', ProdutoController.getAll)
router.get('/produtos/:id', ProdutoController.getById)
router.put('/produtos/:id', ProdutoController.update)
router.delete('/produtos/:id', ProdutoController.remove)




    module.exports = router