
  // Verifica si es la primera vez que el usuario visita el sitio
  if (localStorage.getItem("visited") === null) {
    showModal();
    localStorage.setItem("visited", true);
  }

  // Obtenemos los elementos que queremos darle opacidad
  var homeSection = document.querySelector("section.home");


  // Oculta la ventana emergente
  function hideModal() {
    document.getElementById("welcome-modal").style.display = "none";
    document.body.style.overflow = "auto"; // Restaura el scroll
    homeSection.style.opacity = "1"; // Restaura el scroll
    homeSection.style.pointerEvents = "auto"; // Restaura el scroll
    

  }
