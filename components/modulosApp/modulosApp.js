function cambiarVista(vista) {
    const contenedorIconos = document.querySelector('.contenedor-iconos');
    if (vista === 'lista') {
        contenedorIconos.classList.add('lista');
        contenedorIconos.classList.remove('columna');
    } else {
        contenedorIconos.classList.add('columna');
        contenedorIconos.classList.remove('lista');
    }
}

document.getElementById('inputBuscar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let modulos = document.querySelectorAll('.modulos-panel');

    modulos.forEach(function(modulo) {
        let text = modulo.textContent.toLowerCase();
        if (text.includes(filter)) {
            modulo.style.display = '';
        } else {
            modulo.style.display = 'none';
        }
    });
});

