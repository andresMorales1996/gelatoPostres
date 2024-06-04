document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!validateText(nombre)) {
            showToast("Por favor, ingrese un nombre válido!");
            return false;
        }

        if (!validateText(apellido)) {
            showToast("Por favor, ingrese un apellido válido!");
            return false;
        }

        if (!validateEmail(email)) {
            showToast("Por favor, ingrese un email válido!");
            return false;
        }

        if (!validatePhone(telefono)) {
            showToast("Por favor, ingrese un teléfono válido!");
            return false;
        }

        if (!validateText(mensaje)) {
            showToast("Por favor, ingrese un mensaje válido!");
            return false;
        }

        return true;
    }

    function validateText(text) {
        const textRegex = /^[a-zA-Z\s]+$/;
        return textRegex.test(text);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = 'toast show';
        setTimeout(function() {
            toast.className = toast.className.replace('show', '');
        }, 3000);
    }
});
