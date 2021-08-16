/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Crear objetos de forma concisa.
*/

// Inicialmente

const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  };
};

console.log(crearPersona("Gino Smith", 28, "Español"));

// Alternativa más concisa

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"));
