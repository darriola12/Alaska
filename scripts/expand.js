function expansion_alena() {
    const displayinfo = document.querySelector(".expanded-image-container");
    const img = document.querySelector("#alena-img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}

function expansion_Ethan() {
    const displayinfo = document.querySelector(".expanded-image-container");
    const img = document.querySelector("#ethan_img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}

function closeExpandedImage() {
    const displayinfo = document.querySelectorAll(".expanded-image-container");
    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
        displayinfo.forEach((element) => {
            element.style.display = "none"; 
        });
    });
}

expansion_alena(); // Llama a la función expansion_alena para configurar el evento clic en la imagen de Alena
expansion_Ethan(); // Llama a la función expansion_Ethan para configurar el evento clic en la imagen de Ethan
closeExpandedImage(); // Llama a la función closeExpandedImage para configurar el evento clic en el botón de cierre
