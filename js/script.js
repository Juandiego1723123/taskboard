document.getElementById('anio').textContent = new Date().getFullYear();

const form = document.getElementById('form-nueva-tarea');
const inputTitulo = document.getElementById('titulo-tarea');
const selectPrioridad = document.getElementById('prioridad-tarea');
const listaPendiente = document.getElementById('lista-pendiente');
const contador = document.getElementById('contador-pendientes');

function actualizarContador() {
    const total = listaPendiente.children.length;
    contador.textContent = `${total} tarea${total === 1 ? '' : 's'} pendiente${total === 1 ? '' : 's'}`;
}

function crearTarjeta(titulo, prioridad) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.dataset.prioridad = prioridad;

    const tituloEl = document.createElement('p');
    tituloEl.className = 'tarjeta-titulo';
    tituloEl.textContent = titulo;

    const prioridadEl = document.createElement('span');
    prioridadEl.className = 'tarjeta-prioridad';
    prioridadEl.textContent = `Prioridad ${prioridad}`;

    tarjeta.append(tituloEl, prioridadEl);
    return tarjeta;
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const titulo = inputTitulo.value.trim();
    if (!titulo) return;

    const tarjeta = crearTarjeta(titulo, selectPrioridad.value);
    listaPendiente.appendChild(tarjeta);
    actualizarContador();

    form.reset();
    inputTitulo.focus();
});

actualizarContador();
