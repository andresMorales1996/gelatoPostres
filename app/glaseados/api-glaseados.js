document.addEventListener("DOMContentLoaded", function () {
  const glaseadosTableBody = document.querySelector("#glaseadosTabla tbody");

  function allGlaseados() {
    fetch("http://localhost:8080/glaseados/v1/allGlaseados")
      .then((response) => response.json())
      .then((data) => {
        glaseadosTableBody.innerHTML = "";

        data.forEach((glaseado) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = glaseado.id_glaseado;
          row.appendChild(cellId);

          const cellGlaseado = document.createElement("td");
          cellGlaseado.textContent = glaseado.nombre_glaseado;
          row.appendChild(cellGlaseado);

          const cellPrecio = document.createElement("td");
          cellPrecio.textContent = glaseado.precio_glaseado;
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

          glaseadosTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los glaseados:", error));
  }

  allGlaseados();
});

document.getElementById("createGlaseadosForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/Glaseados/v1/createGlaseados", {
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