/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Sentencias switch: múltiples casos.
*/

function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  } 
  return volumen;
}

clasificarVolumen(1);
clasificarVolumen(3);
clasificarVolumen(5);
