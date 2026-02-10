const express = require('express'); //require = funcion importar librerias
                                     //express = libreria para crear servidores
const app = express(); //app = objeto para crear servidores

app.use(express.json()); //ayuda que el servidor entienda json

// req = request (lo que entra)
// res = response (lo que sale)
app.get('/', (req, res) => { 
    res.send('Hello World!'); //mensaje de prueba
});

const vendedorRoutes = require('./routes/vendedorRoutes'); //importar rutas de vendedor
app.use('/vendedor', vendedorRoutes); //usar rutas de vendedor

//app.post('/analizar-vendedor', (req, res) => { 
    //console.log(req.body);
    // Lógica para analizar el vendedor
    //res.send('dades rebudes correctament');
//});

//app.listen = funcion para arrancar el servidor 3000 el puerto del server

app.listen(3000, () => { 
    console.log('Exemple app escolta el port 3000!'); //mensaje de prueba en consola
});