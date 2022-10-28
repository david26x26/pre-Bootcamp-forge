function myBirthYearFunc() {
  console.log("Nací en" + 1980); // => Naci en1980
}

function myBirthYearFunc(birthYearInput) {
  console.log("Nací en" + birthYearInput); // sale pegado porque no hay espacio al fonal del sting
  //  👆                        // pasado por el console.log
}
myBirthYearFunc("nombreEjemplo"); // => Naci ennombreEjemplo

function add(num1, num2) {
  console.log("¡Sumando numeros!"); //=> ¡Sumando numeros!
  console.log("num1 es: " + num1); // => num1 es: 2
  console.log("num2 es: " + num2); // => num2 es: 3
  var sum = num1 + num2;
  console.log(sum); // => 5
}
add(2, 3);
