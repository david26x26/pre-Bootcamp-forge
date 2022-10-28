//Activity 1
var a = 100;
function abc() {
  var a = 25;
}
console.log(a);
// dará 100

//Activity 2
var a = 100;
function abc() {
  var a = 25;
}

abc();
console.log(a);
// dará 100

//Activity 3
var a = 100;
function abc() {
  var a = 25;
  console.log(a);
}
abc();
console.log(a);
//dará 25,100

//Activity 4
var x = 10;
function abc(x) {
  console.log(x);
  return x * 10;
}
console.log(x);
//  dará 10

//Activity 5
var x = 10;
function abc(x) {
  console.log(x);
  return x * 10;
}
abc(x);
console.log(x);
// dará 10,10

//Activity 6
var x = 10;
function abc(x) {
  console.log(x);
  return x * 10;
}
var z = abc(x);
console.log(z);
//dará 10,10,100

// Activity 7
var x = 10;
function abc(x) {
  console.log(x);
  return x * 10;
}
var z = abc(x) + abc(x);
console.log(Z);
//dará 10,10,200

//Activity 8
var x = 10,
  y = 20;

function abc(x, y) {
  x = x + 10;
  y = y + 10;
  console.log(x);
  console.log(y);
}
console.log(x);
console.log(y);
//dará 10,20

//Activity 9
function abc(x, y) {
  x = x + 10;
  y = y + 10;
  console.log(x);
  console.log(y);
}

abc(x, y);
console.log(x);
console.log(y);
//dará 20,30,10,20

//Activity10
var x = 10,
  y = 20;
function abc(x, y) {
  x = x + 10;
  y = y + 10;
  console.log(x);
  console.log(y);
  return x * 10;
}

z = abc(x, y);
console.log(x);
console.log(y);
console.log(z);
// dará 20,30,10,20,200

//Activity11
var x = 10,
  y = 20;
function abc(x, y) {
  x = x + 10;
  y = y + 10;
  return x * 10;
}

z = abc(x, y) + abc(y, x);
console.log(z);
// dará 500

//Activity12
var x = [1, 3, 5, 7];
function abc() {
  var x = [0, 1, 2, 3];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 2;
  }
}
abc();
console.log(x);
// dará [1,3,5,7]

//Activity13
var x = [1, 3, 5, 7];
function abc() {
  var x = [0, 1, 2, 3];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 2;
  }
  return x;
}
abc();
console.log(x);
// dará [1,3,5,7]

//Activity14
var x = [1, 3, 5, 7];
function abc() {
  var x = [0, 1, 2, 3];
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] + 2;
  }
  return x;
}
x = abc();
console.log(x);
// dará [2,3,4,5]

// Activity15
function abc(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}
dojo = abc(5);
console.log(dojo);
// dará [0,1,2,3,4]

//Activity 16
function abc(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}
dojo = abc(5);
console.log(dojo); // dará [0, 2, 4]

//Activity 17
function abc(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "dojo";
    }
  }
  return arr;
}
output = abc([-3, 0, 3, -5]);
console.log(output);
// dará  ["dojo", 0, 3, "dojo"]

//Activity 18
function abc(number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(0);
  }
  return arr;
}
output = abc(5);
console.log(output); //  dará [0, 0, 0, 0, 0]

//Activity 19
function abc(number) {
  var sum = 0;
  for (var i = 0; i < number; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum + 10;
}
output = abc(2);
console.log(output); /* dará
                         3
                         13     

*/

//Activity 20
function abc(number) {
  var sum = 0;
  for (var i = 0; i < number; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum + 10;
}
output = abc(2) + abc(3);
console.log(output); /* dará
                       3
                       6     
                       29
*/

//Activity 21
function looping(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      console.log(i * j);
    }
  }
  return x * y;
}
z = looping(2, 3);
console.log(z);
/* dará
0
0
0
0
1
2
6                   
*/
