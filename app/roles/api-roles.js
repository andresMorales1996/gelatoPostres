document.addEventListener("DOMContentLoaded", function() {
  const rolesTableBody = document.querySelector("#rolesTabla tbody");

  function obtenerRoles() {
    fetch("http://localhost:8080/roles/v1/allRoles")
      .then(response => response.json())
      .then(data => {
        rolesTableBody.innerHTML = "";

        data.forEach(rol => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = rol.id_rol;
          row.appendChild(cellId);

          const cellRol = document.createElement("td");
          cellRol.textContent = rol.nombre_rol;
          row.appendChild(cellRol);

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
