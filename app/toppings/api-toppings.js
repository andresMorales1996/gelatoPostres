document.addEventListener("DOMContentLoaded", function() {
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

                  toppingsTableBody.appendChild(row);
              });
          })
          .catch(error => console.error("Error al obtener los toppings:", error));
  }

  allToppings();
});
