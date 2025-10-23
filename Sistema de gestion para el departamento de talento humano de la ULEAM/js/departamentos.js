// Cargar departamentos desde localStorage
let departamentos = JSON.parse(localStorage.getItem('departamentos')) || [];

// Renderizar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderTablaDepartamentos();
});

function agregarDepartamento(event) {
    event.preventDefault();

    const nombreDepto = document.getElementById("nombreDepto").value;
    const cargo = document.getElementById("cargo").value;

    const departamento = {
        id: Date.now(), // ID único
        nombre: nombreDepto,
        cargo: cargo,
        fechaCreacion: new Date().toISOString()
    };

    departamentos.push(departamento);
    guardarDepartamentos();
    renderTablaDepartamentos();
    document.getElementById("formDepartamento").reset();
    
    return false;
}

function guardarDepartamentos() {
    localStorage.setItem('departamentos', JSON.stringify(departamentos));
}

function renderTablaDepartamentos() {
    const tbody = document.querySelector("#tablaDepartamentos tbody");
    tbody.innerHTML = "";
    
    let index = 0;
    for (const depto of departamentos) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${depto.nombre}</td>
            <td>${depto.cargo}</td>
            <td>
                <button class="btn btn-rojo" onclick="eliminarDepartamento(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
        index++;
    }
}

function eliminarDepartamento(index) {
    if (confirm('¿Estás seguro de que quieres eliminar este departamento?')) {
        departamentos.splice(index, 1);
        guardarDepartamentos();
        renderTablaDepartamentos();
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    globalThis.location.href = "index.html";
}

// Función para limpiar todos los departamentos (útil para testing)
function limpiarDepartamentos() {
    if (confirm('¿Estás seguro de que quieres eliminar todos los departamentos?')) {
        localStorage.removeItem('departamentos');
        departamentos = [];
        renderTablaDepartamentos();
    }
}
