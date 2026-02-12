const vendedorService = require('../services/vendedorService.js'); // importar servicio de vendedor

//función para analizar vendedor i guardar valor en una funcion
const analizarVendedor = (req, res) => {
    try {
        const datosVendedor = req.body; //obtener datos del vendedor de la solicitud

        // Llamar al service para analizar el vendedor
        const resultado = vendedorService.analizarVendedorService(datosVendedor); 

        return res.status(200).json({ 
            ok: true, //indica que la operación se ha realizado con éxito
            data: resultado //datos del vendedor analizado
        });

    } catch (error) { //capturar errores
        return res.status(500).json({ 
            ok: false, //indica que ha ocurrido un error
            error: error.message //mensaje de error
        });
    }
};

module.exports = {
    analizarVendedor
};
