

/*
Modulo 1. Introducción a JavaScript de servidor y a node.js. 
Sentencias, Variables, Booleanos, Números, Strings y Funciones

Ejercicio P2P (opcional)

Explicación de la tarea

Realizar en JavaScript para node.js un programa que saque por consola

- El número PI con ocho decimales
- Dos línea en blanco
- La ristra de caracteres UNICODE \u55e8\uff0c\u4f60\u597d\u5417 // En chino: 嗨，你好吗 (Hola, como estas)
  Example: http://stackoverflow.com/questions/7885096/how-do-i-decode-a-string-with-escaped-unicode
*/

function printNumberPi(numberOfDecimals){
	var d = numberOfDecimals +1;
  	console.log(Math.PI.toPrecision(d));
}

function printWhiteLines(numberOfLines){
	
  for (var i = 0; i < numberOfLines; i++)  {
    console.log('');
  }
}

function printCharactersUnicode(unescapeCharacters){
  	
  var u = ''; // Concatena la ristra UNICODE en un String \u55e8\uff0c\u4f60\u597d\u5417
  for (var i = 0; unescapeCharacters.charCodeAt(i).toString(16) !== "NaN"; i++)  {
    u = u + '\\u' + unescapeCharacters.charCodeAt(i).toString(16);
  }

  var x = unescapeCharacters; // Convierte la ristra UNICODE a los caracteres 嗨，你好吗
  var r = /\\u([\d\w]{4})/gi; // Regular Expresion
  x = x.replace(r, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)); } );
  x = unescape(x);
  console.log('Los caracteres escapados ' + u + ' representan: ' + x);

}

(function(){
  	printNumberPi(8);
  	printWhiteLines(2);
  	printCharactersUnicode('\u55e8\uff0c\u4f60\u597d\u5417');
})();