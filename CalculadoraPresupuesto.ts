type TipoTransaccion = "ingreso" | "gasto";

interface Transaccion {
    id: number;
    monto: number;
    descripcion: string;
    tipo: TipoTransaccion;
}

const transacciones: Transaccion[] = [];
let balance: number = 0;

const montoInput = document.getElementById("monto") as HTMLInputElement;
const descripcionInput = document.getElementById("descripcion") as HTMLInputElement;
const balanceSpan = document.getElementById("balance") as HTMLSpanElement;
const historialUl = document.getElementById("historial") as HTMLUListElement;
const btnIngreso = document.getElementById("agregarIngreso") as HTMLButtonElement;
const btnGasto = document.getElementById("agregarGasto") as HTMLButtonElement;

function agregarTransaccion(tipo: TipoTransaccion) {
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

    const nuevaTransaccion: Transaccion = {
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
