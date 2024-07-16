document.addEventListener("DOMContentLoaded", function () {
  const rellenosTableBody = document.querySelector("#rellenosTabla tbody");

  function allRellenos() {
    fetch("http://localhost:8080/rellenos/v1/allRellenos")
      .then((response) => response.json())
      .then((data) => {
        rellenosTableBody.innerHTML = "";

        data.forEach((relleno) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = relleno.id_relleno;
          row.appendChild(cellId);

          const cellRelleno = document.createElement("td");
          cellRelleno.textContent = relleno.nombre_relleno;
          row.appendChild(cellRelleno);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = relleno.precio_relleno;
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

          rellenosTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los rellenos:", error));
  }

  allRellenos();
});

document.getElementById("createRellenosForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/Rellenos/v1/createrelleno", {
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