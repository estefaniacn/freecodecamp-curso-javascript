/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Métodos en JavaScript.
*/

// Versión ES5

const persona = {
  nombre: "Isabel",
  presentarse: function() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

console.log(persona.presentarse());

// Versión ES6

const persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

persona.presentarse();
