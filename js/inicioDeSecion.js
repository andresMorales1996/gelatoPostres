
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


function boton(){
let inicioDeSesion = document.querySelector('#inicioDeSesion')
inicioDeSesion.addEventListener('submit', (e)=>{
    e.preventDefault()
    const correo = document.querySelector('#correo').value
    const password = document.querySelector('#confirma-contrasena').value

    const Users = JSON.parse(localStorage.getItem('usuario_')) || []
    const isUserRegistered = Users.find(user => user.correo === correo)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({name: correo, password: password})
    localStorage.setItem('usuario_', JSON.stringify(usuario))
    alert('Registro Exitoso!')
    window.location.href = 'registro.html'
})
}