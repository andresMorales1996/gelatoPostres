document.addEventListener("DOMContentLoaded", function() {
  const rellenosTableBody = document.querySelector("#rellenosTabla tbody");

  function obtenerRellenos() {
    fetch("http://localhost:8080/relleno")
      .then(response => response.json())
      .then(data => {
        rellenosTableBody.innerHTML = "";

        data.forEach(relleno => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = relleno.id_relleno;
          row.appendChild(cellId);

          const cellRelleno = document.createElement("td");
          cellRelleno.textContent = relleno.relleno;
          row.appendChild(cellRelleno);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.textContent = "Actualizar";
          botonActualizar.className = "boton-actualizar";
          botonActualizar.addEventListener("click", function() {
            // Lógica para actualizar el relleno
            actualizarRelleno(relleno.id_relleno);
          });
          cellOpciones.appendChild(botonActualizar);

          const botonEliminar = document.createElement("button");
          botonEliminar.textContent = "Eliminar";
          botonEliminar.className = "boton-eliminar";
          botonEliminar.addEventListener("click", function() {
            // Lógica para eliminar el relleno
            eliminarRelleno(relleno.id_relleno);
          });
          cellOpciones.appendChild(botonEliminar);

          row.appendChild(cellOpciones);
          rellenosTableBody.appendChild(row);
        });
      })
      .catch(error => console.error("Error al obtener los rellenos:", error));
  }

  obtenerRellenos();

  function actualizarRelleno(id) {
    // Lógica para actualizar el relleno con el id proporcionado
    console.log(`Actualizar relleno con ID: ${id}`);
  }

  function eliminarRelleno(id) {
    // Lógica para eliminar el relleno con el id proporcionado
    console.log(`Eliminar relleno con ID: ${id}`);
  }
});
