const input_nombre_estudiante = document.getElementById("nombre_estudiante");
const input_edad_estudiante = document.getElementById("edad_estudiante");
const input_curso = document.getElementById("curso");
const div_resultado_ed = document.getElementById("resultados_ed");

let lista_ed = JSON.parse(localStorage.getItem("lista_ed")) || [];

mostrar_lista_ed(lista_ed);

function guardar_ed() {
let nombre = input_nombre_estudiante.value;
let edad = input_edad_estudiante.value;
let curso = input_curso.value;


if (nombre == "" || edad == "" || curso == "") {
    alert("Completa todos los campos");
    return;
}

let estudiante = {
    nombre: nombre,
    curso: curso,
    edad: edad,
    materias: [],
    notas: []
};

lista_ed.push(estudiante);
localStorage.setItem("lista_ed", JSON.stringify(lista_ed));

alert("ESTUDIANTE GUARDADO");
mostrar_lista_ed(lista_ed);

input_nombre_estudiante.value = "";
input_edad_estudiante.value = "";
input_curso.value = "";


}

function mostrar_lista_ed(lista) {
if (!div_resultado_ed) {
return;
}


div_resultado_ed.innerHTML = "";

for (let i = 0; i < lista.length; i++) {
    let estudiante = lista[i];
    let suma = 0;

    for (let j = 0; j < estudiante.notas.length; j++) {
        suma += parseInt(estudiante.notas[j]);
    }

    let promedio = 0;

    if (estudiante.notas.length > 0) {
        promedio = suma / estudiante.notas.length;
    }

    let resultado = "DESAPROBADO";

    if (estudiante.notas.length > 0 && promedio >= 7) {
        resultado = "APROBADO";
    }

    div_resultado_ed.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
    div_resultado_ed.innerHTML += "<h2>Nombre: " + estudiante.nombre + "</h2>";
    div_resultado_ed.innerHTML += "<h3>Edad: " + estudiante.edad + "</h3>";
    div_resultado_ed.innerHTML += "<h3>Curso: " + estudiante.curso + "</h3>";
    div_resultado_ed.innerHTML += "<h3>Notas: " + estudiante.notas.join(", ") + "</h3>";
    div_resultado_ed.innerHTML += "<h3>Promedio: " + promedio + "</h3>";
    div_resultado_ed.innerHTML += "<h3>" + resultado + "</h3>";
    div_resultado_ed.innerHTML += "<input type='number' min='1' max='10' id='nota" + i + "'>";
    div_resultado_ed.innerHTML += "<button type='button' onclick='guardarnota_ed(" + i + ")'>Guardar nota</button>";
}


}

function guardarnota_ed(id) {
let campo = document.getElementById("nota" + id);


if (!campo) {
    return;
}

let nota = campo.value;

if (nota >= 1 && nota <= 10) {
    lista_ed[id].notas.push(nota);
    localStorage.setItem("lista_ed", JSON.stringify(lista_ed));
    mostrar_lista_ed(lista_ed);
} else {
    alert("Nota no válida. Debe estar entre 1 y 10.");
}


}

function borrar_ed() {
lista_ed = [];
localStorage.removeItem("lista_ed");


if (div_resultado_ed) {
    div_resultado_ed.innerHTML = "";
}

alert("ESTUDIANTES BORRADOS");


}
