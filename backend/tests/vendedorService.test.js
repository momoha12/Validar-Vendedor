const vendedorService = require('../services/vendedorService');


describe('analizarVendedorService', () => {

    // PRUEBA 1: Vendedor fiable "verde"
    test('vendedor fiable (verde)', () => {
        const datosVendedor = {
            telefono: true,
            web: true,
            precioMuyBajo: false,
            verificado: true,
            reportes: 0,
        };

        const resultado = vendedorService.analizarVendedorService(datosVendedor);

        expect(resultado.resultado.color).toBe('verde');
        expect(resultado.puntos).toBeGreaterThanOrEqual(70);
    })

    // PRUEBA 2: Vendedor no fiable "amarillo"
    test('vendedor no fiable (amarillo)', () => {
        const datosVendedor = {
            telefono: true,
            web: true,
            precioMuyBajo: false,
            verificado: true,
            reportes: 2,
        };

        const resultado = vendedorService.analizarVendedorService(datosVendedor);

        expect(resultado.resultado.color).toBe('amarillo');
        expect(resultado.puntos).toBeGreaterThanOrEqual(40);
    })
    // PRUEBA 3: Vendedor no fiable "rojo"
    test('vendedor no fiable (rojo)', () => {
        const datosVendedor = {
            telefono: true,
            web: false,
            verificado: false,
            reportes: 1,
        };

        const resultado = vendedorService.analizarVendedorService(datosVendedor);

        expect(resultado.resultado.color).toBe('rojo');
        expect(resultado.puntos).toBeLessThanOrEqual(30);
    })
});