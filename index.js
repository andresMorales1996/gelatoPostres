

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el componente:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('nav', './components/nav/nav.html');
    loadComponent('navPage', '../components/nav/nav.html');
});