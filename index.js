//* *FUNCIÓN NORMALIZAR URL */
function normalizarURL(url) {
  if (url.startsWith("./") || url.startsWith("../")) {
    return url;
  } else if (url.startsWith("../../")) {
    return url;
  } else {
    return `./${url}`;
  }
}

//* *FUNCIÓN CARGAR COMPONENTES */
async function cargarComponente(id, url) {
  try {
    const normalizedUrl = normalizarURL(url);
    const response = await fetch(normalizedUrl);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (error) {
    console.error("Error al cargar el componente:", error);
  }
}

//* *IMPORT COMPONENTES */
document.addEventListener("DOMContentLoaded", () => {
  cargarComponente("nav", "../../components/nav/nav.html");
  cargarComponente("footer", "../../components/footer/footer.html");
  cargarComponente("slider", "../../components/slider/slider.html");
  cargarComponente("navApp", "../../components/navApp/navApp.html");
  cargarComponente("banner", "../../components/banner/banner.html");
  cargarComponente("whatsapp", "../../components/whatsapp/whatsapp.html");
  cargarComponente("modal-page", "../components/modal/modal.html");
  cargarComponente("modulosApp", "../../components/modulosApp/modulosApp.html");
});
