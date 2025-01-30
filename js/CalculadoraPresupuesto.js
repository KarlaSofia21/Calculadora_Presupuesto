"use strict";
const transacciones = [];
let balance = 0;
const montoInput = document.getElementById("monto");
const descripcionInput = document.getElementById("descripcion");
const balanceSpan = document.getElementById("balance");
const historialUl = document.getElementById("historial");
const btnIngreso = document.getElementById("agregarIngreso");
const btnGasto = document.getElementById("agregarGasto");
function agregarTransaccion(tipo) {
    const monto = parseFloat(montoInput.value);
    const descripcion = descripcionInput.value.trim();
    if (isNaN(monto) || monto <= 0) {
        alert("El monto debe ser un número positivo.");
        return;
    }
    if (descripcion === "") {
        alert("La descripción no puede estar vacía.");
        return;
    }
    const nuevaTransaccion = {
        id: transacciones.length + 1,
        monto,
        descripcion,
        tipo
    };
    transacciones.push(nuevaTransaccion);
    balance += tipo === "ingreso" ? monto : -monto;
    actualizarInterfaz();
    limpiarFormulario();
}
function actualizarInterfaz() {
    balanceSpan.textContent = `$${balance.toFixed(2)}`;
    historialUl.innerHTML = "";
    transacciones.forEach(transaccion => {
        const li = document.createElement("li");
        li.textContent = `${transaccion.descripcion}: $${transaccion.monto.toFixed(2)}`;
        li.classList.add(transaccion.tipo);
        historialUl.appendChild(li);
    });
}
function limpiarFormulario() {
    montoInput.value = "";
    descripcionInput.value = "";
}
btnIngreso.addEventListener("click", () => agregarTransaccion("ingreso"));
btnGasto.addEventListener("click", () => agregarTransaccion("gasto"));
