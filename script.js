const body = document.querySelector("body");
const barraLateral = document.querySelector(".barra-lateral");
const alternar = document.querySelector(".toggle");
const buscadorBtn = document.querySelector(".buscador-box");
const interruptor = document.querySelector(".alternar-interruptor");
const modoText = document.querySelector(".modo-text");

// Agregar nuevos contenedores 

// Obtener el estado del modo nocturno del almacenamiento local
const isDarkMode = localStorage.getItem("modoNocturno") === "true";

// Aplicar el modo nocturno si está activo
if (isDarkMode) {
  body.classList.add("dark");
  modoText.innerText = "Modo claro";
} else {
  modoText.innerText = "Modo oscuro";
}

alternar.addEventListener("click", () => {
  barraLateral.classList.toggle("close");
});

buscadorBtn.addEventListener("click", () => {
  barraLateral.classList.remove("close");
});

interruptor.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Guardar el estado del modo nocturno en el almacenamiento local
  localStorage.setItem("modoNocturno", body.classList.contains("dark"));

  if (body.classList.contains("dark")) {
    modoText.innerText = "Modo claro";
  } else {
    modoText.innerText = "Modo oscuro";
  }
});
