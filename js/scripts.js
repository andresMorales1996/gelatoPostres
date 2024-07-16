// IMPORT SCRIPTS DE COMPONENTES
const scripts = {
  "inicio": [
    "../components/nav/nav.js",
    "../components/banner/banner.js",
    "../components/testimonios/testimonios.js",
    "../components/whatsapp/whatsapp.js",
    "../components/modal/modal.js",
  ],
  "nosotros": [
    "../components/nav/nav.js",
    "../components/slider/slider.js",
    "../components/whatsapp/whatsapp.js",
  ],
  "contacto": [
    "../components/nav/nav.js",
    "../components/whatsapp/whatsapp.js",
  ],
  "productos": [
    "../components/nav/nav.js",
    "../components/producto/producto.js",
    "../components/whatsapp/whatsapp.js",
    "../components/modal/modal.js",
  ],
  "registro": [
    "../components/nav/nav.js",
    "../components/whatsapp/whatsapp.js",
  ],
  "personalizar": [
    "../components/nav/nav.js",
    "../components/whatsapp/whatsapp.js",
  ],
  "carrito": [
    "../components/nav/nav.js",
    "../components/whatsapp/whatsapp.js",
  ],
  "pagos": [
    "../components/nav/nav.js",
    "../components/whatsapp/whatsapp.js",
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
