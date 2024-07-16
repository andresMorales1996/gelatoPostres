document.addEventListener("DOMContentLoaded", function () {
  const pedidosTableBody = document.querySelector("#pedidosTabla tbody");

  function allPedidos() {
    fetch("http://localhost:8080/pedidos/v1/allPedidos")
      .then((response) => response.json())
      .then((data) => {
        pedidosTableBody.innerHTML = "";

        data.forEach((pedido) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = pedido.id_pedido;
          row.appendChild(cellId);

          const cellPedido = document.createElement("td");
          cellPedido.textContent = pedido.nombre_pedido;
          row.appendChild(cellPedido);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = pedido.precio_pedido;
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

          pedidosTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los pedidos:", error));
  }

  allPedidos();
});

document.getElementById("createPedidosForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/Pedidos/v1/createPedido", {
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