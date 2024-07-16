document.addEventListener('DOMContentLoaded', (event) => {
    // Recuperar los datos del localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const mainContainer = document.getElementById('main-container');
    const aside = document.getElementById('aside');

    // Función para crear elementos
    const createElement = (tag, classNames, textContent, src) => {
        const element = document.createElement(tag);
        if (classNames) element.classList.add(...classNames.split(' '));
        if (textContent) element.textContent = textContent;
        if (src) element.src = src;
        return element;
    };

    // Función para actualizar la cantidad y el precio
    const updateQuantityAndPrice = (productoCarrito, cantElement, precioElement, change) => {
        const newQuantity = Math.max(1, parseInt(cantElement.textContent) + change);
        cantElement.textContent = newQuantity;
        precioElement.textContent = `$${(productoCarrito.precio * newQuantity).toFixed(3)}`;
        productoCarrito.cantidad = newQuantity;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarTotalCarrito();
    };

    const calcularTotalCarrito = () => {
        return carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad);
        }, 0).toFixed(3);
    };

    const actualizarTotalCarrito = () => {
        totalDiv.querySelector('p').textContent = `Total: $${calcularTotalCarrito()}`;
    };

    const mostrarMensajeCarritoVacio = () => {
        if (carrito.length === 0) {
            const emptyCartMessage = createElement('div', 'empty-cart', 'El carrito está vacío');
            mainContainer.appendChild(emptyCartMessage);
        } else {
            const emptyCartMessage = document.querySelector('.empty-cart');
            if (emptyCartMessage) {
                emptyCartMessage.remove();
            }
        }
    };

    const eliminarProductoDelCarrito = (id) => {
        // Eliminar producto del carrito
        const index = carrito.findIndex(producto => producto.id === id);
        if (index !== -1) {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            // Eliminar el div del DOM
            const productoDiv = document.getElementById(`producto-${id}`);
            if (productoDiv) {
                productoDiv.remove();
            }
            // Actualizar total del carrito y mostrar mensaje si está vacío
            actualizarTotalCarrito();
            mostrarMensajeCarritoVacio();
        }
    };

    // Mostrar mensaje si el carrito está vacío al cargar la página
    mostrarMensajeCarritoVacio();

    carrito.forEach(productoCarrito => {
        // Crear un contenedor para cada producto
        const innerContainer = createElement('div', 'inner-container');
        innerContainer.id = `producto-${productoCarrito.id}`;

        // Crear y agregar elementos a innerContainer
        const imgDiv = createElement('div', 'img-div');
        imgDiv.appendChild(createElement('img', '', '', productoCarrito.imagen));
        innerContainer.appendChild(imgDiv);

        const detailsDiv = createElement('div', 'details-div');
        detailsDiv.appendChild(createElement('p', 'nomProd', productoCarrito.nombre));
        detailsDiv.appendChild(createElement('p', 'rellProd', productoCarrito.relleno));
        detailsDiv.appendChild(createElement('p', 'porcProd', productoCarrito.porcion));
        const precioDiv = createElement('div', 'precio-div');
        const precioElement = createElement('p', 'precProd', `$${(productoCarrito.precio * productoCarrito.cantidad).toFixed(3)}`);
        precioElement.id = `precio-${productoCarrito.id}`;
        precioDiv.appendChild(precioElement);
        detailsDiv.appendChild(precioDiv);
        innerContainer.appendChild(detailsDiv);

        // Crear y agregar elementos de cantidad y botones a innerContainer
        const cantDiv = createElement('div', 'cant-div');
        const cantSpan = createElement('span', 'cant-span');
        const minusButton = createElement('button', 'minus', '-', '');
        const cantElement = createElement('p', '', productoCarrito.cantidad);
        cantElement.id = `cantidad-${productoCarrito.id}`;
        const plusButton = createElement('button', 'plus', '+', '');

        // Añadir event listeners a los botones
        minusButton.addEventListener('click', () => updateQuantityAndPrice(productoCarrito, cantElement, precioElement, -1));
        plusButton.addEventListener('click', () => updateQuantityAndPrice(productoCarrito, cantElement, precioElement, 1));

        cantSpan.appendChild(minusButton);
        cantSpan.appendChild(cantElement);
        cantSpan.appendChild(plusButton);
        cantDiv.appendChild(cantSpan);

        const icoSpan = createElement('span', 'ico-span');
        const trashIcon = createElement('img', 'trash', '', '../assets/svg/trash-solid.svg');
        const heartIcon = createElement('img', 'heart', '', '../assets/svg/heart-solid.svg');
        icoSpan.appendChild(heartIcon);
        icoSpan.appendChild(trashIcon);
        cantDiv.appendChild(icoSpan);

        innerContainer.appendChild(cantDiv);
        mainContainer.appendChild(innerContainer);

        // Añadir event listener para eliminar producto
        trashIcon.addEventListener('click', () => eliminarProductoDelCarrito(productoCarrito.id));

        // Añadir event listener para cambiar el icono del corazón
        heartIcon.addEventListener('click', () => {
            heartIcon.src = heartIcon.src.includes('heart-solid.svg') ? '../assets/svg/heart-red.svg' : '../assets/svg/heart-solid.svg';
        });
    });

    // Crear y agregar elementos a aside
    const totalDiv = createElement('div', 'total-div');
    totalDiv.appendChild(createElement('p', '', `Total: $${calcularTotalCarrito()}`));
    aside.appendChild(totalDiv);

    const pagarBtn = createElement('button', 'pagar-btn', 'Ir a Pagar');
    pagarBtn.addEventListener('click', () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        window.location.href = "../../pages/pagos.html";
    });
    aside.appendChild(pagarBtn);

    const payMetodsDiv = createElement('div', 'pay-metods-div');
    payMetodsDiv.appendChild(createElement('p', '', 'Pagar con:'));
    const payMetods = createElement('span', '');
    ['bank', 'cc-mastercard', 'paypal', 'apple-pay', 'mercado-pago'].forEach(metod => {
        payMetods.appendChild(createElement('img', 'metod_img', '', `../assets/svg/${metod}.svg`));
    });
    payMetodsDiv.appendChild(payMetods);
    aside.appendChild(payMetodsDiv);

    aside.appendChild(createElement('p', 'polTitle', 'Política de protección al comprador'));

    const polDiv = createElement('div', 'pol-div');
    polDiv.appendChild(createElement('img', '', '', '../assets/svg/shield-halved-solid.svg'));
    polDiv.appendChild(createElement('p', '', 'En Gelato & Postres, valoramos la seguridad y satisfacción de nuestros clientes. Por ello, implementamos las más avanzadas medidas de seguridad en la sección de pagos para proteger sus datos personales y financieros.'));
    aside.appendChild(polDiv);

    // Inicializar el total del carrito
    actualizarTotalCarrito();
});