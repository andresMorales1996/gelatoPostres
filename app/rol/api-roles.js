document.addEventListener("DOMContentLoaded", function() {
  const rolesTableBody = document.querySelector("#rolesTabla tbody");

  function obtenerRoles() {
    fetch("http://localhost:8080/api/rol")
      .then(response => response.json())
      .then(data => {
        rolesTableBody.innerHTML = "";

        data.forEach(rol => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = rol.id_rol;
          row.appendChild(cellId);

          const cellRol = document.createElement("td");
          cellRol.textContent = rol.rol;
          row.appendChild(cellRol);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.textContent = "Actualizar";
          botonActualizar.className = "boton-actualizar";
          botonActualizar.addEventListener("click", function() {
            // Lógica para actualizar el rol
            actualizarRol(rol.id_rol);
          });
          cellOpciones.appendChild(botonActualizar);

          const botonEliminar = document.createElement("button");
          botonEliminar.textContent = "Eliminar";
          botonEliminar.className = "boton-eliminar";
          botonEliminar.addEventListener("click", function() {
            // Lógica para eliminar el rol
            eliminarRol(rol.id_rol);
          });
          cellOpciones.appendChild(botonEliminar);

          row.appendChild(cellOpciones);
          rolesTableBody.appendChild(row);
        });
      })
      .catch(error => console.error("Error al obtener los roles:", error));
  }

  obtenerRoles();

  function actualizarRol(id) {
    // Lógica para actualizar el rol con el id proporcionado
    console.log(`Actualizar rol con ID: ${id}`);
  }

  function eliminarRol(id) {
    // Lógica para eliminar el rol con el id proporcionado
    console.log(`Eliminar rol con ID: ${id}`);
  }
});
