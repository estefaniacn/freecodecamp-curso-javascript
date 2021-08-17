/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Encadenar sentencias if else.
*/

function interpretarIMC(indiceDeMasaCorporal) {
  if (indiceDeMasaCorporal < 18.5) {
    console.log("Bajo Peso");
  } else if (indiceDeMasaCorporal <= 24.9) {
    console.log("Normal");
  } else if (indiceDeMasaCorporal <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obeso");
  } 
}

interpretarIMC(17.8); 
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);
