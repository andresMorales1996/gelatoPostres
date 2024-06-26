document.addEventListener('DOMContentLoaded', (event) => {
    // Recuperar los datos del localStorage
    const productoCarrito = JSON.parse(localStorage.getItem("productoCarrito"));

    console.log(productoCarrito);

});