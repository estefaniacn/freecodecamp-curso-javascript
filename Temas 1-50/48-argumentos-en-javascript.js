/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Argumentos en JavaScript.
*/

function sumar(a, b) {
  suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3);
sumar(8, 9);
sumar(2, 4);
sumar(5, 5);

// Podemos pasar variables como argumentos
// y sus nombres no tienen que ser iguales a los
// parámetros.
var x = 5;
var y = 3;

sumar(x, y);

// Ejemplo

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy", "aprendiendo", "a programar");
