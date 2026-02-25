const vendedorService = require('../services/vendedorService.js'); // importar servicio de vendedor
const analizarVendedor = (req, res, next) => { //función para analizar vendedor i guardar valor en una función
    const datosVendedor = req.body; //obtener datos del vendedor de la solicitud
    const resultado = vendedorService.analizarVendedorService(datosVendedor);//llamar al service para analizar el vendedor
    return res.status(200).json({ //respuesta exitosa con el resultado del análisis
        ok: true,
        data: resultado
    });
};

module.exports = {
    analizarVendedor
};

