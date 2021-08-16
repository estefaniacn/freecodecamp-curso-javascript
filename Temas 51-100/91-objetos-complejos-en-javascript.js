/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Objetos complejos en JavaScript. 
*/

var ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  }
];

console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);

console.log(ordenesDePizzas[0].precio);
console.log(ordenesDePizzas[0]["precio"]);

// Añadiendo una tercera pizza

var ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  },
  {
    "tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true
  }
];
