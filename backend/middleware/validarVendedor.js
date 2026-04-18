const validarVendedor = (req, res, next) => {

    const datos = req.body;

    if (!datos || typeof datos !== 'object') {
        return res.status(400).json({
            ok: false,
            error: 'Datos inválidos'
        });
    }

    if (!datos.telefono || typeof datos.telefono !== 'string') {
        return res.status(400).json({
            ok: false,
            error: 'El teléfono es obligatorio y debe ser texto'
        });
    }

    if (!datos.web || typeof datos.web !== 'string') {
        return res.status(400).json({
            ok: false,
            error: 'La web es obligatoria y debe ser texto'
        });
    }

    if (datos.precio === undefined || typeof datos.precio !== 'number') {
        return res.status(400).json({
            ok: false,
            error: 'El precio es obligatorio y debe ser número'
        });
    }

    next();
};

module.exports = validarVendedor;
