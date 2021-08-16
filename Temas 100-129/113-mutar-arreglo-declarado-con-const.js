/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Mutar un arreglo declarado con const.
*/

const MI_ARREGLO = [1, 2, 3, 4];

// MI_ARREGLO = [5, 6, 7, 8]; // Error porque usamos const

// Pero sí podemos mutar el arreglo con la notación de corchetes
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO);
