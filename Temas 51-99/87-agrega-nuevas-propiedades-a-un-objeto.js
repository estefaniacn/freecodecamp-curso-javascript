/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Añade nuevas propiedades a un objeto de JavaScript.
*/

var curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

// Notación de punto
console.log(curso.vistas); // undefined
curso.vistas = 34500;
console.log(curso.vistas);

// Notación de corchetes
curso["vistas"] = 34500;
console.log(curso.vistas);
