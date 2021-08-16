/*
Curso de freeCodeCamp: Aprende JavaScript desde Cero - Curso Completo
Creado por: Estefania Cassingena Navone (@EstefaniaCassN)
Tema: Inmutabilidad de las cadenas de caracteres.
*/

var miCadena = "Jola, Mundo";
console.log(miCadena);

miCadena[0] = "H"; // Error porque las cadenas son inmutables.

miCadena = "Hola, Mundo"; // Se debe asignar una cadena nueva.
console.log(miCadena);
