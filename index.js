//* *FUNCIÓN CARGAR COMPONENTES *//
function cargarComponente(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el componente:", error));
}

//* *IMPORT COMPONENTES *//
document.addEventListener("DOMContentLoaded", () => {
  cargarComponente("nav", "./components/nav/nav.html");
  cargarComponente("navPage", "../components/nav/nav.html");
});
