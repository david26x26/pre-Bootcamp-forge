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
