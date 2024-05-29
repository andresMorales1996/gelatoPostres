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
  if (window.innerWidth >= 1200) {
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
