//Mensaje sobre lo que se va a hacer en la primer actividad//
alert("Los numeros deben ser distintos entre si y mayor a 0");

//Mensaje de ingreso de numero//
let number1 = parseInt(prompt("Ingresa el primer numero"));
let number2 = parseInt(prompt("Ingresa el segundo numero"));

//Operaciones que se haran//
document.write("La suma es: " + (number1 + number2) + "</br>");
document.write("La resta es: " + (number1 - number2) + "</br>");
document.write("La multiplicación es: " + number1 * number2 + "</br>");
document.write("La división es: " + Math.floor(number1 / number2) + "</br>");
document.write("El modulo es: " + Math.floor(number1 % number2) + "</br>");

//Mensaje sobre lo que se va a hacer en la segunda actividad//
alert("Transformaremos Celsius a Kelvin y Fahrenheit");

//Mensaje de ingreso de numero//
let number3 = parseInt(prompt("Ingresa los grados Celsius"));

//Operaciones que se haran//
document.write("Los Kelvin son: " + (number3 + 273.15) + "</br>");
document.write("Los Fahrenheit son: " + ((number3 * 9) / 5 + 32) + "</br>");

//Mensaje sobre lo que se va a hacer en la tercera actividad//
alert("Descomponeremos un total de dias en: año, semanas y dias");

//Mensaje de ingreso de numero//
let number4 = parseInt(prompt("Ingresa la cantidad de dias a calcular"));

//Operaciones que se haran//
document.write("Años: " + Math.floor(number4 / 365) + "</br>");
document.write("Semanas: " + Math.floor((number4 % 365) / 7) + "</br>");
document.write("Dias: " + Math.floor((number4 % 365) % 7) + "</br>");

//Mensaje sobre lo que se va a hacer en la cuarta actividad//
alert("Elige 5 numeros");

//Mensaje de ingreso de numero//
let number5 = parseInt(prompt("Ingresa el numero 1"));
let number6 = parseInt(prompt("Ingresa el numero 2"));
let number7 = parseInt(prompt("Ingresa el numero 3"));
let number8 = parseInt(prompt("Ingresa el numero 4"));
let number9 = parseInt(prompt("Ingresa el numero 5"));

//Operaciones que se haran//
document.write(
  "La suma total es: " +
    (number5 + number6 + number7 + number8 + number9) +
    "</br>"
);

document.write(
  "El promedio es: " +
    (number5 + number6 + number7 + number8 + number9) / 5 +
    "<br>"
);
