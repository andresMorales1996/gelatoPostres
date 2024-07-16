document.addEventListener("DOMContentLoaded", function () {
  const categoriasTableBody = document.querySelector("#categoriasTabla tbody");

  // MÉTODO LISTAR CATEGORÍAS
  function getAllCategorias() {
    fetch("http://localhost:8080/categorias/v1/allCategorias")
      .then((response) => response.json())
      .then((data) => {
        categoriasTableBody.innerHTML = "";

        data.forEach((categoria) => {
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
          botonActualizar.addEventListener("click", function () {
            updateCategoria(
              categoria.id_categoria,
              categoria.nombre_categoria
            );
          });

          const botonEliminar = document.createElement("button");
          botonEliminar.classList.add("btn", "btn-eliminar");
          botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
          botonEliminar.addEventListener("click", function () {
            deleteCategoria(categoria.id_categoria);
          });

          cellOpciones.appendChild(botonActualizar);
          cellOpciones.appendChild(botonEliminar);
          row.appendChild(cellOpciones);
          categoriasTableBody.appendChild(row);
        });
      })
      .catch((error) =>
        console.error("Error al obtener las categorías:", error)
      );
  }
  getAllCategorias();

  // MÉTODO AGREGAR CATEGORÍA
  document.getElementById("createCategoriaForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      fetch("http://localhost:8080/categorias/v1/createCategoria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo crear la categoría.");
          }
          return response.json();
        })
        .then((data) => {
          window.location.href = "./lista-categorias.html";
        })
        .catch((error) => {
          alert(
            "No se pudo crear la categoría. Por favor, inténtelo nuevamente."
          );
        });
  });

  // MÉTODO ELIMINAR CATEGORÍA
  function deleteCategoria(idCategoria) {
    fetch(
      `http://localhost:8080/categorias/v1/deleteCategoria/${idCategoria}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo eliminar la categoría.");
        }
        getAllCategorias();
      })
      .catch((error) =>
        console.error("Error al eliminar la categoría:", error)
      );
  }

  // MÉTODO ACTUALIZAR CATEGORÍA
  function updateCategoria(idCategoria, nombreCategoria) {
    window.location.href = `./editar-categorias.html?id=${idCategoria}&nombre=${encodeURIComponent(
      nombreCategoria
    )}`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  updateCategoria();

  function updateCategoria() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCategoria = urlParams.get("id");
    const nombreCategoria = urlParams.get("nombre");

    document.getElementById("nombre_categoria").value = nombreCategoria;

    document
      .getElementById("botonActualizar")
      .addEventListener("click", function () {
        const nuevoNombre = document.getElementById("nombre_categoria").value;

        fetch(
          `http://localhost:8080/categorias/v1/updateCategoria/${idCategoria}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre_categoria: nuevoNombre }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("No se pudo actualizar la categoría.");
            }
            window.location.href = "./lista-categorias.html";
          })
          .catch((error) =>
            console.error("Error al actualizar la categoría:", error)
          );
      });
  }
});
