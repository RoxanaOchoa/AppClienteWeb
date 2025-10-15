const form = document.getElementById("clienteForm");
const lista = document.getElementById("listaClientes");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;

  const li = document.createElement("li");
  li.textContent = `${nombre} | ${correo} | ${telefono} | ${direccion}`;
  lista.appendChild(li);

  form.reset();
});

