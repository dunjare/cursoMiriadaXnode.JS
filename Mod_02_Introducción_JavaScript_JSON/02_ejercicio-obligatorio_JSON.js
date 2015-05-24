

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
                titulo: function () { // Asignar nombre a la Agenda
                    return _titulo;
                },
                meter: function (nombre, tf) {  // Agrega un nuevo contacto a la agenda
                    console.log("2.- Agregando a " + nombre);
                    _contenido[nombre] = tf;   
                },
                tf: function (nombre) {
                    return _contenido[nombre];
                },
                borrar: function (nombre) {  // Elimina un contacto de la agenda
                    console.log("3.- Borrando a " + nombre);
                    delete _contenido[nombre];
                },
                toJSON: function () { 
                    return JSON.stringify(_contenido);
                },

                listar: function () { // Crea una cadena para mostar los contactos de la agenda
                    var listado = "";
                    for (var item in _contenido) {
                        listado = listado + item + ", " + _contenido[item] + "\n";                        
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
        console.log("1.- Mostrar agenda: " + amigos.titulo()); // Mostar Título de la agenda
        amigos.listar();

        amigos.meter("Claudia",696969696); // Agrega un nuevo contacto a la agenda
        amigos.listar();

        amigos.borrar("Claudia");  // Elimina un contacto de la agenda
        amigos.listar();
})();

