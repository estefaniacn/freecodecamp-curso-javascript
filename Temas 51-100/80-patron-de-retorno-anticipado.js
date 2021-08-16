/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Patrón de retorno anticipado para funciones.
*/

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós");
}

console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  } 
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));
