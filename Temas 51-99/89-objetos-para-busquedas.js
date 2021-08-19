/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Objetos para hacer búsquedas.
*/

// Inicialmente es una sentencia switch
// y vamos a reemplazarla con un objeto.

function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";

  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}
  
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

// Podemos cambiar switch por un objeto. 

// function buscarElementoQuimico(simbolo) {
//   var simbolosQuimicos = {
//     "Al": "Aluminio",
//     "S": "Azufre",
//     "Cl": "Cloro",
//     "He": "Helio",
//     "B": "Boro",
//     "Li": "Litio"
//   };
//   return simbolosQuimicos[simbolo];
// }

// console.log(buscarElementoQuimico("Al"));
// console.log(buscarElementoQuimico("S"));
// console.log(buscarElementoQuimico("Cl"));
// console.log(buscarElementoQuimico("He"));
// console.log(buscarElementoQuimico("B"));
// console.log(buscarElementoQuimico("Li"));
