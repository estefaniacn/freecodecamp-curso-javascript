/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Asignar un valor retornado a una variable.
*/

function sumar(a, b) {
  return a + b;
}

// Se asigna el valor retornado a una variable 
var resultado = sumar(5, 3);
console.log(resultado);

// Ejemplo

function crearCadenaConMeta(lenguajeDeProgramacion) {
  return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);
