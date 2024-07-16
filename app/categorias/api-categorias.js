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
                  categoriasTableBody.appendChild(row);
              });
          })
          .catch(error => console.error("Error al obtener las categorias:", error));
  }

  allCategorias();
});
