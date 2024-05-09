function expansion_alena() {
    const displayinfo = document.querySelector(".expanded-image-container");
    const img = document.querySelector("#alena-img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}

function expansion_Ethan() {
    const displayinfo = document.querySelector(".expanded-image-container-ethan");
    const img = document.querySelector("#ethan_img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}

function expansion_Brant() {
    const displayinfo = document.querySelector(".expanded-image-container-brant");
    const img = document.querySelector("#brant_img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}
function expansion_Camry() {
    const displayinfo = document.querySelector(".expanded-image-container-Camry");
    const img = document.querySelector("#camry_img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}
function expansion_garret() {
    const displayinfo = document.querySelector(".expanded-image-container-garret");
    const img = document.querySelector("#garret_img");
    img.addEventListener("click", () => {
        displayinfo.style.display = "block"; 
        displayinfo.style.transition = "4s";
    });
}
function expansion_braden() {
    const displayinfo = document.querySelector(".expanded-image-container-branden");
    const img = document.querySelector("#braden_img");
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
function closeExpandedImage_camry() {
    const displayinfo = document.querySelectorAll(".expanded-image-container-Camry");
    const closeButton = document.querySelector(".close-btn-camry");
    closeButton.addEventListener("click", () => {
        displayinfo.forEach((element) => {
            element.style.display = "none"; 
        });
    });
}
function closeExpandedImage_ethan() {
    const displayinfo = document.querySelectorAll(".expanded-image-container-ethan");
    const closeButton = document.querySelector(".close-btn-ethan");
    closeButton.addEventListener("click", () => {
        displayinfo.forEach((element) => {
            element.style.display = "none"; 
        });
    });
}
function closeExpandedImage_brant() {
    const displayinfo = document.querySelectorAll(".expanded-image-container-brant");
    const closeButton = document.querySelector(".close-btn-brant");
    closeButton.addEventListener("click", () => {
        displayinfo.forEach((element) => {
            element.style.display = "none"; 
        });
    });
}
function closeExpandedImage_garret() {
    const displayinfo = document.querySelectorAll(".expanded-image-container-garret");
    const closeButton = document.querySelector(".close-btn-garret");
    closeButton.addEventListener("click", () => {
        displayinfo.forEach((element) => {
            element.style.display = "none"; 
        });
    });
}
function closeExpandedImage_branden() {
    const displayinfo = document.querySelectorAll(".expanded-image-container-branden");
    const closeButton = document.querySelector(".close-btn-branden");
    closeButton.addEventListener("click", () => {
        displayinfo.forEach((element) => {
            element.style.display = "none"; 
        });
    });
}


expansion_alena(); // Llama a la función expansion_alena para configurar el evento clic en la imagen de Alena
expansion_Ethan(); // Llama a la función expansion_Ethan para configurar el evento clic en la imagen de Ethan
closeExpandedImage(); // Llama a la función closeExpandedImage para configurar el evento clic en el botón de cierre
closeExpandedImage_ethan();
expansion_Brant();
closeExpandedImage_brant();
expansion_Camry();
closeExpandedImage_camry();
expansion_garret();
closeExpandedImage_garret();
expansion_braden();
closeExpandedImage_branden();