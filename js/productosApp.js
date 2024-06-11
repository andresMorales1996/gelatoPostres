//* *VALIDAR FORMULARIO PRODUCTOS */
function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let tipo = document.getElementById("tipo").value;
  let relleno = document.getElementById("relleno").value;
  let porciones = document.getElementById("porciones").value;
  let precio = document.getElementById("precio").value;
  let disponibilidad = document.getElementById("disponibilidad").value;
  let descripcion = document.getElementById("descripcion").value;

  if (nombre == "") {
    alert("Nombre es requerido");
    return false;
  }

  if (tipo == "") {
    alert("Tipo es requerido");
    return false;
  }

  if (relleno == "") {
    alert("Relleno es requerido");
    return false;
  }

  if (porciones == "") {
    alert("Porciones es requerido");
    return false;
  }

  if (precio == "") {
    alert("Precio es requerido");
    return false;
  } else if (precio < 1) {
    alert("El precio no debe ser cero o menor a cero");
    return false;
  }

  if (disponibilidad == "") {
    alert("Disponibilidad es requerida");
    return false;
  }

  if (descripcion == "") {
    alert("Descripcion es requerido");
    return false;
  }

  return true;
}

//* *LISTAR PRODUCTOS */
function listarDatos() {
  let datoLista;
  if (localStorage.getItem("datoLista") == null) {
    datoLista = [];
  } else {
    datoLista = JSON.parse(localStorage.getItem("datoLista"));
  }

  let html = "";

  datoLista.forEach(function (dato, numeroDato) {
    html += "<tr>";
    html += "<td>" + dato.nombre + "</td>";
    html += "<td>" + dato.tipo + "</td>";
    html += "<td>" + dato.relleno + "</td>";
    html += "<td>" + dato.porciones + "</td>";
    html += "<td>" + dato.precio + "</td>";
    html += "<td>" + dato.disponibilidad + "</td>";
    html += "<td>" + dato.descripcion + "</td>";
    html +=
      '<td><button onclick="eliminarDatos(' +
      numeroDato +
      ')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button> <button onclick="modificarDatos(' +
      numeroDato +
      ')" class="btn btn-warning m-2"><i class="fa-solid fa-pen-to-square"></i></button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = listarDatos();

//* *AGREGAR PRODUCTOS */
function agregarDatos() {
  if (validarFormulario() == true) {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let relleno = document.getElementById("relleno").value;
    let porciones = document.getElementById("porciones").value;
    let precio = document.getElementById("precio").value;
    let disponibilidad = document.getElementById("disponibilidad").value;
    let descripcion = document.getElementById("descripcion").value;

    let datoLista;
    if (localStorage.getItem("datoLista") == null) {
      datoLista = [];
    } else {
      datoLista = JSON.parse(localStorage.getItem("datoLista"));
    }

    datoLista.push({
      nombre: nombre,
      tipo: tipo,
      relleno: relleno,
      porciones: porciones,
      precio: precio,
      disponibilidad: disponibilidad,
      descripcion: descripcion,
    });

    localStorage.setItem("datoLista", JSON.stringify(datoLista));
    listarDatos();

    document.getElementById("nombre").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("relleno").value = "";
    document.getElementById("porciones").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("disponibilidad").value = "";
    document.getElementById("descripcion").value = "";
  }
}

//* *MODIFICAR PRODUCTOS */
function modificarDatos(numeroDato) {
  document.getElementById("botonAgregar").style.display = "none";
  document.getElementById("botonModificar").style.display = "block";

  let datoLista;
  if (localStorage.getItem("datoLista") == null) {
    datoLista = [];
  } else {
    datoLista = JSON.parse(localStorage.getItem("datoLista"));
  }

  document.getElementById("nombre").value = datoLista[numeroDato].nombre;
  document.getElementById("tipo").value = datoLista[numeroDato].tipo;
  document.getElementById("relleno").value = datoLista[numeroDato].relleno;
  document.getElementById("porciones").value = datoLista[numeroDato].porciones;
  document.getElementById("precio").value = datoLista[numeroDato].precio;
  document.getElementById("disponibilidad").value = datoLista[numeroDato].disponibilidad;
  document.getElementById("descripcion").value = datoLista[numeroDato].descripcion;

  document.querySelector("#botonModificar").onclick = function () {
    if (validarFormulario() == true) {
      datoLista[numeroDato].nombre = document.getElementById("nombre").value;
      datoLista[numeroDato].tipo = document.getElementById("tipo").value;
      datoLista[numeroDato].relleno = document.getElementById("relleno").value;
      datoLista[numeroDato].porciones = document.getElementById("porciones").value;
      datoLista[numeroDato].precio = document.getElementById("precio").value;
      datoLista[numeroDato].disponibilidad = document.getElementById("disponibilidad").value;
      datoLista[numeroDato].descripcion = document.getElementById("descripcion").value;

      localStorage.setItem("datoLista", JSON.stringify(datoLista));
      listarDatos();

      document.getElementById("nombre").value = "";
      document.getElementById("tipo").value = "";
      document.getElementById("relleno").value = "";
      document.getElementById("porciones").value = "";
      document.getElementById("precio").value = "";
      document.getElementById("disponibilidad").value = "";
      document.getElementById("descripcion").value = "";
      document.getElementById("botonAgregar").style.display = "block";
      document.getElementById("botonModificar").style.display = "none";
    }
  };
}

//* *ELIMINAR PRODUCTOS */
function eliminarDatos(numeroDato) {
  let datoLista;
  if (localStorage.getItem("datoLista") == null) {
    datoLista = [];
  } else {
    datoLista = JSON.parse(localStorage.getItem("datoLista"));
  }

  datoLista.splice(numeroDato, 1);

  localStorage.setItem("datoLista", JSON.stringify(datoLista));
  listarDatos();
}
