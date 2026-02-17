//importar pesos de vendedor
const PESOS = require('../config/pesosVendedor.js');
const validarVendedor = require('../middleware/validarVendedor.js');

//funcion de caluclo de puntos del vendedor
const calcularPuntos = (datosVendedor) => {
    let puntos = 0; //variable para guardar puntos del vendedor que se mostraran al usuario

    /* Lógica para calcular los puntos del vendedor */
    //si tiene telefono sumar 30 puntos
    if (datosVendedor.telefono) puntos += PESOS.positivo.telefono;  

    //si tiene web sumar 30 puntos
    if (datosVendedor.web) puntos += PESOS.positivo.web;

    //si tiene verificacion sumar 20 puntos
    if (datosVendedor.verificacion) puntos += PESOS.positivo.verificacion;

    //si tiene precio muy bajo restar 25 puntosu
    if (datosVendedor.precioMuyBajo === true) puntos += PESOS.negativo.precioMuyBajo;

    //si tiene reportes restar 20 puntos por cada reporte
    if (datosVendedor.reportes > 0) puntos += PESOS.negativo.reportes * datosVendedor.reportes;
    
    //si no tiene telefono ni web restar 30 puntos
    if (!datosVendedor.telefono && !datosVendedor.web) puntos += PESOS.negativo.telefono + PESOS.negativo.web;

    //si puntos superan 100 puntos, puntos = 100
    if (puntos > 100) puntos = 100;

    //si puntos son negativos, puntos = 0
    if (puntos < 0) puntos = 0;

    return puntos; //retornar puntos
};

//funcion de obtencion de razones de puntos del vendedor
const obtenerRazones = (datosVendedor) => {
    const razones = []; //array para guardar razones de puntos del vendedor

    if (datosVendedor.telefono) razones.push('Tiene telefono');

    if (datosVendedor.web) razones.push('Tiene web');

    if (datosVendedor.precioMuyBajo === true) razones.push('Precio muy bajo');

    if (datosVendedor.reportes && datosVendedor.reportes > 0) razones.push(`Tiene reportes de otros usuarios`);

    if (!datosVendedor.telefono && !datosVendedor.web) razones.push('No tiene telefono ni web');

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
    console.log('PUNTOS CALCULADOS:', puntos); //mostrar puntos calculados en la consola
    const resultado = interpretarPuntos(puntos); //llamar a función de interpretar puntos
    const razones = obtenerRazones(datosVendedor); //llamar a función de obtener razones

    return {
        puntos,
        resultado,
        razones
    }; //retornar puntos y mensaje y color
};


//exportar funciones de analisis de vendedor
module.exports = {
    analizarVendedorService
};