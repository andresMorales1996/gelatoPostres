// IMPORT SCRIPTS DE COMPONENTES
const scripts = {
  "inicio": [
    "../components/nav/nav.js"    
  ],
  "nosotros": [
    "../components/nav/nav.js",
    "../components/slider/slider.js"
  ],
  "contacto": [
    "../components/nav/nav.js"
  ],
  "productos": [
    "../components/nav/nav.js"
  ],
  "registro": [
    "../components/nav/nav.js"
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

async function cargarScripts(page) {
  try {
    const pageScripts = scripts[page];
    if (pageScripts) {
      for (let url of pageScripts) {
        await cargarScript(url);
      }
    } else {
      // console.error(`${page}`);
    }
  } catch (error) {
    console.error(error);
  }
}

cargarScripts();
