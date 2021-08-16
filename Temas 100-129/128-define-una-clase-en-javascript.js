/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Definir una clase en JavaScript.
*/

class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

var zeus = new TransbordadorEspacial('Júpiter');
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial('Marte');
console.log(zeus.planeta);

// Ejemplo

class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

var miMascota = new Mascota("Nora", 5);

console.log(miMascota.nombre);
console.log(miMascota.edad);

var tuMascota = new Mascota("Gino", 2);
