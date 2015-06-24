/*
Modulo 3. Modulos node.js; Expresiones Regulares; Eventos, Entorno de Ejecución y Concurrencia en node.js; Ficheros y Flujos
Ejercicio P2P opcional

Explicación de la tarea

Realizar en JavaScript un programa, de nombre “merge”, que integre n ficheros en uno solo.

El programa se debe invocar de la siguiente forma

node merge.js <dest> <f1> <f2> .. <fn>

El programa debe crear un fichero <dest> concatenando los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.
*/

var fs = require('fs'); // Importar el modulo File System

//Comprobación de número de parámetros es correcto
// El número de parametros debe ser mayor o igual a cuatro
if(process.argv.length < 4){
	console.log('Sintaxis incorrecta, se requiere: node merge <destino> <origen1> <origen2> .. <origenN>'); 
	process.exit(); // Termina el proceso
}

for(var i=3 ; i<process.argv.length ; i++){ 
// Iteramos según el número de archivos origen
fs.readFile(// los ficheros origen se abre en modo lectura
	process.argv[i], 
	function(err,data){
		fs.appendFile( // el fichero destino se abre en modo copia
			process.argv[2], data,
			function (err) {
				if(err) throw err;
				// Si no se produce error, se fusiona los ficheros
				// y seguimos con el siguiente fichero de origen
			}
		);
	});
	console.log(i-2 + " fichero copiado");
}

console.log("Éxito: Fusión completeda");