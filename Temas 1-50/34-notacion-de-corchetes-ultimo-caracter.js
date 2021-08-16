/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Notación de corchetes: Último Carácter.
*/

var miCadena;

/*
El último índice siempre es longitud - 1 porque comenzamos 
a contar desde 0.

miCadena.length para "JavaScript" es 10.
El último índice es 9.

Cadena:  J  a  v  a  S  c  r  i  p  t 
Índices: 0  1  2  3  4  5  6  7  8  9    
*/

miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]);

miCadena = "Python";
console.log(miCadena[miCadena.length - 1]);
