const express = require('express');
const routes = express.Router();

const vendedorController = require('../controllers/vendedorController');
const validarVendedor = require('../middleware/validarVendedor');

// primero validar, luego ejecutar controlador
routes.post('/analizar-vendedor', validarVendedor, vendedorController.analizarVendedor);

module.exports = routes;