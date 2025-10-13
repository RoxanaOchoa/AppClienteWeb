document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('clienteForm');
  const tablaBody = document.querySelector('#clientesTable tbody');
  const limpiarBtn = document.getElementById('limpiar');
  const STORAGE_KEY = 'clientes_demo';

  function obtenerClientes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  }

  function guardarClientes(clientes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
  }

  function renderizarTabla() {
    const clientes = obtenerClientes();
    tablaBody.innerHTML = '';
    clientes.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${c.nombre}</td>
        <td>${c.email}</td>
        <td>${c.telefono || ''}</td>
        <td>${c.activo ? 'Sí' : 'No'}</td>
        <td>${c.tipo}</td>
      `;
      tablaBody.appendChild(tr);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const cliente = {
      nombre: data.get('nombre'),
      email: data.get('email'),
      telefono: data.get('telefono'),
      fechaNacimiento: data.get('fechaNacimiento'),
      genero: data.get('genero'),
      direccion: data.get('direccion'),
      activo: form.querySelector('#activo').checked,
      tipo: data.get('tipo')
    };

    if (!cliente.nombre || cliente.nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres');
      return;
    }
    if (!cliente.email.includes('@')) {
      alert('Ingrese un correo válido');
      return;
    }

    const clientes = obtenerClientes();
    clientes.push(cliente);
    guardarClientes(clientes);
    renderizarTabla();
    form.reset();
    document.getElementById('activo').checked = true;
  });

  limpiarBtn.addEventListener('click', () => {
    if (confirm('¿Seguro que desea borrar todos los clientes?')) {
      localStorage.removeItem(STORAGE_KEY);
      renderizarTabla();
    }
  });

  renderizarTabla();
});
