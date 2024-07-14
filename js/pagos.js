document.addEventListener('DOMContentLoaded', () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const itemsContainer = document.getElementById("items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    const carritoUnificado = carrito.reduce((acumulador, producto) => {
        const productoExistente = acumulador.find(item => item.id === producto.id);
        if (productoExistente) {
            productoExistente.cantidad += producto.cantidad;
            productoExistente.precioTotal += producto.precio * producto.cantidad;
        } else {
            acumulador.push({
                ...producto,
                precioTotal: producto.precio * producto.cantidad
            });
        }
        return acumulador;
    }, []);

    if (carritoUnificado.length > 0) {
        carritoUnificado.forEach(producto => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            itemDiv.innerHTML = `
                <p class="nombre">${producto.nombre}</p>
                <p class="descripcion">${producto.relleno}</p>
                <div class="detalles">
                    <p class="cantidad">${producto.cantidad} x</p>
                    <p class="precio">$${(producto.precioTotal).toFixed(3)}</p>
                </div>
            `;
            itemsContainer.appendChild(itemDiv);
        });

        const subtotal = carritoUnificado.reduce((sum, producto) => sum + producto.precioTotal, 0).toFixed(3);
        const envio = 0.00; 
        const total = parseFloat(subtotal) + envio;

        subtotalElement.textContent = `$${subtotal}`;
        totalElement.textContent = `$${total.toFixed(3)}`;
    } else {
        itemsContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
    }
});