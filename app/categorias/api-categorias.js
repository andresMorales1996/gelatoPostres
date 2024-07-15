document.addEventListener("DOMContentLoaded", function() {
  const categoriasTableBody = document.querySelector("#categoriasTabla tbody");


  function allCategorias() {
      fetch("http://localhost:8080/categorias/v1/allCategorias")
          .then(response => response.json())
          .then(data => {
            categoriasTableBody.innerHTML = "";

              data.forEach(categoria => {
                  const row = document.createElement("tr");

                  const cellId = document.createElement("td");
                  cellId.textContent = categoria.id_categoria;
                  row.appendChild(cellId);

                  const cellNombre = document.createElement("td");
                  cellNombre.textContent = categoria.nombre_categoria;
                  row.appendChild(cellNombre);

                  categoriasTableBody.appendChild(row);
              });
          })
          .catch(error => console.error("Error al obtener las categorias:", error));
  }

  allCategorias();
});
