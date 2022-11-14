const express = require('express');
const router = express.Router();
const clienteControllers = require('../controllers/cliente-controllers');
const loginObrigatorio = require('../middleware/index')

router.post('/create', /* loginObrigatorio.obrigatorio */ clienteControllers.postInsereCliente); // cria um cliente
router.patch('/', loginObrigatorio.obrigatorio, clienteControllers.updateCliente); //altera cliente
router.get('/', clienteControllers.getClientes); //lista todos os clientes
router.get('/:id_cliente', clienteControllers.getListaUmCliente); //lista um cliente especifico
router.delete('/:id_cliente', loginObrigatorio.obrigatorio, clienteControllers.deleteDeletaUmCliente); //deleta



module.exports = router;