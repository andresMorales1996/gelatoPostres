document.addEventListener("DOMContentLoaded", function() {
    const porcionesTableBody = document.querySelector("#porcionesTabla tbody");
  
    function getAllPorciones() {
      fetch("http://localhost:8080/porciones/v1/allPorciones")
        .then(response => response.json())
        .then(data => {
          porcionesTableBody.innerHTML = "";
  
          data.forEach(porcion => {
            const row = document.createElement("tr");
  
            const cellId = document.createElement("td");
            cellId.textContent = porcion.id_porcion;
            row.appendChild(cellId);
  
            const cellPorcion = document.createElement("td");
            cellPorcion.textContent = porcion.nombre_porcion;
            row.appendChild(cellPorcion);

            const cellPrecio = document.createElement("td");
            cellPrecio.textContent = porcion.precio_porcion;
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

            porcionesTableBody.appendChild(row);
          });
        })
        .catch(error => console.error("Error al treaer todas las porciones:", error));
    }
    getAllPorciones();
});

document.getElementById("createPorcionesForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/Porciones/v1/createporcione", {
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