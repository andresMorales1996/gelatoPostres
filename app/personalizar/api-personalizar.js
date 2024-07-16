document.addEventListener("DOMContentLoaded", function () {
  const personalizarTableBody = document.querySelector("#personalizarTabla tbody");

  function allPersonalizar() {
    fetch("http://localhost:8080/personalizar/v1/allPersonalizar")
      .then((response) => response.json())
      .then((data) => {
        personalizarTableBody.innerHTML = "";

        data.forEach((personaliza) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = personaliza.id_personaliza;
          row.appendChild(cellId);

          const cellPersonaliza = document.createElement("td");
          cellPersonaliza.textContent = personaliza.nombre_personaliza;
          row.appendChild(cellPersonaliza);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = personaliza.precio_personaliza;
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

          personalizarTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los personalizar:", error));
  }

  allPersonalizar();
});

document.getElementById("createPersonalizarForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/Personalizar/v1/createPersonaliza", {
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