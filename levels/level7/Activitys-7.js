//Activity 1
for (let i = 1; i < 100; i++) {
  if (i == 10) {
    break;
  }
  console.log(i);
} /* dará 
1
2
3
4
5
6
7
8
9*/

//Activity 2
for (let i = 13; i <= 20; i++) {
  if (i == 50) {
    break;
  }
  console.log(i);
} /* dará 
13
14
15
16
17
18
19
20
*/

//Activity 3
for (let i = 1; i <= 20; i++) {
  if (i > 5) {
    break;
  } else {
    console.log("hello");
  }
} /* dará 
hello
hello
hello
hello
hello
*/
//Activity 4
for (let i = 9; i <= 20; i++) {
  if (i == 10) {
    break;
  } else {
    console.log("hello");
  }
  console.log(i);
} /* dará 
hello
9
*/

//Activity 5
var message = "CodingDojo";
for (let i = 5; i <= 20; i++) {
  if (i == message.length) {
    break;
  }
  console.log(i);
}
/* dará 
5
6
7
8
9
*/
