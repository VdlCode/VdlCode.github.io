function mostrarSaludo() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var texto;

  if (hora >= 0 && hora < 5) {
    texto = "¡Buenas Noches!";
  } else if (hora >= 5 && hora < 12) {
    texto = "¡Buenos Días!";
  } else if (hora >= 12 && hora < 18) {
    texto = "¡Buenas Tardes!";
  } else {
    texto = "¡Buenas Noches!";
  }

  document.getElementById("txtsaludo").innerHTML = texto;
}
