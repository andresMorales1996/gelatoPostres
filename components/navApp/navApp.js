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
  const switchPanel = document.querySelector(".switch-panel");
  const iconoBusqueda = document.querySelector(".iconoBuscar");
  const inputBusqueda = document.querySelector(".inputBuscar");

  if (localStorage.getItem("modo-oscuro") === "activo") {
    body.classList.add("tema-oscuro");
  }

  switchPanel.addEventListener("click", () => {
    body.classList.toggle("tema-oscuro");

    if (body.classList.contains("tema-oscuro")) {
      localStorage.setItem("modo-oscuro", "activo");
    } else {
      localStorage.removeItem("modo-oscuro");
    }
  });

  iconoBusqueda.addEventListener("click", function () {
    inputBusqueda.classList.toggle("mostrar");
  });

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      if (body.classList.contains("tema-oscuro")) {
        localStorage.setItem("modo-oscuro", "activo");
      }
    });
  });
};

$(document).ready(function () {
  $("#input_buscar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#contenedor-iconos .modulos-panel").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
