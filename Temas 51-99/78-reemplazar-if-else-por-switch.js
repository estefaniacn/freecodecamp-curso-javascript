/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Reemplazar if...else por switch.
*/

function seleccionarIdioma(valor) {
  var idioma;

  if (valor == 1) {
      idioma = "Español";
  } else if (valor == 2) {
      idioma = "Francés";
  } else if (valor == 3) {
      idioma = "Italiano";
  } else {
      idioma = "Inglés";
  }

  return idioma;

  // Reemplazado por switch:

  // switch (valor) {
  //     case 1:
  //         idioma = "Español";
  //         break;
  //     case 2:
  //         idioma = "Francés";
  //         break;
  //     case 3:
  //         idioma = "Italiano";
  //         break;
  //     default:
  //         idioma = "Inglés";
  //         break;
  // }
  // return idioma;
}
