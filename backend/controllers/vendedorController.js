
const vendedorService = require('../services/vendedorService'); //importar servicio

const analizarVendedor = (req, res) => { //función para analizar vendedor i guardar valor en una funcion
    const resultado = vendedorService.analizarVendedorService(req.body); //llamar a función de servicio
    res.json(resultado); //Enviar resultat al usuari en format JSON
}

module.exports = { //exportar controlador
    analizarVendedor //exportar función
}
