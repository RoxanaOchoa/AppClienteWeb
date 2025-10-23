document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "rous" && pass === "1234") {
      // Guardar sesión en el navegador
      localStorage.setItem("usuarioActivo", user);
      alert(" Bienvenida al Sistema de Talento Humano ULEAM");
      globalThis.location.href = "empleados.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});
