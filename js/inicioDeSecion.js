
// mostar y ocultar contraseña

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


// let userData = localStorage.getItem('usuario_')
// let user = JSON.parse('userData')


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
        return alert('Usuario y/o contraseña incorrectos!');
    }

    const mensajeBienvenida = validUser.genero === 'Hombre' ? 'Bienvenido' : 'Bienvenida';
    alert(`${mensajeBienvenida} ${validUser.nombre}`);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = '../index.html';
});