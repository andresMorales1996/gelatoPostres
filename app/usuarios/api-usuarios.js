document.addEventListener("DOMContentLoaded", function () {
  const usuariosTableBody = document.querySelector("#usuariosTabla tbody");

  function allUsuarios() {
    fetch("http://localhost:8080/usuarios/v1/allUsuarios")
      .then((response) => response.json())
      .then((data) => {
        usuariosTableBody.innerHTML = "";

        data.forEach((usuario) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = usuario.id_usuario;
          row.appendChild(cellId);

          const cellNombre = document.createElement("td");
          cellNombre.textContent = usuario.nombre_usuario;
          row.appendChild(cellNombre);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = usuario.precio_usuario;
          row.appendChild(cellPrecio);

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
          
          usuariosTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los usuarios:", error));
  }

  allUsuarios();
});
