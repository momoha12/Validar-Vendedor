const vendedorService = require('../services/vendedorService'); //importar servicio

//función para analizar vendedor i guardar valor en una funcion
const analizarVendedor = (req, res) => {
    try {
        const resultado = vendedorService.analizarVendedorService(req.body); //llamar a función de servicio
        res.status(200).json(resultado); //Enviar resultat al usuari en format JSON
    } catch (error) {
        res.status(400).json({
            error: error.message
        }); //Enviar error al usuari en format JSON
    }
};

module.exports = { //exportar controlador
    analizarVendedor //exportar función
};