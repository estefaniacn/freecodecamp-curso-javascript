/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Getters y setters en JavaScript.
*/

class Libro {
  constructor(autor) {
    this._autor = autor;
  }

  // Getter
  get autor() {
    return this._autor;
  }

  // Setter
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);
