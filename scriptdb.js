
const input_nombre_docente = document.getElementById("nombre_docente");
const input_edad_docente = document.getElementById("edad_docente");
const input_especialidad = document.getElementById("asignatura");
const div_resultado_db = document.getElementById("resultados_db");

let lista_db = JSON.parse(localStorage.getItem("lista_db")) || [];

mostrar_lista_db(lista_db);

function guardar_db() {

    let nombre = input_nombre_docente.value;
    let edad = input_edad_docente.value;
    let especialidad = input_especialidad.value;

    if (nombre == "" || edad == "" || especialidad == "") {
        alert("Completa todos los campos");
        return;
    }

    let docente = {
        nombre: nombre,
        edad: edad,
        especialidad: especialidad
    };

    lista_db.push(docente);

    localStorage.setItem("lista_db", JSON.stringify(lista_db));

    alert("DOCENTE GUARDADO");

    input_nombre_docente.value = "";
    input_edad_docente.value = "";
    input_especialidad.value = "";

    mostrar_lista_db(lista_db);
}

function mostrar_lista_db(lista) {

  

    div_resultado_db.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {

        let docente = lista[i];

        div_resultado_db.innerHTML +=
            "<h6>---------------- ID " + i + " ----------------</h6>";

        div_resultado_db.innerHTML +=
            "<h2>Nombre: " + docente.nombre + "</h2>";

        div_resultado_db.innerHTML +=
            "<h3>Edad: " + docente.edad + "</h3>";

        div_resultado_db.innerHTML +=
            "<h3>Asignatura: " + docente.especialidad + "</h3>";

        div_resultado_db.innerHTML += "<hr>";
    }
}

function borrar_db() {

    lista_db = [];

    localStorage.removeItem("lista_db");

    alert("DOCENTES BORRADOS");
}


