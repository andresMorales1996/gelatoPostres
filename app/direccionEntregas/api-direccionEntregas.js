document.addEventListener("DOMContentLoaded", function() {
    const direccionEntregasTableBody = document.querySelector("#direccionEntregasTabla tbody");
  
    function allDireccionEntregas() {
      fetch("http://192.168.0.17:8080/direccionEntregas/v1/allDireccionEntregas")
        .then(response => response.json())
        .then(data => {
          direccionEntregasTableBody.innerHTML = "";
  
          data.forEach(direccionEntregas => {
            const row = document.createElement("tr");
  
            const cellId = document.createElement("td");
            cellId.textContent = direccionEntregas.id_direccion_entrega;
            row.appendChild(cellId);
  
            const celldireccionEntregas = document.createElement("td");
            celldireccionEntregas.textContent = direccionEntregas.direccion_entrega;
            row.appendChild(celldireccionEntregas);

            const cellIdUsuario = document.createElement("td");
            cellIdUsuario.textContent = direccionEntregas.ID_usuario;
            row.appendChild(cellIdUsuario);
  
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
  
            direccionEntregasTableBody.appendChild(row);
          });
        })
        .catch(error => console.error("Error al obtener la direccion de entrega:", error));
    }
  
    allDireccionEntregas();
  
    function updateDireccionEntrega(id) {
      // Lógica para actualizar el direccionEntregas con el id prodireccionEntregasado
      console.log(`Actualizar direccion de entrega con ID: ${id}`);
    }
  
    function deleteDireccionEntrega(id) {
      // Lógica para eliminar el direccionEntregas con el id prodireccionEntregasado
      console.log(`Eliminar direccion de entregas con ID: ${id}`);
    }
  });
  
  document.getElementById("createDireccionEntregasForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    fetch("http://localhost:8080/direccionEntregas/v1/createDireccionEntrega", {
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