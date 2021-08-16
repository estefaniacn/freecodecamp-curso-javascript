/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Sintaxis de desestructuración con el operador rest para reasignar un arreglo.
*/

var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6];

console.log(a);   // 1
console.log(b);   // 2
console.log(arr); // [3, 4, 5, 6]

// Ejemplo

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
  const [ , , ...nuevoArreglo] = arreglo; 
  return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);
