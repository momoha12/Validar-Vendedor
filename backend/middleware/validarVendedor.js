//middleware para validar datos de entrada
const validarVendedor = (req, res, next) => {
    const datosVendedor = req.body;

    if (!datosVendedor || typeof datosVendedor !== 'object') {
        throw new Error('Datos de vendedor inválidos');
    }
    //validar campos de entrada
    if (
        datosVendedor.telefono !== undefined &&
        typeof datosVendedor.telefono !== 'boolean'
    ) {
        throw new Error('El campo "telefono" no debe ser booleano');
    }
    if (
        datosVendedor.web !== undefined &&
        typeof datosVendedor.web !== 'boolean'
    ) {
        throw new Error('El campo "web" no debe ser booleano');
    }
    if (
        datosVendedor.precioMuyBajo !== undefined &&
        typeof datosVendedor.precioMuyBajo !== 'boolean'
    ) {
        throw new Error('El campo "precioMuyBajo" no debe ser booleano');
    }
    if (
        datosVendedor.reportes !== undefined &&
        (typeof datosVendedor.reportes !== 'number' || datosVendedor.reportes < 0)
    ) {
        throw new Error('El campo "reportes" nodebe ser un número mayor o igual a 0');
    }
};
module.exports = validarVendedor;
