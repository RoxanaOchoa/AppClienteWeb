// Función principal de validación y registro
document.getElementById("formEmpleado").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener valores de los campos
  const cedula = document.getElementById("cedula").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const celular = document.getElementById("celular").value.trim();

  // Validaciones básicas
  if (cedula.length < 10) {
    mostrarMensaje("La cédula debe tener al menos 10 dígitos", "error");
    return;
  }

  if (!validarCorreo(correo)) {
    mostrarMensaje("Correo electrónico no válido", "error");
    return;
  }

  if (celular.length < 9) {
    mostrarMensaje("Número de celular no válido", "error");
    return;
  }

  mostrarMensaje("✅ Registro completado correctamente", "exito");

  // Limpiar formulario
  this.reset();
});

// Función para validar formato de correo
function validarCorreo(email) {
  const expresion = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return expresion.test(email);
}

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.color = tipo === "error" ? "#ff6b6b" : "#00ff88";
}
