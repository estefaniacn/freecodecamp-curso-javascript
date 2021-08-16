/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Operador condicional (ternario).
*/

// Con un condicional.

function retornarMinimo(x, y) {
  if (x < y) {
  	return x;
  } else {
  	return y;
  }
}

// Con el operador ternario.

function retornarMinimo(x, y) {
  return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(5, 5));

// Ejemplo 2

var a = 15;
var b = 9;

console.log(a > b ? a + 2 : b * 3);
