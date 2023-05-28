    document.addEventListener("DOMContentLoaded",() => {
    const archivo = document.getElementById("archivo");
    const boton = document.getElementById("boton");
    boton.addEventListener("click", () => {
        archivo.click();
    });
    archivo.addEventListener("change", ()=> {
         for(let i = 0; i < archivo.files.length; i++){
         const element = URL.createObjectURL(archivo.files[i]);
         const imagen = document.createElement("img");
         imagen.src = element;
         document.body.appendChild(imagen);
        }
    });
});

 