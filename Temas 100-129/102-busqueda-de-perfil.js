/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Búsqueda de perfiles.
*/

var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
        return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no está en la lista";
}
  
buscarPerfil("Nora", "gustos");
buscarPerfil("Harry", "apellido");
buscarPerfil("Sherlock", "apellido");

buscarPerfil("Nora", "dirección"); // La propiedad no existe.
buscarPerfil("Bob", "numero");     // El contacto no existe.
