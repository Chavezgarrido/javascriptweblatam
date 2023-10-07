const valor1 = document.getElementById("contraseña1");
const valor2 = document.getElementById("contraseña2");
const valor3 = document.getElementById("contraseña3");
const confirmarContraseña = document.getElementById("confirmarContraseña");
const resultadoContraseña = document.getElementById("resultado");

confirmarContraseña.addEventListener("click", Password);

function Password() {
    const contraseña1 = valor1.value;
    const contraseña2 = valor2.value;
    const contraseña3 = valor3.value;
    const password = contraseña1 + contraseña2 + contraseña3;

    if (password === "911"){
        resultadoContraseña.textContent = "Password 1 correcto";
    }
    else if (password === "714"){
        resultadoContraseña.textContent = "Password 2 correcto";
    }
    else {
        resultadoContraseña.textContent = "Password incorrecto! Intenta nuevamente";
    }
}

window.addEventListener("load", () => {
    resultadoContraseña.textContent = "";
});