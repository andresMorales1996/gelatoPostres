// IMPORT SCRIPTS DE COMPONENTES
const scripts = [
  "../components/nav/nav.js",
  "../components/slider/slider.js",
  
];

// *FUNCIÓN CARGAR SCRIPTS DE COMPONENTES
function cargarScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = () => resolve(url);
    script.onerror = () => reject(new Error(`Error al cargar el script: ${url}`));
    document.head.appendChild(script);
  });
}

async function cargarScripts() {
  try {
    for (let url of scripts) {
      await cargarScript(url);
    }
  } catch (error) {
    //console.error(error);
  }
}

cargarScripts();
