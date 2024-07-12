function mostrarSideBar() {
  const sideBar = document.querySelector(".sideBar");
  const input = document.querySelector(".expandirInput .inputBuscar");
  const logo = document.querySelector(".logo-nav");

  sideBar.style.display = "flex";

  input.style.width = "0";

  logo.classList.remove("hidden");
}

function esconderSideBar() {
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "none";
}

function ocultarLogo(event) {
  event.preventDefault();
  const logo = document.querySelector(".logo-nav");
  const input = document.querySelector(".expandirInput .inputBuscar");

  let inputWidth;
  if (window.innerWidth >= 1024) {
    inputWidth = "20%";
  } else if (window.innerWidth >= 768) {
    inputWidth = "40%";
  } else {
    inputWidth = "60%";
  }

  if (input.style.width === inputWidth) {
    input.style.width = "0";

    if (window.innerWidth < 900) {
      logo.classList.remove("hidden");
    }
  } else {
    input.style.width = inputWidth;

    if (window.innerWidth < 900) {
      logo.classList.add("hidden");
    }
  }
}

function mostrarOpciones() {
  var tema = document.querySelector(".tema");
  // var cuadroPequeno = tema.querySelector(".cuadro-pequeno");

  if (tema.classList.contains("seleccionado")) {
    tema.classList.remove("seleccionado");
  } else {
    tema.classList.add("seleccionado");
  }
}

function toggleModoOscuro() {
  var tema = document.querySelector(".tema");
  tema.classList.remove("seleccionado");

  const body = document.body;
  body.classList.toggle("oscuro");
  ajustarInterruptor();

  localStorage.setItem("modoOscuro", body.classList.contains("oscuro"));
}

function ajustarInterruptor() {
  const body = document.body;
  const modoOscuro = body.classList.contains("oscuro");
  const switchElement = document.querySelector(".toggle-switch .switch");

  if (modoOscuro) {
    switchElement.style.left = "calc(100% - 0.9rem)";
  } else {
    switchElement.style.left = "0.1rem";
  }
}

function cargarModoOscuro() {
  const modoOscuro = localStorage.getItem("modoOscuro") === "true";
  const body = document.body;

  if (modoOscuro) {
    body.classList.add("oscuro");
  }
  ajustarInterruptor();
}

// cargarModoOscuro();