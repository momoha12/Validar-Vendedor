const vendedorService = require('../services/vendedorService.js');

const analizarVendedor = (req, res) => {
    try {
        const datosVendedor = req.body;

        const resultado = vendedorService.analizarVendedorService(datosVendedor);

        return res.status(200).json({
            ok: true,
            data: resultado
        });

    } catch (error) {
        return res.status(400).json({
            ok: false,
            error: error.message
        });
    }
};

module.exports = {
    analizarVendedor
};
