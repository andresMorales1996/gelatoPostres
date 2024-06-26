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
            let contenedor;
            switch (producto.tipo){
                case "Tortas tradicionales":
                    contenedor = document.getElementById("tTradicionales");
                    break;
                case "Tortas frías":
                    contenedor = document.getElementById("tFrias");
                    break;
                case "Postres":
                    contenedor = document.getElementById("postres-container");
                    break;
            }

            if (contenedor) {
                let pPrecio = parseFloat(producto.opciones[0].precio).toFixed(3);
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');
                contenedor.appendChild(productoDiv);

                const imagenDiv = document.createElement('div');
                imagenDiv.classList.add('circulo');
                productoDiv.appendChild(imagenDiv);

                const imagen = document.createElement('img');
                imagen.src = producto.imagen; // Usar la ruta de la imagen del JSON
                imagenDiv.appendChild(imagen);

                const descripcion = document.createElement('div');
                descripcion.classList.add('descripcion-producto');
                descripcion.textContent = producto.nombre;
                productoDiv.appendChild(descripcion);

                const precio = document.createElement('div');
                precio.classList.add("precio-producto");
                precio.textContent = `Desde $${pPrecio}`;
                productoDiv.appendChild(precio);

                const moduloDiv = document.createElement('div');
                moduloDiv.classList.add('content-modulo');
                productoDiv.appendChild(moduloDiv);

                const botonModulo = document.createElement('button');
                botonModulo.classList.add('boton-modulo');
                botonModulo.textContent = "Ver más";
                moduloDiv.appendChild(botonModulo);
            }
        });
    } catch (error) {
        console.error('Error al mostrar los productos:', error);
    }
}

mostrarProductos();
