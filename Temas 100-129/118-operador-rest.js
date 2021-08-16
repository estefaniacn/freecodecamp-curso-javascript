/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Operador rest.
*/

function miFuncion(...args) {
  console.log(args);
}

miFuncion(1);
miFuncion(1, 2);
miFuncion(1, 2, 3, 4);
miFuncion([1, 2, 3], [4, 5, 6]);
miFuncion(1, 2, 3, 4, 5, 6);

// Ejemplo

const sumar = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
