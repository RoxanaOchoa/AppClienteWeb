function generarPDF() {
  const tipo = document.getElementById("tipoReporte").value;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <p> Generando reporte <b>${tipo}</b>...</p>
    <p>El reporte PDF fue creado exitosamente (simulado).</p>
  `;

  // Aquí podrías usar una librería como jsPDF para crear el PDF real
}

function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  alert("Sesión cerrada correctamente");
}
