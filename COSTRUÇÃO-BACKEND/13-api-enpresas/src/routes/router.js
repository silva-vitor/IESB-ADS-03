const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')
const FuncionarioController = require('../controllers/FuncionarioController')

// Cargos
router.post('/produtos', CargoController.create)
router.get('/produtos', CargoController.getAll)
router.get('/produtos/:id', CargoController.getById)
router.put('/produtos/:id', CargoController.update)
router.delete('/produtos/:id', CargoController.remove)

//funcionarios
router.post('/funcionarios',FuncionarioController.create)
router.get('/funcionarios',FuncionarioController.getAll)
router.get('/funcionarios/:id',FuncionarioController.getById)
router.put('/funcionarios/:id',FuncionarioController.update)
router.delete('/funcionarios/:id',FuncionarioController.remove)




module.exports = router
