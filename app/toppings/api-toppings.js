document.addEventListener("DOMContentLoaded", function () {
  const toppingsTableBody = document.querySelector("#toppingsTabla tbody");

  function allToppings() {
    fetch("http://localhost:8080/toppings/v1/allToppings")
      .then(response => response.json())
      .then(data => {
        toppingsTableBody.innerHTML = "";

        data.forEach(topping => {
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

          toppingsTableBody.appendChild(row);
        });
      })
      .catch(error => console.error("Error al obtener los toppings:", error));
  }

  allToppings();
});

document.getElementById("createToppingsForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  fetch("http://localhost:8080/Toppings/v1/createTopping", {
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