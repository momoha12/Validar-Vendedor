const vendedorService = require('../services/vendedorService.js'); //importar servicio
const validarVendedor = require('../middleware/validarVendedor.js');

//función para analizar vendedor i guardar valor en una funcion
const analizarVendedor = (req, res) => {
    try {
        const datosVendedor = req.body; //obtener datos del vendedor de la solicitud
        const resultado = validarVendedor(datosVendedor); //validar vendedor
        return res.status(200).json({
            ok: true, //indica que la operación se ha realizado con éxito
            data:resultado //datos del vendedor validado
        });
    } catch (error) {
        res.status(400).json({ //respuesta de error
            ok: false, //indica que ha ocurrido un error
            error: error.message //mensaje de error
        });
    }
};

module.exports = { //exportar controlador
    analizarVendedor //exportar función
};