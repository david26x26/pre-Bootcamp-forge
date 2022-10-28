function displayContactInfo() {
  var autContactInfo = [
    "Paula",
    "Smith",
    "1234 Main Street",
    "St. Louis",
    "MO",
    12345,
  ];
  console.log(autContactInfo); // => ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]
}

function displayContactInfo() {
  var produce = ["manzanas", "naranjas"];
  var frozen = ["brocoli", "helado"];
  frozen.push("croequetas de papa");
  console.log(frozen); //=> ["brocoli", "helado", "croequetas de papa"]
}

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary); // => ["Bambi","Beetlejuice" , "Toy Story", "zoro"];
