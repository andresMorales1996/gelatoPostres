const productos = [];

async function obtenerProductos() {
    try {
        const response = await fetch('../services/data.json');
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        productos.push(...data);
        agregarEventosBotones();
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

function agregarEventosBotones() {
    const botones = document.querySelectorAll('.boton-modulo');

    if (botones.length > 0) {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const productoIndex = Array.from(botones).indexOf(boton);
                productoModal(productos[productoIndex]);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    obtenerProductos();
});

function productoModal(producto) {
    const informacion_modal = document.getElementById("informacion_modal");
    const content_modal = document.getElementById("content_modal");
    const modal = document.getElementById("modal");
    modal.addEventListener("click", cerrarModal)

    content_modal.addEventListener("click", (event) => {
        event.stopPropagation(); // Detiene la propagación del evento
    })

    // Resetear toda la estructura del modal
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    informacion_modal.innerHTML = "";

    const div_image = document.createElement("div");
    const image = document.createElement("img");
    const div_info = document.createElement("div");
    const titulo = document.createElement("h2");
    const descripcion = document.createElement("p");
    const cerrar = document.createElement("p");
    cerrar.addEventListener("click", cerrarModal)
    cerrar.id = "icon-cerrar"
    const formulario = crearFormulario(producto)

    titulo.textContent = producto.nombre;
    descripcion.textContent = producto.descripcion;
    descripcion.classList.add("descripcion-modal")
    cerrar.textContent = "X"
    image.src = producto.imagen || "http://127.0.0.1:5500/assets/img/img-modal.jpg" // cambiar esta parte !!IMPORTANT
    image.title = producto.nombre
    image.classList.add("image_modal")
    div_info.classList.add("info_modal")

    cerrar.classList.add("cerrar-modal")

    div_image.appendChild(image)
    div_info.appendChild(titulo)
    div_info.appendChild(descripcion)
    div_info.appendChild(cerrar)
    div_info.appendChild(formulario)

    informacion_modal.appendChild(div_image)
    informacion_modal.appendChild(div_info)

    console.log("productoModal ", producto)
}

function crearFormulario(producto) {
    const formulario = document.createElement("form");

    if(producto.relleno){
        producto.relleno.forEach( relleno => {
            const div = document.createElement("div")
            const input = document.createElement("input")
            const label = document.createElement("label")
            input.type = "radio"
            input.value = relleno
            input.name = producto.id
            label.textContent = relleno
            div.classList.add("opciones-relleno")
            div.appendChild(input)
            div.appendChild(label)
            formulario.appendChild(div)
        })
    }

    const precios = document.createElement("select");

    precios.addEventListener("change", () => {
        mostrarPrecio();
    })

    precios.id = "precios-productos"

    const option = document.createElement('option');
    option.value = 0;
    option.textContent = "Seleccione una opción";
    precios.appendChild(option);

    producto.opciones.forEach( opcion => {
        const option = document.createElement('option');
        option.value = opcion.precio + "x" + opcion.porcion + " porciones";
        option.textContent = opcion.precio + " x " + opcion.porcion + " porciones";
        precios.appendChild(option);
    })

    formulario.appendChild(precios)
    formulario.append(footerFormulario(producto))

    return formulario
}

function footerFormulario(producto){

    const div_container = document.createElement("div")
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.id = "mostrar-precio"
    const boton = document.createElement("button")
    boton.textContent = "Agregar"

   const opcionRestar = document.createElement("button")
   const opcionSumar =  document.createElement("button")
   const p_cantidad = document.createElement("p")

   opcionRestar.id = "restar-cantidad"
   opcionSumar.id = "sumar-cantidad"
   p_cantidad.id = "cant-producto"
   div_container.classList.add("footer-modal")

   opcionRestar.textContent = "-"
   opcionSumar.textContent = "+"
   p_cantidad.textContent = 1

   div.appendChild(opcionRestar)
   div.appendChild(p_cantidad)
   div.appendChild(opcionSumar)

   opcionRestar.addEventListener("click", (event) => {
        event.preventDefault();
        restarCantidad()
   })

   opcionSumar.addEventListener("click", (event) => {
        event.preventDefault();
        sumarCantidad()
    })

    div_container.appendChild(div)
    div_container.appendChild(boton)
    div_container.appendChild(p)

    boton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("producto.id " , producto.id)
        AgregarProductoCarrito(producto.id);
    })

    return div_container

}

function restarCantidad(){
    const p_cantidad = document.getElementById("cant-producto")

    if(parseInt(p_cantidad.textContent) === 1){
        p_cantidad.textContent = 1
        return
    }
    p_cantidad.textContent = parseInt(p_cantidad.textContent) - 1
    mostrarPrecioAPagar()
}

function mostrarPrecioAPagar(){
    const p_cantidad = document.getElementById("cant-producto")
    const mostrarPrecio = document.getElementById("mostrar-precio")
    const selecionarPrecio = document.getElementById("precios-productos").value.split("x")[0]
    mostrarPrecio.textContent = parseInt(selecionarPrecio) * parseInt(p_cantidad.textContent)
}

function sumarCantidad(){
    console.log("sumar cantidad " )
    const p_cantidad = document.getElementById("cant-producto")
    p_cantidad.textContent = parseInt(p_cantidad.textContent) + 1
    mostrarPrecioAPagar()
}

function mostrarPrecio(){
    const informacionProducto = document.getElementById("precios-productos").value.split("x");
    const precio = document.getElementById("mostrar-precio")
    precio.textContent = informacionProducto[0]
    console.log("Se ha seleccionado: " + informacionProducto);
    mostrarPrecioAPagar()
}

function AgregarProductoCarrito(id) {
    console.log("di click")
    const opcionRelleno = document.querySelector(`input[name="${id}"]:checked`)

    if(opcionRelleno){
        let relleno = opcionRelleno.value
        console.log("-----------" , relleno)
    }

    const informacionProducto = document.getElementById("precios-productos").value.split("x");
    const precio = informacionProducto[0];
    const porcion = informacionProducto[1];
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("visible");
    modal.classList.add("hidden");
}