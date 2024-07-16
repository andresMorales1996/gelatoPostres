document.addEventListener("DOMContentLoaded", function () {
  const productosTableBody = document.querySelector("#productosTabla tbody");
  const categoriaSelect = document.getElementById("categoria");
  const rellenoSelect = document.getElementById("relleno");
  const porcionSelect = document.getElementById("porcion");
  const createProductoForm = document.getElementById("createProductoForm");

  function getAllProductos() {
    fetch("http://localhost:8080/productos/v1/allProductos")
      .then((response) => response.json())
      .then((data) => {
        productosTableBody.innerHTML = "";
        data.forEach((producto) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = producto.id_producto;
          row.appendChild(cellId);

          const cellNombre = document.createElement("td");
          cellNombre.textContent = producto.nombre_producto;
          row.appendChild(cellNombre);

          const cellDescripcion = document.createElement("td");
          cellDescripcion.textContent = producto.descripcion_producto;
          row.appendChild(cellDescripcion);

          const cellEstado = document.createElement("td");
          cellEstado.textContent = producto.estado_producto;
          row.appendChild(cellEstado);

          const cellImagen = document.createElement("td");
          const imagen = new Image();
          imagen.src = `data:image/jpeg;base64,${producto.imagen_producto}`;
          cellImagen.appendChild(imagen);
          row.appendChild(cellImagen);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = producto.precio_producto;
          row.appendChild(cellPrecio);

          const cellCategoria = document.createElement("td");
          cellCategoria.textContent = producto.categoria ? producto.categoria.nombre_categoria : 'N/A';
          row.appendChild(cellCategoria);

          const cellRelleno = document.createElement("td");
          cellRelleno.textContent = producto.relleno ? producto.relleno.nombre_relleno : 'N/A';
          row.appendChild(cellRelleno);

          const cellPorcion = document.createElement("td");
          cellPorcion.textContent = producto.porcion ? producto.porcion.nombre_porcion : 'N/A';
          row.appendChild(cellPorcion);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.classList.add("btn", "btn-actualizar");
          botonActualizar.innerHTML = '<i class="fas fa-edit"></i>';
          botonActualizar.addEventListener("click", function() {
            actualizarProducto(producto.id_producto);
          });

          const botonEliminar = document.createElement("button");
          botonEliminar.classList.add("btn", "btn-eliminar");
          botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
          botonEliminar.addEventListener("click", function() {
            eliminarProducto(producto.id_producto);
          });

          cellOpciones.appendChild(botonActualizar);
          cellOpciones.appendChild(botonEliminar);
          row.appendChild(cellOpciones);
          
          productosTableBody.appendChild(row);
        });
      })
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }

  getAllProductos();

  // Función para actualizar producto (debes implementar lógica)
  function actualizarProducto(id) {
    console.log(`Actualizar producto con ID: ${id}`);
  }

  // Función para eliminar producto (debes implementar lógica)
  function eliminarProducto(id) {
    console.log(`Eliminar producto con ID: ${id}`);
  }

  // Cargar categorías desde el servidor
  fetch("http://localhost:8080/categorias/v1/allCategorias")
    .then((response) => response.json())
    .then((data) => {
      if (categoriaSelect) {
        categoriaSelect.innerHTML = "";
        data.forEach((categoria) => {
          const option = document.createElement("option");
          option.value = categoria.id_categoria;
          option.textContent = categoria.nombre_categoria;
          categoriaSelect.appendChild(option);
        });
      }
    });

  // Cargar rellenos desde el servidor
  fetch("http://localhost:8080/rellenos/v1/allRellenos")
    .then((response) => response.json())
    .then((data) => {
      if (rellenoSelect) {
        rellenoSelect.innerHTML = "";
        data.forEach((relleno) => {
          const option = document.createElement("option");
          option.value = relleno.id_relleno;
          option.textContent = relleno.nombre_relleno;
          rellenoSelect.appendChild(option);
        });
      }
    });

  // Cargar porciones desde el servidor
  fetch("http://localhost:8080/porciones/v1/allPorciones")
    .then((response) => response.json())
    .then((data) => {
      if (porcionSelect) {
        porcionSelect.innerHTML = "";
        data.forEach((porcion) => {
          const option = document.createElement("option");
          option.value = porcion.id_porcion;
          option.textContent = porcion.nombre_porcion;
          porcionSelect.appendChild(option);
        });
      }
    });

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("createProductoForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        console.log(formData); 

        fetch("http://localhost:8080/productos/v1/createProducto", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Producto creado exitosamente');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al crear el producto: ' + error.message);
        });
    });
});
