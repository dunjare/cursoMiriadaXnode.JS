/*
Modulo 4. Introducción a HTTP y a los Servidores Web; Introducción a express y al Middleware Static; 
Introducción a REST; Aplicaciones express.js y Composición de Middlewares; Formularios GET y POST; Parámetros Ocultos

Ejercicio P2P Obligatorio

Explicación de la tarea

Construir una aplicaciónn de servidor con express que tenga 2 páginas diferentes, enlazadas entre sí con el siguiente comportamiento:
 
Página 1: Será la página de entrada de la aplicación y tendrá un título y 2 preguntas:
¿Quién descubrió América? y ¿Capital de Portugal?. Cada pregunta tendrá un formulario asociado, con un cajetín de entrada y un botón de envío, que permitirá enviar la respuesta a esa pregunta en particular (es decir habrá 2 formularios en la página). Cada formulario tendrá además un parámetro oculto que envíe un valor diferente que indique al servidor a que pregunta está contestando el cliente;
 
La página 1 estará asociada a la transacción HTTP: GET /preguntas
 
Página 2: Será la página que muestre la respuesta a la que está contestando el cliente , e indicará si ha contestado correctamente o no con una frase correctamente construida. En caso de contestar incorrectamente, le indicará además cual es la respuesta correcta. La página incluirá además un enlace asociado al texto Volver a la página inicial
 
La página 2 estará asociada a la transacción HTTP: GET /respuesta
 
La aplicación debe utilizar solo el paquete express (no utilizar express-generator).
*/

// TODO: comentar

/* 
Nota:  Es necesario instalar el modulo replacestream
        npm install replacestream
*/
var express = require('express');
var path = require('path');
var app = express();
var fs = require("fs");
var replaceStream = require('replacestream');
var bodyParser = require('body-parser');
var QS = require('querystring'),
    e, d;

app.use(bodyParser.urlencoded({
    extend: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/respuesta', function (req, res) {
    var respuesta = "";
    var acierto= false;
    var salida = "";
    if (req.body.pregunta == 1) { 
        respuesta = req.body.question1;
        respuesta = respuesta.toLowerCase();
        if (respuesta == "cristobal colon" || respuesta == "cristobal colón") {
            salida = "Respuesta Correcta!!";
              acierto = true;
        }
        else {
            salida = "Respuesta Incorrecta. <br/> <br/>Solución: Critobal Colón";
        }
     }
    else if (req.body.pregunta == 2)  {   
        respuesta = req.body.question2;
        respuesta = respuesta.toLowerCase();
        if (respuesta == "lisboa") {
            salida = "Respuesta Correcta!!";
            acierto = true;
        } 
        else {
            salida = "Respuesta Incorrecta. <br/> <br/>Solución: Lisboa";
        }
    }
    
    if (salida == true){
        salida = "<img src=" + "./css/icon_true.png" + "><br/> " + salida;
    } 
    else  {
        salida = "<img src=" + "./css/icon_false.png" + "><br/> " + salida;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.createReadStream('public/respuesta.html')
        .pipe(replaceStream('{{valor}}', salida))
        .pipe(res);
});
// para este ejercicio redirigiremos al usuario a la pagina inicial
app.get('*', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.createReadStream('public/index.html').pipe(res);
});

app.listen(8000);
console.log ('Listening on port 8000');


        
