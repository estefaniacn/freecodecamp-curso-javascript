/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Múltiples operadores condicionales (ternarios).
*/

function compararNumeros(a, b) {
  if (a === b) {
    return "a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}

function compararNumeros(a, b) {
  return a === b ? "a y b son iguales"
       : a > b ? "a es mayor que b"
       : "b es mayor que a";
}

compararNumeros(11, 27);
compararNumeros(27, 11);
compararNumeros(15, 15);
