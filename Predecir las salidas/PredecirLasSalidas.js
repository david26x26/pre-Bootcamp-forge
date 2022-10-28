var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for (let i = arr.length - 1; i >= 0; i--) {
  // esta recorriendo el array desde el final al principio
  console.log(arr[i]);
} //=> Never, Going,To ,Give ,You , Up

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (let i = 0; i < arr.length; i = i + 2) {
  // iterara de 2 en 2
  if (arr[i] >= 6) {
    // solo entran a los numeros mayores o igual a  6
    console.log(true);
  }
} // => true , true

var arr = [8, 2, 0, 6, 12, 4, 3];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 6) {
    // solo entran a los numeros mayores o igual a  6
    console.log(true);
  }
} //=> true , true  , true
