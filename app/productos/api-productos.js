document.addEventListener("DOMContentLoaded", function () {
  const productosTableBody = document.querySelector("#productosTabla tbody");
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
          cellCategoria.textContent = producto.categoria.nombre_categoria;
          row.appendChild(cellCategoria);

          const cellRelleno = document.createElement("td");
          cellRelleno.textContent = producto.relleno.nombre_relleno;
          row.appendChild(cellRelleno);

          const cellPorcion = document.createElement("td");
          cellPorcion.textContent = producto.porcion.nombre_porcion;
          row.appendChild(cellPorcion);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.classList.add("btn", "btn-actualizar");
          botonActualizar.innerHTML = '<i class="fas fa-edit"></i>';
          botonActualizar.addEventListener("click", function() {
          });

          const botonEliminar = document.createElement("button");
          botonEliminar.classList.add("btn", "btn-eliminar");
          botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
          botonEliminar.addEventListener("click", function() {
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

  function actualizarProducto(id) {
    // Lógica para actualizar el rol con el id proporcionado
    console.log(`Actualizar producto con ID: ${id}`);
  }

  function eliminarProducto(id) {
    // Lógica para eliminar el producto con el id proporcionado
    console.log(`Eliminar producto con ID: ${id}`);
  }
});

fetch("http://localhost:8080/categorias/v1/allCategorias")
  .then((response) => response.json())
  .then((data) => {
    const categoriaSelect = document.getElementById("categoria");
    data.forEach((categoria) => {
      const option = document.createElement("option");
      option.value = categoria.id_categoria;
      option.textContent = categoria.nombre_categoria;
      categoriaSelect.appendChild(option);
    });
  });

fetch("http://localhost:8080/rellenos/v1/allRellenos")
  .then((response) => response.json())
  .then((data) => {
    const rellenoSelect = document.getElementById("relleno");
    data.forEach((relleno) => {
      const option = document.createElement("option");
      option.value = relleno.id_relleno;
      option.textContent = relleno.nombre_relleno;
      rellenoSelect.appendChild(option);
    });
  });

fetch("http://localhost:8080/porciones/v1/allPorciones")
  .then((response) => response.json())
  .then((data) => {
    const porcionSelect = document.getElementById("porcion");
    data.forEach((porcion) => {
      const option = document.createElement("option");
      option.value = porcion.id_porcion;
      option.textContent = porcion.nombre_porcion;
      porcionSelect.appendChild(option);
    });
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
