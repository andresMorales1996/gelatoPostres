async function obtenerDatos() {
    try {
        const response = await fetch('../services/data.json');
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

async function mostrarProductos() {
    try {
        const productos = await obtenerDatos();
        
        productos.forEach(producto => {
            switch (producto.tipo){
                case "Tortas tradicionales":
                    const tTradicionales = document.getElementById("tTradicionales");

                    const tTradicionalesDiv = document.createElement('div');
                    tTradicionalesDiv.classList.add('producto');
                    tTradicionales.appendChild(tTradicionalesDiv);

                    let imagenDiv = document.createElement('div');
                    imagenDiv.classList.add('circulo')
                    tTradicionalesDiv.appendChild(imagenDiv);

                    const imagen = document.createElement('img');
                    imagen.src = "../assets/img/torta1-no-fondo.png";
                    tTradicionalesDiv.appendChild(imagen);

                    const descripcion = document.createElement('div');
                    descripcion.classList.add('descripcion-producto');
                    descripcion.textContent = producto.nombre;
                    tTradicionalesDiv.appendChild(descripcion);

                    const precio = document.createElement('div');
                    precio.classList.add("precio-producto");
                    tTradicionalesDiv.appendChild(precio);

                    const moduloDiv = document.createElement('div');
                    moduloDiv.classList.add('content-modulo');
                    tTradicionalesDiv.appendChild(moduloDiv);

                    const botonModulo = document.createElement('button');
                    botonModulo.classList.add('boton-modulo');
                    botonModulo.textContent = "+";
                    moduloDiv.appendChild(botonModulo);
                    break;

                case "Tortas frias":
                    const tFrias = document.getElementById("tFrias");

                    const tFriasDiv = document.createElement('div');
                    tFriasDiv.classList.add('producto');
                    tFrias.appendChild(tFriasDiv);

                    const imagenTFriasDiv = document.createElement('div');
                    imagenTFriasDiv.classList.add('circulo')
                    tFriasDiv.appendChild(imagenTFriasDiv);

                    const imagenTFrias = document.createElement('img');
                    imagenTFrias.src = "../assets/img/torta2-no-fondo.png";
                    tFriasDiv.appendChild(imagenTFrias);

                    const descripcionTFrias = document.createElement('div');
                    descripcionTFrias.classList.add('descripcion-producto');
                    descripcionTFrias.textContent = producto.nombre;
                    tFriasDiv.appendChild(descripcionTFrias);

                    const precioTFrias = document.createElement('div');
                    precioTFrias.classList.add("precio-producto");
                    tFriasDiv.appendChild(precioTFrias);

                    const moduloDivTFrias = document.createElement('div');
                    moduloDivTFrias.classList.add('content-modulo');
                    tFriasDiv.appendChild(moduloDivTFrias);

                    const botonModuloTFrias = document.createElement('button');
                    botonModuloTFrias.classList.add('boton-modulo');
                    botonModuloTFrias.textContent = "+";
                    moduloDivTFrias.appendChild(botonModuloTFrias);

                    break;


                case "Postres":
                    const postresContainer = document.getElementById("postres-container");

                    const postresDiv = document.createElement('div');
                    postresDiv.classList.add('producto');
                    postresContainer.appendChild(postresDiv);

                    const imagenPostresDiv = document.createElement('div');
                    imagenPostresDiv.classList.add('circulo')
                    postresDiv.appendChild(imagenPostresDiv);

                    const imagenPostres = document.createElement('img');
                    imagenPostres.src = "../assets/img/torta3-no-fondo.png";
                    postresDiv.appendChild(imagenPostres);

                    const descripcionPostres = document.createElement('div');
                    descripcionPostres.classList.add('descripcion-producto');
                    descripcionPostres.textContent = producto.nombre;
                    postresDiv.appendChild(descripcionPostres);

                    const precioPostres = document.createElement('div');
                    precioPostres.classList.add("precio-producto");
                    postresDiv.appendChild(precioPostres);

                    const moduloDivPostres = document.createElement('div');
                    moduloDivPostres.classList.add('content-modulo');
                    postresDiv.appendChild(moduloDivPostres);

                    const botonModuloPostres = document.createElement('button');
                    botonModuloPostres.classList.add('boton-modulo');
                    botonModuloPostres.textContent = "+";
                    postresDiv.appendChild(botonModuloPostres);

                    break;
            }
        });
    } catch (error) {
        console.error('Error al mostrar los productos:', error);
    }
}

mostrarProductos();

