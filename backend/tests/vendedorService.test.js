const vendedorService = require('../services/vendedorService');

describe('analizarVendedorService', () => {
    test('vendedor fiable', () => {
        const datosVendedor = {
            telefono: true,
            web: true,
            precioMuyBajo: false,
            reportes: 0
        };

        const resultado = vendedorService.analizarVendedorService(datosVendedor);

        expect(resultado.resultado.color).toBe('amarillo');
    });
});
