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

          rellenosTableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error al obtener los rellenos:", error));
  }

  allRellenos();
});
