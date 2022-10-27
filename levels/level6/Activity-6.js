//Activity 1
function a() {
  console.log(5);
}
a();
// output 5

//Activity 2
function a() {
  console.log(55);
}
// output sin salida

//Activity 3
function a() {
  console.log(25);
}
// output 25

//Activity 4
function a() {
  var b = 25;
  b = b + 10;
  console.log(b);
}
a();
// output 35

//Activity 5
function a(b, c) {
  console.log(b);
  console.log(c);
}
a(3, 5);
// output 3,5

//Activity 6
function a(b, c) {
  return b + c;
}
console.log(a(3, 5));
// output 8

//Activity 7
function a(b, c) {
  return bc;
}
console.log(a(3, 5));
//output 15

//Activity 8
function a(b, c) {
  return b - c;
}
console.log(a(3, 2));
console.log(a(1, 1));
//output 7,2

//Activity 9
function a(b, c) {
  return b + c;
}
console.log(a(1, 1) + a(2, 2));
//output 6

//Activity 10
function a(b, c) {
  return b + c;
}
console.log(a(1, a(2, 3)));
//output 6

//Activity 11
function a(b, c) {
  return b + c;
}
console.log(a(a(1, 2), a(2, 3)));
//output 8

//Activity 12
function a(b, c) {
  return b + c;
}
console.log(a(a(1, 2), a(2, a(1, 2))));
//output 8

//Activity 13
function a(b, c) {
  console.log(b);
  return b + c;
}
console.log(a(3, 2));
//output 3,5

//Activity 14
function a(b, c) {
  console.log(c);
  return b - c;
}
console.log(a(3, 2));
//output 2,1

//Activity 15
function a(b, c) {
  return 25;
  return 50;
}
console.log(a());
//output 25

//Activity 16
function a(b, c) {
  return 25;
  return b + c;
}
console.log(a(3, 2));
//output 25

//Activity 17
function a(b, c) {
  return b + c;
}
console.log(a(a(2, 3), a(1, 1)));
//output 7

//Activity 18
function a(b, c) {
  return 0;
}
console.log(a(a(2, 3), a(1, 1)));
//output 0
