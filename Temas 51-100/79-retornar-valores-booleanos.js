/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Retornar valores booleanos.
*/

// Inicialmente

function esMenorQue(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Cambio

function esMenorQue(a, b) {
  return a < b;
}

console.log(esMenorQue(3, 6)); // true
console.log(esMenorQue(6, 3)); // false
console.log(esMenorQue(3, 3)); // false
