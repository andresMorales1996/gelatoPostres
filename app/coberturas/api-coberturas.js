document.addEventListener("DOMContentLoaded", function () {
  const coberturasTableBody = document.querySelector("#coberturasTabla tbody");

  function allcoberturas() {
    fetch("http://localhost:8080/coberturas/v1/allCoberturas")
      .then((response) => response.json())
      .then((data) => {
        coberturasTableBody.innerHTML = "";

        data.forEach((cobertura) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = cobertura.id_cobertura;
          row.appendChild(cellId);

          const cellNombre = document.createElement("td");
          cellNombre.textContent = cobertura.nombre_cobertura;
          row.appendChild(cellNombre);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = cobertura.precio_cobertura;
          row.appendChild(cellPrecio);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.classList.add("btn", "btn-actualizar");
          botonActualizar.innerHTML = '<i class="fas fa-edit"></i>';
          botonActualizar.addEventListener("click", function () {});

          const botonEliminar = document.createElement("button");
          botonEliminar.classList.add("btn", "btn-eliminar");
          botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
          botonEliminar.addEventListener("click", function () {});

          cellOpciones.appendChild(botonActualizar);
          cellOpciones.appendChild(botonEliminar);
          row.appendChild(cellOpciones);

          coberturasTableBody.appendChild(row);
        });
      })
      .catch((error) =>
        console.error("Error al obtener las coberturas:", error)
      );
  }

  allcoberturas();
});

document.getElementById("createCoberturaForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/coberturas/v1/createCobertura", {
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