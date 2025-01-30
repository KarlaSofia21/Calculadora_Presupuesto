"use strict";
window.addEventListener('DOMContentLoaded', (event) => {
    function calculate(operacion) {
        const valor1 = parseFloat(document.getElementById("valor1").value);
        const valor2 = parseFloat(document.getElementById("valor2").value);
        const resultElement = document.getElementById("result");
        if (isNaN(valor1) || isNaN(valor2)) {
            resultElement.textContent = "Por favor, ingresa números válidos.";
            return;
        }
        let result;
        switch (operacion) {
            case "suma":
                result = valor1 + valor2;
                break;
            case "resta":
                result = valor1 - valor2;
                break;
            case "multiplicacion":
                result = valor1 * valor2;
                break;
            case "division":
                if (valor2 === 0) {
                    resultElement.textContent = "No se puede dividir entre 0.";
                    return;
                }
                result = valor1 / valor2;
                break;
            default:
                resultElement.textContent = "Operación no válida.";
                return;
        }
        resultElement.textContent = result.toString();
    }
    document.getElementById("suma").addEventListener("click", () => calculate("suma"));
    document.getElementById("resta").addEventListener("click", () => calculate("resta"));
    document.getElementById("multiplicacion").addEventListener("click", () => calculate("multiplicacion"));
    document.getElementById("division").addEventListener("click", () => calculate("division"));
});
