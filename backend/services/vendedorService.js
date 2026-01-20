const calcularPuntos = (datosVendedor) => { //funcion de caluclo de puntos del vendedor
    let puntos = 0; //variable para guardar puntos del vendedor que se mostraran al usuario
    // Lógica para calcular los puntos del vendedor
    if (datosVendedor.telefono) { //si tiene telefono sumar 30 puntos
        puntos += 30;
    }
    if (datosVendedor.web) { //si tiene web sumar 30 puntos
        puntos += 30;
    }
    if (datosVendedor.precioMuyBajo === true) { //si tiene precio muy bajo restar 25 puntos
        puntos -= 25;
    }
    if (datosVendedor.reportes && datosVendedor.reportes > 0) { //si tiene reportes restar 20 puntos por cada reporte
        puntos -= datosVendedor.reportes * 20;
    }
    if (!datosVendedor.telefono && !datosVendedor.web) { //si no tiene telefono ni web restar 30 puntos
        puntos -= 30;
    }

    if (puntos > 100) { //si puntos superan 100 puntos, puntos = 100
        puntos = 100;
    }
    if (puntos < 0) { //si puntos son negativos, puntos = 0
        puntos = 0;
    }
    return puntos; //retornar puntos
}

const interpretarPuntos = (puntos) => { //funcion de interpretacion de puntos del vendedor
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

const analizarVendedorService = (datosVendedor) => { //funcion de caluclo de puntos del vendedor
    const puntos = calcularPuntos(datosVendedor); //llamar a función de calcular puntos
    const resultado = interpretarPuntos(puntos); //llamar a función de interpretar puntos
    return {
        puntos,
        resultado
    }; //retornar puntos y mensaje y color
};

const exportar = module.exports = {
    analizarVendedorService
};