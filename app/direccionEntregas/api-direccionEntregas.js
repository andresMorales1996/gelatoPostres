document.addEventListener("DOMContentLoaded", function() {
    const direccionEntregasTableBody = document.querySelector("#direccionEntregasTabla tbody");
  
    function getAllDireccionEntregas() {
      fetch("http://localhost:8080/direccionEntregas/v1/allDireccionEntregas")
        .then(response => response.json())
        .then(data => {
          direccionEntregasTableBody.innerHTML = "";
  
          data.forEach(direccionEntregas => {
            const row = document.createElement("tr");
  
            const cellId = document.createElement("td");
            cellId.textContent = direccionEntregas.id_direccion_entrega;
            row.appendChild(cellId);
  
            const celldireccionEntregas = document.createElement("td");
            celldireccionEntregas.textContent = direccionEntregas.direccion_entrega;
            row.appendChild(celldireccionEntregas);

            const cellIdUsuario = document.createElement("td");
            cellIdUsuario.textContent = direccionEntregas.ID_usuario;
            row.appendChild(cellIdUsuario);
  
            const cellOpciones = document.createElement("td");
  
            const botonActualizar = document.createElement("button");
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "boton-actualizar";
            botonActualizar.addEventListener("click", function() {
              // Lógica para actualizar el direccionEntregas
              updateDireccionEntrega(direccionEntregas.id_direccionEntrega);
            });
            cellOpciones.appendChild(botonActualizar);
  
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.className = "boton-eliminar";
            botonEliminar.addEventListener("click", function() {
              // Lógica para eliminar la direccion de entregas
              deleteDireccionEntrega(direccionEntregas.id_direccionEntrega);
            });
            cellOpciones.appendChild(botonEliminar);
  
            row.appendChild(cellOpciones);
            direccionEntregasTableBody.appendChild(row);
          });
        })
        .catch(error => console.error("Error al obtener la direccion de entrega:", error));
    }
  
   getAllDireccionEntregas();
  
    function updateDireccionEntrega(id) {
      // Lógica para actualizar el direccionEntregas con el id prodireccionEntregasado
      console.log(`Actualizar direccion de entrega con ID: ${id}`);
    }
  
    function deleteDireccionEntrega(id) {
      // Lógica para eliminar el direccionEntregas con el id prodireccionEntregasado
      console.log(`Eliminar direccion de entregas con ID: ${id}`);
    }
  });
  