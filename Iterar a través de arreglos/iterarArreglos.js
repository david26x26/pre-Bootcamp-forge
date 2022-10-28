var arr1 = [8, 6, 7, 5, 3, 0, 9];
for (let i = 0; i < arr1.length; i++) {
  console.log(i); // => ,6,7,5,3,0,9
}

var arr2 = [4, 7, 13, 13, 19, 37, -2];
var suma2 = 0;
for (var i = 0; i < arr2.length; i++) {
  suma = suma + arr2[i];
}
console.log("la suma es " + suma + " y el iterador es " + i); // => la suma es 91 y el iterador es 7

var arr3 = [6, 2, 12, 14, -24, 5, 0];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 5) {
    console.log(arr3[i]); //=> 6,12,14
  }
}
