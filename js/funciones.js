"use strict";
function resta(v1, v2) {
    return v1 - v2;
}
const division = (v1, v2) => {
    if (v2 == 0)
        return "true";
    else
        return v1 / v2;
};
//paso de parametros opcional
function ejemplo(nombre = "Desconociddo") {
    return "Hola " + nombre;
}
console.log("la resta da: " + resta(6, 8));
console.log("la division da: " + division(5, 0));
console.log(ejemplo());
