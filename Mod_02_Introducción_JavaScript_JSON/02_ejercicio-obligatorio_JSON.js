

/*
Modulo 2. Introducción a JavaScript de servidor y a node.js. 
Bucles, Clases predefinidas, Objetos, Propiedades y Métodos; 
Prototipos y Clases; Arrays; JSON; 
Funciones como Objetos y Cierres (Closures)

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
*/

// TODO: COMETAR

        function agenda(titulo, inic) {
            var _titulo = titulo;
            var _contenido = inic;

            return {
                titulo: function () {
                    return _titulo;
                },
                meter: function (nombre, tf) {
                    console.log("2.- Agregando a " + nombre);
                    _contenido[nombre] = tf;
                    amigos.listar();
                },
                tf: function (nombre) {
                    return _contenido[nombre];
                },
                borrar: function (nombre) {
                    console.log("3.- Borrando a " + nombre);
                    delete _contenido[nombre];
                    amigos.listar();
                },
                toJSON: function () {
                    return JSON.stringify(_contenido);
                },

                listar: function () {
                    var listado = "";
                    for (var item in _contenido) {
                        listado = listado + item+ ", " + this.tf(item) + "\n";                        
                    }  
                    console.log(listado); 
                    }    
            }
        }
        var amigos = agenda("Amigos", {
            Pepe: 113278561,
            José: 157845123,
            Jesús: 178512355
        });
        
            
    (function(){
        console.log("1.- Mostrar agenda: " + amigos.titulo());
        amigos.listar();

        amigos.meter("Claudia",696969696);

        amigos.borrar("Claudia");  
})();

