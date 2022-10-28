/**MVP
La historia: Queremos una aplicación que una vez que mida la altura de un niño, 
pueda mostrar si el niño es lo suficientemente alto como para subirse a la montaña rusa. Nos encargaron
 la construcción de la función que mostrará el mensaje correcto al niño.

Paso 1: revisa y edita tus variables según sea necesario

¿Son precisas tus variables? Actualízalas si es necesario.
Paso 2: crea un condicional donde:

Si la altura de la persona es mayor a 52, el console.log debe decir "¡Súbete, chico!". 
Si no, console.log debe mostrar "Lo siento, chico. Tal vez el próximo año”. */

function FiltroDeEntrada(height) {
  if (height > 52) {
    console.log("¡Súbete, chico!");
  } else {
    console.log("Lo siento, chico. Tal vez el próximo año");
  }
}
//Pruebas
FiltroDeEntrada(50); // input "Lo siento, chico. Tal vez el próximo año"
FiltroDeEntrada(80); // input "¡Súbete, chico!"
FiltroDeEntrada(52); // en este caso sera "Lo siento, chico. Tal vez el próximo año" debido a que tiene que ser mayor a 52 y aca es igual
