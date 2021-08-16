/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Crear un objeto inmutable en JavaScript.
*/

let colores = { 
  "verde": "#10e04b",
  "azul": "#1b50e0",
  "negro": "#000000",
  "blanco": "#ffffff"
}

Object.freeze(colores);

colores.amarillo = "#fff200"; // No se puede agregar nuevas propiedades.

colores.verde = "#345sg5";    // No se puede cambiar los valores.
 
delete colores.verde          // No se puede eliminar propiedades.
