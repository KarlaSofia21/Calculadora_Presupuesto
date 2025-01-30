"use strict";
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
dias.push("Domingo");
let calificaciones = [7, 8, 9, 10];
calificaciones.pop;
console.log(calificaciones);
console.log(dias);
//tuplas
let alumno;
alumno = ["20230067", "Karla Sofia", 21, true];
console.log(alumno);
//enumerados
var semana;
(function (semana) {
    semana[semana["lunes"] = 0] = "lunes";
    semana[semana["martes"] = 1] = "martes";
    semana[semana["miercoles"] = 2] = "miercoles";
    semana[semana["jueves"] = 3] = "jueves";
    semana[semana["viernes"] = 4] = "viernes";
})(semana || (semana = {}));
