document.addEventListener("DOMContentLoaded", function () {
const productosTableBody = document.querySelector("#productosTabla tbody");
  function obtenerProductos() {
   fetch("http://localhost:8080/productos/v1/allProductos")
      .then(response => response.json())
      .then(data => {
        productosTableBody.innerHTML = "";
      data.forEach(producto => {
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
      cellImagen.textContent = producto.imagen_producto;
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
      botonActualizar.textContent = "Actualizar";
      botonActualizar.className = "boton-actualizar";
      botonActualizar.addEventListener("click", function () {
        // Lógica para actualizar el producto
        actualizarProducto(producto.id_producto);
      });
      cellOpciones.appendChild(botonActualizar);
  
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.className = "boton-eliminar";
      botonEliminar.addEventListener("click", function () {
        // Lógica para eliminar el rol
        eliminarProducto(producto.id_producto);
      });
      cellOpciones.appendChild(botonEliminar);
  
      row.appendChild(cellOpciones);
      productosTableBody.appendChild(row);
    });
  })
  .catch(error => console.error("Error al obtener los productos:", error));
}

obtenerProductos();

function actualizarProducto(id) {
    // Lógica para actualizar el rol con el id proporcionado
    console.log(`Actualizar producto con ID: ${id}`);
  }

  function eliminarProducto(id) {
    // Lógica para eliminar el producto con el id proporcionado
    console.log(`Eliminar producto con ID: ${id}`);
  }
});