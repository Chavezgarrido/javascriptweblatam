let contador = 0;
const precio = 400;
let total = 0;

const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const contadorHTML = document.querySelector("#contador");
const totalHTML = document.querySelector("#total");

function sumarFunction() {
    contador += 1;
    renderHTML();
}

function restarFunction() {
    contador -= 1;
    renderHTML();
}

function renderHTML() {
    contadorHTML.innerHTML = contador;
    totalHTML.innerHTML = contador * precio;
}

sumar.addEventListener("click", sumarFunction);
restar.addEventListener("click", restarFunction);
renderHTML();