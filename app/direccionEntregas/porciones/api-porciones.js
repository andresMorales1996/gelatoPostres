document.addEventListener("DOMContentLoaded", function() {
    const porcionesTableBody = document.querySelector("#porcionesTabla tbody");
  
    function obtenerPorciones() {
      fetch("http://localhost:8080/allPorciones")
        .then(response => response.json())
        .then(data => {
          porcionesTableBody.innerHTML = "";
  
          data.forEach(porcion => {
            const row = document.createElement("tr");
  
            const cellId = document.createElement("td");
            cellId.textContent = porcion.id_porcion;
            row.appendChild(cellId);
  
            const cellporcion = document.createElement("td");
            cellporcion.textContent = porcion.porcion;
            row.appendChild(cellporcion);
  
            const cellOpciones = document.createElement("td");
  
            const botonActualizar = document.createElement("button");
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "boton-actualizar";
            botonActualizar.addEventListener("click", function() {
              // Lógica para actualizar el porcion
              actualizarporcion(porcion.id_porcion);
            });
            cellOpciones.appendChild(botonActualizar);
  
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.className = "boton-eliminar";
            botonEliminar.addEventListener("click", function() {
              // Lógica para eliminar el porcion
              eliminarporcion(porcion.id_porcion);
            });
            cellOpciones.appendChild(botonEliminar);
  
            row.appendChild(cellOpciones);
            porcionesTableBody.appendChild(row);
          });
        })
        .catch(error => console.error("Error al obtener los porciones:", error));
    }
  
    obtenerporciones();
  
    function actualizarporcion(id) {
      // Lógica para actualizar el porcion con el id proporcionado
      console.log(`Actualizar porcion con ID: ${id}`);
    }
  
    function eliminarporcion(id) {
      // Lógica para eliminar el porcion con el id proporcionado
      console.log(`Eliminar porcion con ID: ${id}`);
    }
  });
  