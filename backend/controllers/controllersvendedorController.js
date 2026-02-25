    const analizarVendedor = (req, res) => { //función para analizar vendedor i guardar valor en una funcion
    console.log(req.body);
    // Lógica para analizar el vendedor
    res.send('dades rebudes correctament');
}

module.exports = { //exportar controlador
    analizarVendedor //exportar función
}