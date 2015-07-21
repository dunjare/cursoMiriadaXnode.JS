# Modulo 2. Introducción a JavaScript de servidor y a node.js. Bucles, Clases predefinidas, Objetos, Propiedades y Métodos; Prototipos y Clases; Arrays; JSON; Funciones como Objetos y Cierres (Closures)
Ejercicio P2P obligatorio

Explicación de la tarea

Dado el siguiente programa JavaScript que implementa la agenda de telefonos:

function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function()                    { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)         { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()              { return JSON.stringify(_contenido);}
  }
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });
 
Añadir un método listar() al cierre agenda(..) {...} que liste por consola cada par "nombre, tf" en una línea, de forma que al listar la agenda amigos generase:
 
"Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n"
 
incluir ademas una última instrucción en el programa que liste la agenda amigos por consola utilizando el nuevo método listar.
 
Entregar en un fichero adjunto en la entrega el programa con el código del programa solicitado.

El evaluador debe descargar dicho fichero y ejecutarlo para comprobar que funciona correctamente.
 