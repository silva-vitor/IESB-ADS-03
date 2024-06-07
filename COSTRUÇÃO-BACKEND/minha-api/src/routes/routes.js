const express = require('express')
const router = express.Router()

const FuncionarioController = require('../controllers/FuncionarioController');
const CargoController = require('../controllers/CargoController')
const ClienteControlle = require('../controllers/ClienteController')
const ProdutoController = require('../controllers/ProdutoController')
const FornecedorController = require('../controllers/FornecedorController')
const PedidoController = require('../controllers/PedidoController')

//validador
const {validarId} = require('../validators/idValidador')
const {funcionarioValidador} = require('../validators/funcionarioValidador')


//funcionario
router.post('/funcionario',funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionario/:id', FuncionarioController.getById)
router.put('/funcionario/:id', FuncionarioController.update)
router.delete('/funcionario/:id', FornecedorController.remove)

//cargo
router.post('/cargo', CargoController.create)
router.get('/cargo',CargoController.getAll)
router.get('/cargo/:id',CargoController.getById)
router.put('/cargo/:id',CargoController.update)
router.delete('/cargo/:id',CargoController.remove)  

//Cliente
router.post('/cliente', ClienteControlle.create)
router.get( '/cliente', ClienteControlle.getAll)
router.get('/cliente/:id', ClienteControlle.getById)
router.put('/cliente/:id', ClienteControlle.update)
router.delete('/cliente/id',ClienteControlle.remove)

//Produtos
router.post('/produto', ProdutoController.create)
router.get('/produto', ProdutoController.getAll)
router.get('/produto/:id', ProdutoController.getById)
router.put('/produto/:id', ProdutoController.update)
router.delete('/produto/:id', ProdutoController.remove)

//fornecedor
router.post('/fornecedor',FornecedorController.create)
router.get('/fornecedor', FornecedorController.getAll)
router.get('/fornecedor/:id',FornecedorController.getById)
router.put('/fornecedor/:id',FornecedorController.update)
router.delete('/fornecedor/:id', FornecedorController.remove)


//pedido

router.post('/pedido', PedidoController.create)
router.get('/pedido', PedidoController.getAll)
router.get('/pedido',PedidoController.getById)
router.put('/pedido',PedidoController.update)
router.delete('/pedido',PedidoController.remove)



module.exports = router
