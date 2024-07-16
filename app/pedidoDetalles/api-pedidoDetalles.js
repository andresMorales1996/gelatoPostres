document.addEventListener("DOMContentLoaded", function () {
  const pedidoDetallesTableBody = document.querySelector("#pedidoDetallesTabla tbody");

  function allPedidoDetalles() {
    fetch("http://localhost:8080/pedidoDetalles/v1/allPedidoDetalles")
      .then((response) => response.json())
      .then((data) => {
        pedidoDetallesTableBody.innerHTML = "";

        data.forEach((pedidoDetalle) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = pedidoDetalle.id_pedidoDetalle;
          row.appendChild(cellId);

          const cellPedidoDetalle = document.createElement("td");
          cellPedidoDetalle.textContent = pedidoDetalle.nombre_pedidoDetalle;
          row.appendChild(cellPedidoDetalle);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = pedidoDetalle.precio_pedidoDetalle;
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

          pedidoDetallesTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los pedidoDetalles:", error));
  }

  allPedidoDetalles();
});

document.getElementById("createPedidoDetallesForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/pedidoDetalles/v1/createPedidoDetalles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});