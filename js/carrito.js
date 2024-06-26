document.addEventListener('DOMContentLoaded', (event) => {
    // Recuperar los datos del localStorage
    const productoCarrito = JSON.parse(localStorage.getItem("productoCarrito"));

    const mainContainer = document.getElementById('main-container');

    const imgDiv = document.createElement('div')
    imgDiv.classList.add('img-div');
    const imgProducto = document.createElement('img')
    imgProducto.src = productoCarrito.imagen;
    imgDiv.appendChild(imgProducto)
    mainContainer.appendChild(imgDiv);
    
    const nombreProducto = document.createElement('p');
    nombreProducto.classList.add('nomProd');
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details-div'); 
    nombreProducto.textContent = productoCarrito.nombre;
    detailsDiv.appendChild(nombreProducto);
    mainContainer.appendChild(detailsDiv);

    const rellenoProducto = document.createElement('p');
    rellenoProducto.classList.add('rellProd');
    rellenoProducto.textContent = productoCarrito.relleno;
    detailsDiv.appendChild(rellenoProducto);
    mainContainer.appendChild(detailsDiv);

    const porciones = document.createElement('p');
    porciones.classList.add('porcProd');
    porciones.textContent = productoCarrito.porcion;
    detailsDiv.appendChild(porciones);
    mainContainer.appendChild(detailsDiv);

    const precioDiv = document.createElement('div');
    precioDiv.classList.add('precio-div')
    const precio = document.createElement('p');
    precio.classList.add('precProd');
    precio.textContent = `$${productoCarrito.precio * productoCarrito.cantidad}`;
    precioDiv.appendChild(precio);
    detailsDiv.appendChild(precioDiv)
    mainContainer.appendChild(detailsDiv);

    const cantidad = document.createElement('p');
    const minusBtn = document.createElement('button');
    const plusBtn = document.createElement('button');
    const cantDiv = document.createElement("div")
    cantDiv.classList.add('cant-div');
    cantidad.textContent = productoCarrito.cantidad;
    minusBtn.textContent = "-";
    plusBtn.textContent = "+";
    cantDiv.appendChild(minusBtn);
    cantDiv.appendChild(cantidad);
    cantDiv.appendChild(plusBtn);
    mainContainer.appendChild(cantDiv);



});