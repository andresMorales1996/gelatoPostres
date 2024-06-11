window.onload = function () {
  function activarMenu() {
    const menuPanel = document.querySelector(".sidebar-panel");
    const abrirMenuIcon = document.getElementById("abrir-menu");
    const cerrarMenuIcon = document.getElementById("cerrar-menu");

    if (menuPanel.classList.contains("expandirMenu")) {
      menuPanel.classList.remove("expandirMenu");
      cerrarMenuIcon.style.display = "none";
      abrirMenuIcon.style.display = "block";
    } else {
      menuPanel.classList.add("expandirMenu");
      abrirMenuIcon.style.display = "none";
      cerrarMenuIcon.style.display = "block";
    }
  }

  document.getElementById("abrir-menu").addEventListener("click", activarMenu);
  document.getElementById("cerrar-menu").addEventListener("click", activarMenu);

  const body = document.querySelector("body");
  const sidebar = body.querySelector(".sidebar");
  const toggle = body.querySelector(".toogle");
  const searchPanel = body.querySelector(".buscar-panel");
  const switchPanel = body.querySelector(".switch-panel");

  switchPanel.addEventListener("click", () => {
    body.classList.toggle("tema-oscuro");
  });

  const iconoBusqueda = document.querySelector(".iconoBuscar");
  const inputBusqueda = document.querySelector(".inputBuscar");

  iconoBusqueda.addEventListener("click", function () {
    inputBusqueda.classList.toggle("mostrar");
  });
};
