/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Acceder a arreglos multidimensionales.
*/

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
Arreglo:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:               0          1          2
Índices internos:   0  1  2    0  1  2    0  1  2
*/

console.log(miArreglo[0]); // [1, 2, 3]
console.log(miArreglo[1]); // [4, 5, 6]
console.log(miArreglo[2]); // [7, 8, 9]

// Acceder a los elementos del primer arreglo.

console.log(miArreglo[0][0]); // 1
console.log(miArreglo[0][1]); // 2
console.log(miArreglo[0][2]); // 3

// Acceder a los elementos del segundo arreglo.

console.log(miArreglo[1][0]); // 4
console.log(miArreglo[1][1]); // 5
console.log(miArreglo[1][2]); // 6
