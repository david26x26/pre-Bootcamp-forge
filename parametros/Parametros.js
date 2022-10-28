function greet(nombre) {
  // paso por parametro el nombre para que sea interactivo
  if (nombre === "Count Dooku") {
    // si es pasado por parametro como "Count Dooku". va
    console.log("¡Voy por ti, Dooku!"); //  a mostrar por consola "¡Voy por ti, Dooku!"
  }

  let date = new Date(); // aca llamp el construcor del objeto Date para poder saber la hora
  date.setSeconds(date.getSeconds() + 70); // aca establesco y obtengo los datos sobre los segundos segun mi zona horaria
  console.log("¡Buen dia, " + nombre + " //" + date); // concateno todo
}
