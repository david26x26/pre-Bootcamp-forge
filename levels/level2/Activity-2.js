//Activity 1
var x = [1, 2, 4];
console.log(x);
// será [1,2,4]

//Activity 2
var x = [1, 3, 5];
console.log(x[0]);
// será 1

//Activity 3
var x = [2, 4, 6];
console.log(x[1]);
// será 4

//Activity 4
var x = [1, 3, 5];
console.log(x[2]);
// será 5

//Activity 5
var x = [1.3];
console.log(x[0]);
// será 1.3

//Activity 6
var x = [1, 2, 4];
x[0] = x[1];
console.log(x);
// será [2,2,4]

//Activity 7
var x = [1, 3, 5];
var y = x.length;
console.log(y);
//será 3

//Activity 8
var x = [2, 4, 6, 3, 7];
var y = x.length - 2;
console.log(x[y]);
//será 3

//Activity 9
var x = [2, 4, 6, 3, 7];
var y = x.length;
console.log(x[y - 1]);
//será 7

//Activity 10
var x = [1, 3, 5, 7];
x[0] = x[x.length - 2];
console.log(x);
//output [5,3,5,7]

//Activity 11
var x = [1, 3, 5, 7];
x[x.length - 3] = x[x.length / 2 + x.length / 4];
console.log(x);
//será [1,7,5,7]

//Activity 12
var x = [1, 3, 5, 7];
var y = [2, 4, 6];
x[2] = y[x.length - 3];
console.log(x);
//será [1,3,4,7]

//Activity 13
var x = [1, 3, 5, 7];
var y = [2, 4, 6];
x[2] = y[x.length - 3] + x[x[0] + y[0]];
console.log(x);
//será [1,3,11,7]
