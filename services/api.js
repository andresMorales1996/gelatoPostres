const productos = [];

async function cargarProductos() {
    try {
        const response = await fetch('../services/data.json');
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        productos.push(...data);
        console.log(productos);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

console.log('¡Bienvenid@ a Gelato & Postres!');

function verProductos() {
    console.log('\nProductos disponibles:');
    productos.forEach(producto => {
        console.log(`Producto: ${producto.nombre}`);
        console.log(`Descripción: ${producto.descripcion}`);
        console.log('Opciones:');
        producto.opciones.forEach(opcion => {
            console.log(`- Porciones: ${opcion.porcion}, Precio: $${opcion.precio}`);
        });
        console.log('\n');
    });
}

function verCategorias() {
    console.log('\nCategorías disponibles:');
    const categorias = [...new Set(productos.map(producto => producto.tipo))];
    categorias.forEach(categoria => {
        console.log(`${categoria}`);
    });
}

// function mostrarMenu() {
//     console.log('Por favor elija una de las siguientes opciones:\n');
//     console.log('1- Ver productos disponibles.\n2- Ver categorías.\n3- Salir del menú.');

//     let opcion = parseInt(prompt("Ingrese la opción deseada: "));

//     switch (opcion) {
//         case 1:
//             verProductos();
//             break;
//         case 2:
//             verCategorias();
//             break;
//         case 3:
//             console.log('Gracias por visitar Gelato & Postres. ¡Hasta luego!');
//             return;
//         default:
//             console.log('Opción no válida. Por favor, intente de nuevo.');
//     }

//     mostrarMenu();
// }

async function iniciarMenu() {
    await cargarProductos();
    mostrarMenu();
}

iniciarMenu();