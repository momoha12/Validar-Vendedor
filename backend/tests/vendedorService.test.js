const vendedorService = require('../services/vendedorService');
const validarVendedor = require('../middleware/validarVendedor');

    // Validar tipos de vendedores
describe('analizarVendedorService', () => {
    // PRUEBA 4: Lanza error si los datos del vendedor son inválidos
    test('Error si los datos del vendedor son inválidos', () => {
        expect(() => {
            vendedorService.analizarVendedorService(null);
        }).toThrow();
    });
    
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
    });

    // PRUEBA 2: Vendedor no fiable "amarillo"
    test('vendedor poco fiable (amarillo)', () => {
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




    // Validar el middleware
    describe('validarVendedor', () =>{
        // Si els valors del vendedor son valids
        test('Si els valors del vendedor son valids', () =>{
            const validarVendedor ={
                telefono: 642775871,
                web: 'www.empresa.com',
                precioMuyBajo: false,
            };
            expect(validarVendedor.telefono).toBe(642775871);
            expect(validarVendedor.web).toBe('www.empresa.com');
            expect(validarVendedor.precioMuyBajo).toBe(false);
        })
        // si el vendedor te com a numero de telefon invalid
        test('Si el vendedor te com a numero de telefon invalid', () =>{
            const validarVendedor ={
                telefono: true,
                web: 'www.empresa.com',
                precioMuyBajo: false,
            };
            expect(validarVendedor.telefono).toBe(true);
            expect(validarVendedor.web).toBe('www.empresa.com');
            expect(validarVendedor.precioMuyBajo).toBe(false);
        })
        // si el vendedor te com a web invalid
        test('Si el vendedor te com a web invalid', () =>{
            const validarVendedor ={
                telefono: 642775871,
                web: true,
                precioMuyBajo: false,
            };
            expect(validarVendedor.telefono).toBe(642775871);
            expect(validarVendedor.web).toBe(true);
            expect(validarVendedor.precioMuyBajo).toBe(false);
        })
        // si el numero de telefono es negativo
        test('Si el numero de telefono es negativo', () =>{
            const validarVendedor ={
                telefono: -642775871,
                web: 'www.empresa.com',
                precioMuyBajo: false,
            };
            expect(validarVendedor.telefono).toBe(-642775871);
            expect(validarVendedor.web).toBe('www.empresa.com');
            expect(validarVendedor.precioMuyBajo).toBe(false);
        })
        //si falat informacion como el numero i la web
        test('Si falat informacion como el numero i la web', () =>{
            const validarVendedor ={
                telefono: null,
                web: 'www.empresa.com',
                precioMuyBajo: false,
            };
            expect(validarVendedor.telefono).toBe(null);
            expect(validarVendedor.web).toBe('www.empresa.com');
            expect(validarVendedor.precioMuyBajo).toBe(false);
        })
    });

