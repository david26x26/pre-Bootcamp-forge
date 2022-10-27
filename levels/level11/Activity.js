//Activity 1
var x = [];
x[0] = "Hello";
x[1] = "Word";
x[2] = 100;
console.log(x.length + " " + x[0]); // dará   3 Hello

//Activity 2
var x = 2;
var points = [40, 100, 1, 5, 25, 10];

if (points[x] == 1) {
  console.log(points[x - 2]);
} else {
  console.log("hello");
} // dará   40

//Activity 3
var x = 2;
var y = [1, 2, 3, 4, 5];
var z = [6, 7, 8, 9, 10];

if (y[x] + z[1] == z[4]) {
  console.log("Dojo");
} else {
  console.log("Hello Word");
} // dará => Dojo

//Activity 4
var x = "boom";
var y = ["hi", "hello", "hey"];

if (x.length == 3) {
  y.push(x);
  console.log(x[3]);
} else {
  console.log(x);
} // dará => boom

//Activity 5
var x = ["John", "Chris", "Mark", "Pj"];

if (x.length == 4) {
  console.log(x[x.length - 3]);
} else {
  console.log("Dojo");
} // dará => Chris
