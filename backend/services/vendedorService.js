const PESOS = require('../config/pesosVendedor.js');

// 🔹 validar teléfono
const validarTelefono = (telefono) => {
    if (!telefono) return false;
    const limpio = telefono.toString().replace(/\s/g, '');
    return /^\d{9}$/.test(limpio);
};

// 🔹 validar web
const validarWeb = (web) => {
    if (!web) return false;
    return web.startsWith('http://') || web.startsWith('https://');
};

// 🔹 detectar precio sospechoso
const detectarPrecioBajo = (precio) => {
    const PRECIO_MINIMO = 20;
    return precio < PRECIO_MINIMO;
};

// 🔹 simular reportes
const generarReportes = () => {
    return Math.floor(Math.random() * 3); // 0 a 2 reportes
};

// 🔹 calcular puntos
const calcularPuntos = (analisis) => {
    let puntos = 0;

    if (analisis.telefonoValido) puntos += PESOS.positivo.telefono;
    if (analisis.webValida) puntos += PESOS.positivo.web;

    if (analisis.precioSospechoso) puntos += PESOS.negativo.precioMuyBajo;

    if (analisis.reportes > 0) {
        puntos += PESOS.negativo.reportes * analisis.reportes;
    }

    if (!analisis.telefonoValido && !analisis.webValida) {
        puntos -= 30;
    }

    if (puntos > 100) puntos = 100;
    if (puntos < 0) puntos = 0;

    return puntos;
};

// 🔹 razones
const obtenerRazones = (analisis) => {
    const razones = [];

    if (analisis.telefonoValido) razones.push('Teléfono válido');
    else razones.push('Teléfono inválido');

    if (analisis.webValida) razones.push('Web válida');
    else razones.push('Web no válida');

    if (analisis.precioSospechoso) razones.push('Precio sospechosamente bajo');

    if (analisis.reportes > 0) {
        razones.push(`Tiene ${analisis.reportes} reportes`);
    }

    return razones;
};

// 🔹 interpretar puntos
const interpretarPuntos = (puntos) => {
    if (puntos >= 70) {
        return { mensaje: 'Vendedor bastante fiable', color: 'verde' };
    } else if (puntos >= 40) {
        return { mensaje: 'Fiabilidad media, revisa con cuidado', color: 'amarillo' };
    } else {
        return { mensaje: 'Vendedor poco fiable, no recomendado', color: 'rojo' };
    }
};

// 🔹 función principal
const analizarVendedorService = (datos) => {

    if (!datos) throw new Error('Datos no proporcionados');

    const analisis = {
        telefonoValido: validarTelefono(datos.telefono),
        webValida: validarWeb(datos.web),
        precioSospechoso: detectarPrecioBajo(datos.precio),
        reportes: generarReportes()
    };

    const puntos = calcularPuntos(analisis);
    const resultado = interpretarPuntos(puntos);
    const razones = obtenerRazones(analisis);

    return {
        puntos,
        resultado,
        razones
    };
};

module.exports = {
    analizarVendedorService
};
