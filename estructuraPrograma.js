// CICLO DE TRIANGULO
// let numero = 1;
// while (numero <= 1000000) {
//   console.log(numero);
//   numero = numero * 10;
// }
// let numero = "#";
// while (numero.length < 8) {
//   console.log(numero);
//   numero += "#";
// }

// FIZZBUZZ
// imprimir numeros del 1 al 100
// num divisibles por 3 = "Fizz"
// num divisibles por 5 = "Buzz"
// num divisibles por 3 y 5 = "FizzBuzz"
// let numero = 1;
// while (numero <= 100) {
//   if (numero % 3 === 0 && numero % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (numero % 3 === 0) {
//     console.log("Fizz");
//   } else if (numero % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(numero);
//   }
//   numero += 1;
// }

// TABLERO DE AJEDREZ

// PRIMERA SOLUCION, SOLO CON UN VALOR = 8

// let tamano = 8;
// let string = "";
// let numero = 1;
// while (numero <= tamano) {
//   if (numero % 2 === 0) {
//     string += "# # # #\n";
//   } else {
//     string += " # # # #\n";
//   }
//   numero += 1;
// }

// SEGUNDA SOLUCION, CON EL VALOR QUE ASIGNEMOS A TAMANO

// let alto = 1;
// let tamano = 10;
// let string = "";
// const hashtag = "#";
// const espacio = " ";
// while (alto <= tamano) {
//   for (let ancho = 1; ancho <= tamano; ancho++) {
//     if ((ancho + alto) % 2 === 0) {
//       string += espacio;
//     } else {
//       string += hashtag;
//     }
//   }
//   string += "\n";
//   alto++;
// }
// console.log(string);
