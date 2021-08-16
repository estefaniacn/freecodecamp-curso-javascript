/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclo "while" en JavaScript.
*/

// Ejemplo 1

var i = 0;

while (i <= 3) {
  console.log("Hola, Mundo");
  i++;
}

// Ejemplo 2

var miArreglo = [];
var i;

console.log(miArreglo);

while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo);

// Ejemplo 3

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop(); // Remover el último número.
}

console.log(numeros);
