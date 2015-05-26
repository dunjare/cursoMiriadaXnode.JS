/*
Modulo 1. Introducción a JavaScript de servidor y a node.js. 
Sentencias, Variables, Booleanos, Números, Strings y Funciones

Ejercicio P2P (opcional)

Explicación de la tarea

Realizar en JavaScript para node.js un programa que saque por consola

- El número PI con ocho decimales
- Dos línea en blanco
- La ristra de caracteres UNICODE \u55e8\uff0c\u4f60\u597d\u5417 // En chino: 嗨，你好吗 (Hola, como estas)
*/

//1) El número PI con ocho decimales
var PI = Math.PI;
console.log('1. El número PI con ocho decimales');
console.log('\t' + PI.toPrecision(9));

//2) Dos línea en blanco
console.log("2.- Dos línea en blanco: \n\n");

//3) La ristra de caracteres UNICODE
//    \u55e8\uff0c\u4f60\u597d\u5417
console.log('3. La ristra de caracteres UNICODE -> \\u55e8\\uff0c\\u4f60\\u597d\\u5417');
console.log('\t' + '\u55e8\uff0c\u4f60\u597d\u5417');
