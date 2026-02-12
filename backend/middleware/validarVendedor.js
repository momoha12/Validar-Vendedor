// middleware para validar datos de entrada

const validarVendedor = (req, res, next) => {

    const datos = req.body;
    let ret;

    // Validación general del objeto
    if (!datos || typeof datos !== 'object') {
        ret= res.status(400).json({
            ok: false,
            error: 'Datos de vendedor inválidos'
        });
    }

    // Validación de teléfono
    else if (datos.telefono !== undefined && typeof datos.telefono !== 'number') {
        ret= res.status(400).json({
            ok: false,
            error: 'El teléfono debe ser un número'
        });
    }

    // Validación de web
    else if (datos.web !== undefined && typeof datos.web !== 'string') {
        ret= res.status(400).json({
            ok: false,
            error: 'La web debe ser un texto'
        });
    }

    // Validación de verificacion
    else if (datos.verificacion !== undefined && typeof datos.verificacion !== 'boolean') {
        ret= res.status(400).json({
            ok: false,
            error: 'verificacion debe ser booleano'
        });
    }

    // Validación de precioMuyBajo
    else if (datos.precioMuyBajo !== undefined && typeof datos.precioMuyBajo !== 'boolean') {
        ret= res.status(400).json({
            ok: false,
            error: 'precioMuyBajo debe ser booleano'
        });
    }

    // Validación de reportes
    else if (datos.reportes !== undefined && (typeof datos.reportes !== 'number' || datos.reportes < 0)) {
        ret= res.status(400).json({
            ok: false,
            error: 'reportes debe ser un número mayor o igual a 0'
        });
    }
    
    
    if(ret) return ret; // Si hay un error, devolverlo
    else next(); // Si todo está bien, continuar
};

module.exports = validarVendedor;
