/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ámbito local.
*/

function miFuncion() {
  var miVariableLocal = 4;
  console.log(miVariableLocal);
}

miFuncion(); // La variable está definida dentro de la función.

// ¡Error!
// Al ser una variable local, no se puede usar fuera de la función.
console.log(miVariableLocal); 
