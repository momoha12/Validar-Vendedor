

const analizarVendedorService = (datosVendedor) => { //funcion de caluclo de puntos del vendedor
    let puntos = 0; //variable para guardar puntos del vendedor que se mostraran al usuario
    let mensaje = ''; //variable para guardar mensaje de fiabilidad del vendedor
    let color = ''; //variable para guardar color de fiabilidad del vendedor
    // Lógica para calcular los puntos del vendedor
    if (datosVendedor.telefono) {
        puntos += 30;
    }
    if (datosVendedor.web) {
        puntos += 30;
    }
    if (puntos > 100) {
        puntos = 100;
    }
    // missatge i color depenent de la puntuació
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
    return {puntos, mensaje, color}; //retornar puntos, mensaje y color
}

const exportar = module.exports = {
    analizarVendedorService
};
