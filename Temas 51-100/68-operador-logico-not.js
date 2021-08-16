/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Operador lógico "not" en JavaScript.
*/

/*
   Tabla de verdad del operador NOT 
   Para: !X
   |  X  | !X  | 
   -----------------------
   |  T  |  F  |
   |  F  |  T  |
*/

// Comprobemos la tabla de verdad
console.log(!true);
console.log(!false);

var a = 8;

// !(a > 5) --> !true --> false
console.log(!(a > 5));

// !(a < 5) --> !false --> true
console.log(!(a < 5));
