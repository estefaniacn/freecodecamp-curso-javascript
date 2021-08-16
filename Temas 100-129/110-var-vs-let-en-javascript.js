/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: var vs. let.
*/

// Con var podemos declarar una variable más de una vez.
var campista = "James";
var campista = "David";
console.log(campista);

// Con let no podemos declarar una variable más de una vez.
let campista = "James";
let campista = "David";
console.log(campista);

// Podemos cambiar el valor de la variable.
let campista = "James";
campista = "David";  	// sin let
console.log(campista);
