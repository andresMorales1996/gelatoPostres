// FUNCIONALIDAD DRAG AND DROP IMAGEN
const fileInput = document.getElementById('image');
const dragZone = document.getElementById('result-image');
const img = document.getElementById('img-result');

// poner la misma funcionalidad del input de tipo file
dragZone.addEventListener('click', () => fileInput.click());

// cada vez que hacemos el drag and drop a la zona drag cambie su color de fondo
dragZone.addEventListener('dragover', (e) => {
    //  prevenir el funcionamiento por defecto, no se quiere que 
    //se habra en otra pestaña
    e.preventDefault();
    dragZone.classList.add('form-file-result--active');
});

// vuelve al color original
dragZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragZone.classList.remove('form-file-result--active');
});

// funcion 
const uploadImage = (file) => {
    const fileReader = new FileReader();//lee archivos localmente
    fileReader.readAsDataURL(file);//lee la url del archivo

    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result);
    });
}

// arrastar la imagen y verla
dragZone.addEventListener('drop', (e) => {
    e.preventDefault();// ya no abre una pestaña por defecto
    fileInput.files = e.dataTransfer.files; // le asignamos el archivo a fileInput
    const file = fileInput.files[0];
    console.log(file);// se captura el archivo , es decir, la imagen
    uploadImage(file);
});

// funcion para cambiar la imagen desde el explorador de archivos 
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    uploadImage(file);
});

// ------------------------------------------------------------------------------------------
// VALIDACIONES DE FORMULARIO
// Mostrar / ocultar contraseñas
const passwords = document.querySelectorAll(".input[type='password']");
const icons = document.querySelectorAll(".bx-hide");

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const pass = passwords[index];
        if (pass.type === "text") {
            pass.type = "password";
            icon.classList.remove("bx-show");
            icon.classList.add("bx-hide");
        } else {
            pass.type = "text";
            icon.classList.remove("bx-hide");
            icon.classList.add("bx-show");
        }
    });
});

// Función para manejar la selección del género
function seleccionarGenero() {
    const hombre = document.getElementById('radio-hombre');
    const mujer = document.getElementById('radio-mujer');

    hombre.addEventListener('change', () => {
        if (hombre.checked) {
            mujer.checked = false;
        }
    });

    mujer.addEventListener('change', () => {
        if (mujer.checked) {
            hombre.checked = false;
        }
    });
}

seleccionarGenero();

function validarFormulario() {
    try {
        // Obtener los valores de los radio buttons para género
        let hombreChecked = document.getElementById('radio-hombre').checked;
        let mujerChecked = document.getElementById('radio-mujer').checked;

        // URLs de las imágenes en Google Drive (reemplaza FILE_ID_HOMBRE y FILE_ID_MUJER con los IDs correctos)
        const urlHombre = 'https://drive.google.com/file/d/1jIC-ti9Awyy59it9b-5xRRIY8_I_mtyj/view?usp=sharing';
        const urlMujer = 'https://drive.google.com/file/d/1biWexmUOZY94IZtE3MzfRTqnapMNlpUn/view?usp=sharing';

        // Obtener la imagen predeterminada según el género seleccionado
        let imagen;

        if (!img.getAttribute('src')) {
            if (mujerChecked) {
                imagen = urlMujer;
            } else if (hombreChecked) {
                imagen = urlHombre;
            }
            img.setAttribute('src', imagen); // Establecer la imagen predeterminada en el elemento img
        } else {
            imagen = img.getAttribute('src');
        }

        let nombre = document.getElementById('nombre').value;
        let telefono = document.getElementById('telefono').value;
        let correo = document.getElementById('correo').value;
        let contrasena = document.getElementById('contrasena').value;
        let confirmaContrasena = document.getElementById('confirma-contrasena').value;

        // Expresiones regulares para validar los campos
        let nombreRegExp = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        let telefonoRegExp = /^[0-9]+$/;
        let correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let contrasenaRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\s]{8,}$/;

        // Verificar si todos los campos están llenos
        if (!nombre || !telefono || !correo || !contrasena || !confirmaContrasena || (!hombreChecked && !mujerChecked)) {
            throw new Error("Todos los campos deben estar llenos.");
        }

        // Validación del nombre
        if (!nombreRegExp.test(nombre)) {
            throw new Error("Nombre no válido. Debe contener solo letras.");
        }

        // Validación del teléfono
        if (!telefonoRegExp.test(telefono)) {
            throw new Error("Teléfono no válido. Debe contener solo números.");
        }

        // Validación del correo
        if (!correoRegExp.test(correo)) {
            throw new Error("Correo no válido. Debe tener un formato válido, un ejemplo: correo@...");
        }

        // Validación de la contraseña
        if (!contrasenaRegExp.test(contrasena)) {
            throw new Error("Contraseña no válida. Debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        }

        // Validación de la confirmación de contraseña
        if (contrasena !== confirmaContrasena) {
            throw new Error("Las contraseñas no coinciden.");
        }

        // Validación de si se seleccionó el género
        if (!hombreChecked && !mujerChecked) {
            throw new Error("Debe seleccionar su género.");
        }

        // Obtener el último ID asignado
        let lastUserId = parseInt(localStorage.getItem('lastUserId')) || 0;

        // Incrementar el ID para el nuevo usuario
        let newUserId = lastUserId + 1;

        // Crear objeto JSON con los campos del usuario
        let usuario = {
            id: newUserId,
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            contrasena: contrasena,
            genero: hombreChecked ? 'Hombre' : 'Mujer',
            imagen: imagen
        };

        console.log(usuario)

        // Guardar datos del usuario en el localStorage
        localStorage.setItem('usuario_' + newUserId, JSON.stringify(usuario));

        // Actualizar el último ID asignado en el localStorage
        localStorage.setItem('lastUserId', newUserId);

        showAlert("Formulario enviado correctamente", 'success');

        // Limpiar los inputs después de enviar el formulario
        resetForm();

        setTimeout(() => {
            window.location.href = '/index.html';
        }, 4000);

    } catch (error) {
        showAlert(error.message, 'error');
    }
}

// ------------------------------------------------------------------------------------------
// Función para limpiar los inputs
function resetForm() {
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('contrasena').value = '';
    document.getElementById('confirma-contrasena').value = '';
    document.getElementById('radio-hombre').checked = false;
    document.getElementById('radio-mujer').checked = false;
    img.setAttribute('src', ''); // Resetear la imagen
    fileInput.value = ''; // Resetear el input de archivo
}

// ------------------------------------------------------------------------------------------
// Obtener todos los usuarios del localStorage DESCARGANDO UN ARCHIVO LLAMADO data-user.json
const usuarios = [];
for (let i = 1; i <= localStorage.getItem('lastUserId'); i++) {
    const usuarioString = localStorage.getItem('usuario_' + i);
    if (usuarioString) {
        const usuario = JSON.parse(usuarioString);
        usuarios.push(usuario);
    }
}

// Convertir los usuarios a formato JSON
const usuariosJSON = JSON.stringify(usuarios, null, 2); // El segundo argumento es para la indentación (2 espacios en este caso)

// Crear un enlace para descargar el archivo
// const downloadLink = document.createElement('a');
// downloadLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(usuariosJSON);
// downloadLink.download = 'data-user.json';

// Agregar el enlace al documento y simular el clic
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);

console.log('Datos de usuarios descargados como data-user.json');

// ------------------------------------------------------------------------------------------
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
