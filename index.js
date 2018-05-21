/* Archivos donde estan los controladores en el servidor. */

/****************************************************************/
//Configuraciones principales del servidor, con esto escucha las peticiones...
const bodyParser = require('body-parser');
const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port =4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/****************************************************************/
/*headers*/
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


//EndPoints 
app.get('/',function(req,res){
    res.send("Hello world!")
})

//Pone el servidor en escucha de peticiones,lo levanta en el puerto requerido.
server.listen(port, function() {
    console.log('Server listening on port: ' + port);
});