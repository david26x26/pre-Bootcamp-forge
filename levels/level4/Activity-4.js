//Activity 1
var counter = 1;
if (counter == 1) {
  console.log("hello");
}
//output hello

//Activity 2
var counter = 1;
if (counter == 1) {
  console.log("hello");
} else if (counter == 2) {
  console.log("world");
}
//output hello

//Activity 3
var counter = 2;
if (counter < 10) {
  console.log("less than 10");
} else {
  console.log("greater than or equal to 10");
}
//output less than 10

//Activity 4
var counter = 1;
if (counter == 5) {
  console.log("coding");
} else {
  console.log("dojo");
}
//output dojo

//Activity 5
var x = [2, 4, 5];
var counter = 0;
if (x[counter] < 5) {
  console.log("coding");
} else {
  console.log("dojo");
}
//output coding

//Activity 6
var x = [2, 4, 5];
var counter = 2;

if (x[counter] > 5) {
  console.log("coding");
} else {
  console.log("dojo");
}
//output dojo

//Activity 7
var x = [2, 4, 5];
var counter = 0;
if (x[counter] > 0) {
  console.log("coding");
  counter = counter + 1;
}
console.log(x[counter]);
//output coding, 4

//Activity 8
var x = [2, 4, 5];
var counter = 0;
if (x[counter] > 0) {
  console.log("coding");
  counter = counter + 1;
}
if (x[counter] > 0) {
  console.log("coding");
  counter = counter + 1;
}
if (x[counter] > 0) {
  console.log("coding");
  counter = counter + 1;
}
console.log(x);
console.log(counter);
//output coding, coding, coding, [2,4,5], 3
