/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Iterar sobre un arreglo con un ciclo "for".
*/

// Ejemplo 1

var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    total += miArreglo[i];
}

console.log(total);

// Ejemplo

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

// Ejemplo

function contarNumerosPares(arreglo) {
    var total = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 3, 1, 2]));
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));
