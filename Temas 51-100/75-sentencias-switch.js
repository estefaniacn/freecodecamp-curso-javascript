/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Sentencias switch.
*/

function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3: 
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;   
  }
  return respuesta;
}

clasificarValor(1);
clasificarValor(2);
clasificarValor(3);
clasificarValor(4);

// Ejemplo

var producto = "hamburguesa";

switch (producto) {
  case "pizza":
    console.log("La pizza básica cuesta $10.55");
    break;
  case "hamburguesa":
    console.log("Las hamburguesas cuestan $6.78");
    break;
  case "helado":
    console.log("El helado cuesta $2.8");
    break;
}