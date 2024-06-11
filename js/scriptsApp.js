// IMPORT SCRIPTS DE COMPONENTES
const scripts = {
  "librerias": [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  ],
  "panel": [
    "../components/navApp/navApp.js"
  ],
  "productosApp": [
    "../components/navApp/navApp.js",
    "../js/productosApp.js"
  ],
};

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

async function cargarScripts(...pages) {
  try {
    for (let page of pages) {
      const pageScripts = scripts[page];
      if (pageScripts) {
        for (let url of pageScripts) {
          await cargarScript(url);
        }
      } else {
        // console.error(`${page}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

cargarScripts();
