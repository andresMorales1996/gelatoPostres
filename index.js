/* *FUNCIÓN CARGAR COMPONENTES */
async function cargarComponente(id, url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (error) {
    //console.error("Error al cargar el componente:", error);
  }
}
 
//* *IMPORT COMPONENTES *//
document.addEventListener("DOMContentLoaded", () => {
  // cargarComponente("nav", "./components/nav/nav.html");
  // cargarComponente("footer", "./components/footer/footer.html");
  cargarComponente("navPage", "../components/nav/nav.html");
  cargarComponente("footerPage", "../components/footer/footer.html");
  cargarComponente("sliderPage", "../components/slider/slider.html");
});
