/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Operador spread.
*/

const numeros = [1, 2, 3];

function sumar(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
  return x + y + z;
}

console.log(sumar(...numeros));
