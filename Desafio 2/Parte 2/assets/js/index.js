let cantidadInputs = document.querySelectorAll(".cantidad-input");
let resultadoParrafo = document.getElementById("resultado");


cantidadInputs.forEach(input => {
    input.addEventListener("change", cantidadTotal);
});


function cantidadTotal() {
    let cantidadTotal = 0;

    cantidadInputs.forEach(input => {
        const cantidad = parseInt(input.value) || 0;

        if (cantidad < 0) {
            input.value = 0; 
        }

        cantidadTotal += cantidad;
    });

    if (cantidadTotal <= 10) {
        resultadoParrafo.textContent = `Llevas ${cantidadTotal} stickers`;

    } else {
        resultadoParrafo.textContent = "Dije maximo 10! >:(";
    }
}


cantidadTotal();