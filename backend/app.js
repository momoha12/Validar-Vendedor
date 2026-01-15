const express = require('express'); //require = funcion importar librerias
                                     //express = libreria para crear servidores
const app = express(); //app = objeto para crear servidores

// req = request (lo que entra)
// res = response (lo que sale)
app.get('/', (req, res) => { 
    res.send('Hello World!'); //mensaje de prueba
});

//app.listen = funcion para arrancar el servidor 3000 el puerto del server
app.listen(3000, () => { 
    console.log('Example app listening on port 3000!'); //mensaje de prueba en consola
});