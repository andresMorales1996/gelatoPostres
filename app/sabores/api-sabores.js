document.addEventListener("DOMContentLoaded", function () {
  const saboresTableBody = document.querySelector("#saboresTabla tbody");

  function allSabores() {
    fetch("http://localhost:8080/sabores/v1/allSabores")
      .then((response) => response.json())
      .then((data) => {
        saboresTableBody.innerHTML = "";

        data.forEach((sabor) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = sabor.id_sabor;
          row.appendChild(cellId);

          const cellNombre = document.createElement("td");
          cellNombre.textContent = sabor.nombre_sabor;
          row.appendChild(cellNombre);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = sabor.precio_sabor;
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

          saboresTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los sabores:", error));
  }

  allSabores();
});
