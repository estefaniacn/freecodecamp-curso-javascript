/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Funciones flecha con parámetros.
*/

const sumarTres = function(x) {
  return x + 3;
};
console.log(sumarTres(4));

// Función Flecha
const sumarTres = (x) => x + 3;
console.log(sumarTres(4));

// Ejemplo

// Función Tradicional
const concatenar = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatenar([1, 2], [3, 4, 5]));

// Función Flecha
const concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar([1, 2], [3, 4, 5]));

// Ejemplo 3: Varias líneas. Debes incluir llaves y return.

const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};

console.log(sumar(1, 1));