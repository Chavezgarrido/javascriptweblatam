let image = document.querySelector(".imagenDesafio2");
let isActive = true;

function borde(){
    isActive=!isActive;

    if (isActive == false){
        image.style.border="6px solid black";
    }
    else {
        image.style.border="none";
    }
}

image.addEventListener("click", borde);

