/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Números enteros aleatorios en un rango.
*/

function rangoAleatorio(limiteInferior, limiteSuperior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

console.log(rangoAleatorio(3, 8));

// Con un ciclo

for (var i = 0; i < 15; i++) {
  console.log(rangoAleatorio(3, 8));
}
