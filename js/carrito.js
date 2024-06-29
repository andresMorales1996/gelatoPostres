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

    carrito.forEach(productoCarrito => {
        // Crear un contenedor para cada producto
        const innerContainer = createElement('div', 'inner-container');

        // Crear y agregar elementos a innerContainer
        const imgDiv = createElement('div', 'img-div');
        imgDiv.appendChild(createElement('img', '', '', productoCarrito.imagen));
        innerContainer.appendChild(imgDiv);

        const detailsDiv = createElement('div', 'details-div');
        detailsDiv.appendChild(createElement('p', 'nomProd', productoCarrito.nombre));
        detailsDiv.appendChild(createElement('p', 'rellProd', productoCarrito.relleno));
        detailsDiv.appendChild(createElement('p', 'porcProd', productoCarrito.porcion));
        const precioDiv = createElement('div', 'precio-div');
        precioDiv.appendChild(createElement('p', 'precProd', `$${(productoCarrito.precio * productoCarrito.cantidad).toFixed(3)}`));
        detailsDiv.appendChild(precioDiv);
        innerContainer.appendChild(detailsDiv);

        // Crear y agregar elementos de cantidad y botones a innerContainer
        const cantDiv = createElement('div', 'cant-div');
        const cantSpan = createElement('span', 'cant-span');
        cantSpan.appendChild(createElement('button', '', '-', ''));
        cantSpan.appendChild(createElement('p', '', productoCarrito.cantidad));
        cantSpan.appendChild(createElement('button', '', '+', ''));
        cantDiv.appendChild(cantSpan);

        const icoSpan = createElement('span', 'ico-span');
        icoSpan.appendChild(createElement('img', '', '', '../assets/svg/heart-solid.svg'));
        icoSpan.appendChild(createElement('img', '', '', '../assets/svg/trash-solid.svg'));
        cantDiv.appendChild(icoSpan);

        innerContainer.appendChild(cantDiv);

        // Agregar innerContainer a mainContainer
        mainContainer.appendChild(innerContainer);
    });

    // Crear y agregar elementos a aside
    const totalDiv = createElement('div', 'total-div');
    totalDiv.appendChild(createElement('p', '', 'Total:'));
    aside.appendChild(totalDiv);

    const pagarBtn = createElement('button', 'pagar-btn', 'Pagar');
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
});