const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/cadastrar', usuariosController.cadastrarUsuario);

module.exports = router;