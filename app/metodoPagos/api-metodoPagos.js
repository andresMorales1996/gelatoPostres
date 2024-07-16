document.addEventListener("DOMContentLoaded", function () {
  const metodosPagosTableBody = document.querySelector("#metodoPagosTabla tbody");

  function allmetodosPago() {
    fetch("http://localhost:8080/metodoPagos/v1/allMetodoPagos")
      .then((response) => response.json())
      .then((data) => {
        metodosPagosTableBody.innerHTML = "";

        data.forEach((metodoPagos) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = metodoPagos.id_metodo_pago;
          row.appendChild(cellId);

          const cellmetodosPago = document.createElement("td");
          cellmetodosPago.textContent = metodoPagos.nombre_metodo_pago;
          row.appendChild(cellmetodosPago);

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

          metodosPagosTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los metodosPagos:", error));
  }

  allmetodosPago();
});

document.getElementById("createMetodoPagosForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/metodoPagos/v1/createMetodoPagos", {
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