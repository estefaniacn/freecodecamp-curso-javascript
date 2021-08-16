/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclos "for": contar hacia atrás.
*/

// Ejemplo 1

for (var i = 15; i >= 10; i--) {
    console.log(i);
}

// Ejemplo 2

var miArreglo = [];

for (var i = 10; i > 0; i -= 2) {
    miArreglo.push(i);
}

console.log(miArreglo);
