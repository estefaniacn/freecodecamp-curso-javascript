/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Condicionales: Orden lógico.
*/

function clasificarValor(valor) {
  if (valor < 5) {
    console.log("Menor que 5.");
  } else if (valor < 10) {
    console.log("Menor que 10.");
  } else {
    console.log("Mayor o igual que 10.");
  }
}

clasificarValor(7);
clasificarValor(2);
clasificarValor(15);
