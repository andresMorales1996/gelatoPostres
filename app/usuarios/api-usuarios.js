document.addEventListener("DOMContentLoaded", function () {
  const usuariosTableBody = document.querySelector("#usuariosTabla tbody");

  // MÉTODO LISTAR USUARIOS
  function getAllUsuarios() {
    fetch("http://localhost:8080/usuarios/v1/allUsuarios")
      .then((response) => response.json())
      .then((data) => {
        usuariosTableBody.innerHTML = "";

        data.forEach((usuario) => {
          const row = document.createElement("tr");

          const cellId = document.createElement("td");
          cellId.textContent = usuario.id_usuario;
          row.appendChild(cellId);

          const cellNombre = document.createElement("td");
          cellNombre.textContent = usuario.nombre_usuario;
          row.appendChild(cellNombre);

          const cellGenero = document.createElement("td");
          cellGenero.textContent = usuario.genero_usuario;
          row.appendChild(cellGenero);

          const cellTelefono = document.createElement("td");
          cellTelefono.textContent = usuario.telefono_usuario;
          row.appendChild(cellTelefono);

          const cellEmail = document.createElement("td");
          cellEmail.textContent = usuario.email_usuario;
          row.appendChild(cellEmail);

          const cellContrasena = document.createElement("td");
          cellContrasena.textContent = usuario.contrasena_usuario;
          row.appendChild(cellContrasena);

          const cellImagen = document.createElement("td");
          cellImagen.textContent = usuario.imagen_usuario;
          row.appendChild(cellImagen);

          const cellOpciones = document.createElement("td");

          const botonActualizar = document.createElement("button");
          botonActualizar.classList.add("btn", "btn-actualizar");
          botonActualizar.innerHTML = '<i class="fas fa-edit"></i>';
          botonActualizar.addEventListener("click", function () {
            updateUsuario(
              usuario.id_usuario,
              usuario.nombre_usuario,
              usuario.genero_usuario,
              usuario.telefono_usuario,
              usuario.email_usuario,
              usuario.contrasena_usuario,
              usuario.imagen_usuario
            );
          });

          const botonEliminar = document.createElement("button");
          botonEliminar.classList.add("btn", "btn-eliminar");
          botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
          botonEliminar.addEventListener("click", function () {
            deleteUsuario(usuario.id_usuario);
          });

          cellOpciones.appendChild(botonActualizar);
          cellOpciones.appendChild(botonEliminar);
          row.appendChild(cellOpciones);
          usuariosTableBody.appendChild(row);
        });
      })
      .catch((error) =>
        console.error("Error al obtener los usuarios:", error)
      );
  }
  getAllUsuarios();

  // MÉTODO AGREGAR USUARIO
  document.getElementById("createUsuarioForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      fetch("http://localhost:8080/usuarios/v1/createUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo crear el usuario.");
          }
          return response.json();
        })
        .then((data) => {
          window.location.href = "./lista-usuarios.html";
        })
        .catch((error) => {
            showAlert("No se pudo crear el usuario. Por favor, inténtelo nuevamente.", 'error')
        });
  });

  // MÉTODO ELIMINAR USUARIO
  function deleteUsuario(idUsuario) {
    fetch(
      `http://localhost:8080/usuarios/v1/deleteUsuario/${idUsuario}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo eliminar el usuario.");
        }
        getAllUsuarios();
      })
      .catch((error) =>
        console.error("Error al eliminar el usuario:", error)
      );
  }

  // MÉTODO ACTUALIZAR USUARIO
  function updateUsuario(idUsuario, nombreUsuario, generoUsuario, telefonoUsuario, emailUsuario, contrasenaUsuario, imagenUsuario) {
    window.location.href = `./editar-usuarios.html?id=${idUsuario}&nombre=${encodeURIComponent(
      nombreUsuario
    )}&genero=${encodeURIComponent(generoUsuario)}&telefono=${encodeURIComponent(telefonoUsuario)}&email=${encodeURIComponent(emailUsuario)}&contrasena=${encodeURIComponent(contrasenaUsuario)}&imagen=${encodeURIComponent(imagenUsuario)}`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idUsuario = urlParams.get("id");
  const nombreUsuario = urlParams.get("nombre");
  const generoUsuario = urlParams.get("genero");
  const telefonoUsuario = urlParams.get("telefono");
  const emailUsuario = urlParams.get("email");
  const contrasenaUsuario = urlParams.get("contrasena");
  
  document.getElementById("nombre_usuario").value = nombreUsuario;
  document.getElementById("genero_usuario").value = generoUsuario;
  document.getElementById("telefono_usuario").value = telefonoUsuario;
  document.getElementById("email_usuario").value = emailUsuario;
  document.getElementById("contrasena_usuario").value = contrasenaUsuario;

  document.getElementById("botonActualizar").addEventListener("click", function () {
      const nuevoNombre = document.getElementById("nombre_usuario").value;
      const nuevoGenero = document.getElementById("genero_usuario").value;
      const nuevoTelefono = document.getElementById("telefono_usuario").value;
      const nuevoEmail = document.getElementById("email_usuario").value;
      const nuevaContrasena = document.getElementById("contrasena_usuario").value;

      fetch(`http://localhost:8080/usuarios/v1/updateUsuario/${idUsuario}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              nombre_usuario: nuevoNombre,
              genero_usuario: nuevoGenero,
              telefono_usuario: nuevoTelefono,
              email_usuario: nuevoEmail,
              contrasena_usuario: nuevaContrasena
          }),
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error("No se pudo actualizar el usuario.");
          }
          window.location.href = "./lista-usuarios.html";
      })
      .catch((error) => console.error("Error al actualizar el usuario:", error));
  });
});

// SWEET ALERT
function showAlert(message, type = 'info') {
  let icon;
  switch (type) {
      case 'success':
          icon = 'success';
          break;
      case 'error':
          icon = 'error';
          break;
      case 'info':
          icon = 'info';
          break;
      case 'warning':
          icon = 'warning';
          break;
      default:
          icon = 'info';
  }

  Swal.fire({
      icon: icon,
      title: message,
      showConfirmButton: true,
      timer: 6000
  });
}
