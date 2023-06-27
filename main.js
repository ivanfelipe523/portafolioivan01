const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos listener para las imágenes
const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .item img').forEach((elemento) => {
  elemento.addEventListener('click', () => {
    const ruta = elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
    const enlaceURL = elemento.dataset.enlace; // Obtener la URL específica del atributo de datos

    overlay.classList.add('activo');
    document.querySelector('#overlay img').src = ruta;
    document.querySelector('#overlay .descripcion').innerHTML = descripcion;

    // Convertir la imagen en un enlace con la URL específica
    const enlace = document.createElement('a');
    enlace.href = enlaceURL;
    enlace.target = '_blank';
    enlace.appendChild(elemento.cloneNode(true));

    // Reemplazar la imagen con el enlace
    document.querySelector('#overlay img').replaceWith(enlace);
  });
});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});