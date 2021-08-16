/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Eliminar propiedades en un objeto de JavaScript.
*/

var curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

console.log(curso.duracion); // 30
delete curso.duracion;
console.log(curso.duracion); // undefined

console.log(curso.idioma);   // Español
delete curso.idioma;
console.log(curso.idioma);   // undefined
