const express = require('express'); //require = funcion importar librerias
const routes = express.Router(); //routes = objeto para crear rutas
const vendedorController = require('../controllers/vendedorController'); //importar controlador

routes.post('/analizar-vendedor', vendedorController.analizarVendedor);

module.exports = routes; //exportar rutas