const express = require('express');
const router = express.Router();

const CargoController = require('../controllers/CargoController');
const FuncionarioController = require('../controllers/FuncionarioController');
const DepartamentoController = require('../controllers/DepartamentoController')
const TarefaController = require('../controllers/TarefaController')
const ProjetoController = require('../controllers/ProjetoController')
// Validadores
const { validarId } = require('../validators/idValideitor');
const { cargoValidador } = require('../validators/CargoValidators');
const {departamentoValidador}= require('../validators/DepartamentoValidadors')
const{tarefaValidador } = require('../validators/TarefaValidadors')
const{projetoValidador} = require('../validators/ProjetoValidadors')

// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)

// Cargos
router.post('/cargos', cargoValidador, CargoController.create);
router.get('/cargos', CargoController.getAll);
router.get('/cargos/:id', validarId, CargoController.getById);
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update);
router.delete('/cargos/:id', validarId, CargoController.remove);

// Funcionarios
router.post('/funcionarios', FuncionarioController.create);
router.get('/funcionarios', FuncionarioController.getAll);
router.get('/funcionarios/:id', validarId, FuncionarioController.getById);
router.put('/funcionarios/:id', validarId, FuncionarioController.update);
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove);

//Tarefa
router.post('/tarefas', tarefaValidador,TarefaController.create);
router.get('/tarefas', TarefaController.getAll);
router.get('/tarefas/:id', validarId, TarefaController.getById);
router.put('/tarefas/:id', validarId, TarefaController.update);
router.delete('/tarefas/:id', validarId, TarefaController.remove);

//projetos
router.post('/projetos', tarefaValidador,ProjetoController.create);
router.get('/projetos', ProjetoController.getAll);
router.get('/projetos/:id', validarId, ProjetoController.getById);
router.put('/projetos/:id', validarId, ProjetoController.update);
router.delete('/projetos/:id', validarId, ProjetoController.remove);


module.exports = router;

