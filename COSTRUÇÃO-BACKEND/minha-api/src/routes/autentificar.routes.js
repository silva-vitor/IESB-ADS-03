const express = require('express');
const router = express.Router();
const AutenticacaoController = require('../controllers/AutenticaoController');
const { usuarioValidador, loginValidador } = require('../models/Usuario');

router.post('/auth/registro', usuarioValidador, AutenticacaoController.registrar);
router.put('/auth/login', loginValidador, AutenticacaoController.login);

module.exports = router;
