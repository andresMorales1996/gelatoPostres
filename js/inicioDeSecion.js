// Mostrar y ocultar contraseña

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

// Validación de inicio de sesión

const loginForm = document.querySelector('#inicioDeSesion');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#correo').value;
    const password = document.querySelector('#confirma-contrasena').value;

    const lastUserId = parseInt(localStorage.getItem('lastUserId')) || 0;
    let validUser = null;

    for (let i = 1; i <= lastUserId; i++) {
        const userString = localStorage.getItem('usuario_' + i);
        if (userString) {
            const user = JSON.parse(userString);
            if (user.correo === email && user.contrasena === password) {
                validUser = user;
                break;
            }
        }
    }

    if (!validUser) {
        showAlert("¡Usuario y/o contraseña incorrectos!", 'error');
        return;
    }

    const mensajeBienvenida = validUser.genero === 'Hombre' ? 'Bienvenido' : 'Bienvenida';
    showAlert(`${mensajeBienvenida} ${validUser.nombre}`, 'success');
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = '../index.html';
});

// SweetAlert
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
