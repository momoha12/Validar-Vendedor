//importar pesos de vendedor
const PESOS = require('../config/pesosVendedor'); 

// validación de datos de entrada
const validarDatosVendedor = (datosVendedor) => {
    if (!datosVendedor || typeof datosVendedor !== 'object') {
        throw new Error('Datos de vendedor inválidos');
    }

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
//funcion de caluclo de puntos del vendedor
const calcularPuntos = (datosVendedor) => {
    let puntos = 0; //variable para guardar puntos del vendedor que se mostraran al usuario
    const {
        telefono = false,
            web = false,
            precioMuyBajo = false,
            reportes = 0,
            verificacion = false,
    } = datosVendedor;
    // Lógica para calcular los puntos del vendedor
    if (telefono) { //si tiene telefono sumar 30 puntos
        puntos += PESOS.positivo.telefono;
    }
    if (web) { //si tiene web sumar 30 puntos
        puntos += PESOS.positivo.web;
    }
    if (verificacion) { //si tiene verificacion sumar 20 puntos
        puntos += PESOS.positivo.verificacion;
    }
    if (precioMuyBajo === true) { //si tiene precio muy bajo restar 25 puntos
        puntos += PESOS.negativo.precioMuyBajo;
    }
    if (reportes > 0) { //si tiene reportes restar 20 puntos por cada reporte
        puntos += PESOS.negativo.reportes * reportes;
    }
    if (!telefono && !web) { //si no tiene telefono ni web restar 30 puntos
        puntos += PESOS.negativo.telefono + PESOS.negativo.web;
    }

    if (puntos > 100) { //si puntos superan 100 puntos, puntos = 100
        puntos = 100;
    }
    if (puntos < 0) { //si puntos son negativos, puntos = 0
        puntos = 0;
    }
    return puntos; //retornar puntos
};

//funcion de obtencion de razones de puntos del vendedor
const obtenerRazones = (datosVendedor) => {
    const razones = []; //array para guardar razones de puntos del vendedor
    if (datosVendedor.telefono) { //si tiene telefono sumar 30 puntos
        razones.push('Tiene telefono');
    }
    if (datosVendedor.web) { //si tiene web sumar 30 puntos
        razones.push('Tiene web');
    }
    if (datosVendedor.precioMuyBajo === true) { //si tiene precio muy bajo restar 25 puntos
        razones.push('Precio muy bajo');
    }
    if (datosVendedor.reportes && datosVendedor.reportes > 0) { //si tiene reportes restar 20 puntos por cada reporte
        razones.push(`Tiene reportes de otros usuarios`);
    }
    if (!datosVendedor.telefono && !datosVendedor.web) { //si no tiene telefono ni web restar 30 puntos
        razones.push('No tiene telefono ni web');
    }
    return razones; //retornar razones
};

//funcion de interpretacion de puntos del vendedor
const interpretarPuntos = (puntos) => {
    let mensaje = ''; //variable para guardar mensaje de fiabilidad del vendedor
    let color = ''; //variable para guardar color de fiabilidad del vendedor
    // Lógica para interpretar los puntos del vendedor
    if (puntos >= 70) {
        mensaje = 'Vendedor bastante fiable';
        color = 'verde';
    } else if (puntos >= 40) {
        mensaje = 'Fiabilidad media, revisa con cuidado';
        color = 'amarillo';
    } else {
        mensaje = 'Vendedor poco fiable, no recomendado';
        color = 'rojo';
    }
    return {
        mensaje,
        color
    }; //retornar mensaje y color
};

//funcion de analisis de vendedor
const analizarVendedorService = (datosVendedor) => {
    const puntos = calcularPuntos(datosVendedor); //llamar a función de calcular puntos
    console.log('PUNTOS CALCULADOS:', puntos);
    const resultado = interpretarPuntos(puntos); //llamar a función de interpretar puntos
    const razones = obtenerRazones(datosVendedor); //llamar a función de obtener razones

    return {
        puntos,
        resultado,
        razones
    }; //retornar puntos y mensaje y color
};


//exportar funciones de analisis de vendedor
const exportar = module.exports = {
    analizarVendedorService
};