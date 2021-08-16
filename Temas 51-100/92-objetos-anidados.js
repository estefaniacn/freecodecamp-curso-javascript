/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Objetos anidados.
*/

var miReceta = {
  "descripcion": "mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
    "masa": {
      "harina": "100 grs",
      "sal": "1 cucharadita",
      "agua": "1 taza"
    },
    "cobertura": {
      "azucar": "120 grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

console.log(miReceta.ingredientes.masa);

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

console.log(miReceta.ingredientes.cobertura);

console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
