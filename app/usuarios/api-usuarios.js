document.addEventListener("DOMContentLoaded", function () {
  const toppingsTableBody = document.querySelector("#toppingsTabla tbody");

  function allToppings() {
    fetch("http://localhost:8080/toppings/v1/allToppings")
      .then((response) => response.json())
      .then((data) => {
        toppingsTableBody.innerHTML = "";

        data.forEach((topping) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = topping.id_topping;
          row.appendChild(cellId);

          const cellNombre = document.createElement("td");
          cellNombre.textContent = topping.nombre_topping;
          row.appendChild(cellNombre);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = topping.precio_topping;
          row.appendChild(cellPrecio);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.textContent = "Actualizar";
          botonActualizar.className = "boton-actualizar";
          botonActualizar.addEventListener("click", function () {
            // Lógica para actualizar el direccionEntregas
            updateDireccionEntrega(direccionEntregas.id_direccionEntrega);
          });
          cellOpciones.appendChild(botonActualizar);

          const botonEliminar = document.createElement("button");
          botonEliminar.textContent = "Eliminar";
          botonEliminar.className = "boton-eliminar";
          botonEliminar.addEventListener("click", function () {
            // Lógica para eliminar la direccion de entregas
            deleteDireccionEntrega(direccionEntregas.id_direccionEntrega);
          });
          cellOpciones.appendChild(botonEliminar);

          row.appendChild(cellOpciones);
          toppingsTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los toppings:", error));
  }

  allToppings();
});
