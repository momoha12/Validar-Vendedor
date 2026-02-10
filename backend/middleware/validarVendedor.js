//middleware para validar datos de entrada
const validarVendedor = (req, res, next) => {
    const datosVendedor = req.body;
    let ret; // variable que ser rescriu i retorna el error 

    if (!datosVendedor || typeof datosVendedor !== 'object') {
       ret = res.status(400).json({ //respuesta de error
            ok: false, //indica que ha ocurrido un error
            error: 'Datos de vendedor inválidos' //mensaje de error
        });
    }
    //validar campos de entrada
    else if (
        datosVendedor.telefono !== undefined &&
        typeof datosVendedor.telefono !== 'boolean'
    ) {
        ret = res.status(400).json({ //respuesta de error
            ok: false, //indica que ha ocurrido un error
            error: 'El campo "telefono" es booleano' //mensaje de error
        });
    }
    else if (
        datosVendedor.web !== undefined &&
        typeof datosVendedor.web !== 'boolean'
    ) {
        ret = res.status(400).json({ //respuesta de error
            ok: false, //indica que ha ocurrido un error
            error: 'El campo "web" es booleano' //mensaje de error
        });
    }
    else if (
        datosVendedor.precioMuyBajo !== undefined &&
        typeof datosVendedor.precioMuyBajo == 'boolean'
    ) {
        ret = res.status(400).json({ //respuesta de error
            ok: false, //indica que ha ocurrido un error
            error: 'El campo "precioMuyBajo" es booleano' //mensaje de error
        });
    }
    else if (
        datosVendedor.reportes !== undefined &&
        (typeof datosVendedor.reportes !== 'number' || datosVendedor.reportes < 0)
    ) {
        ret = res.status(400).json({ //respuesta de error
            ok: false, //indica que ha ocurrido un error
            error: 'El campo "reportes" debe ser un número mayor o igual a 0' //mensaje de error
        });
    }
    if (ret) { // si ret es true, hi ha hagut un error
        return ret; // retornem l'error
        console.log(ret);
    }
    else next(); // si no hi ha hagut cap error, passem al següent middleware
};
module.exports = validarVendedor;
