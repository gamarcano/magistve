
// INICIO
// console.log(getRandomIntInclusive(1,10));


// FUNCIONES

// Obtener un número ENTERO entre dos valores determinados
// Este ejemplo devuelve un número aleatorio situado entre los valores especificados.
//  El valor devuelto no será más bajo que min (o el siguiente entero más alto,
// en caso de que min no sea un número entero), y será menor (pero no igual) que max.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// Obtener un número ENTERO aleatorio entre dos valores (incluyendo ambos)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.

