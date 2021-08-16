/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Sintaxis de desestructuración para pasar un objeto.
*/

var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicacion: "España"
};

const actualizarPerfil = (informacionDePerfil) => {
  const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente);

// Alternativa: usar la sintaxis de desestructuración directamente
// en la lista de parámetros.

const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente);

// Ejemplo

const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85
};

const mitad = (e) => (e.max + e.min) / 2.0; 

// Usando la sintaxis de desestructuración para pasar un objeto.
const mitad = ({max, min}) => (max + min) / 2.0; 

console.log(mitad(estadisticas));
