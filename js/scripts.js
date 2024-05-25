//* *IMPORT SCRIPTS DE COMPONENTES *//
const scripts = ["../components/nav/nav.js"];

//* *FUNCIÓN CARGAR SCRIPTS DE COMPONENTES *//
function cargarScript(url) {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

cargarScript(scripts);
