const express = require('express');
const router = express.Router();
const usuarioControllers = require('../controllers/usuario-controllers');

router.post('/cadastro',usuarioControllers.cadastrarUsuario );
router.post('/login', usuarioControllers.loginUsuario);


module.exports = router;