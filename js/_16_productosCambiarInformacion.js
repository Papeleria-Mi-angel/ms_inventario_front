import { ActivarMenuDesplegableYUsuario } from "../soloClases/activarMenuDesplegableYUsuario.js";
import { Link } from "../soloClases/links.js";

const selectorMenu = document.querySelector("#selectorMenu");
const cuerpoMenuDesplegado = document.querySelector("#cuerpoMenuDesplegado");

const activadorUsuario = document.querySelector("#activarUsuario");
const perfilDesactivado = document.querySelector("#perfilDesactivado");

new ActivarMenuDesplegableYUsuario(selectorMenu, cuerpoMenuDesplegado).menu();

new ActivarMenuDesplegableYUsuario(activadorUsuario, perfilDesactivado).usuario();

// continuar al acabar todas las vistas
// Redirección para el contenedor de imagen
new Link("../HTML/_15_productosVerProductos.html", "#container__imagenX").redireccionar();

// Ventana guardar cambios
const botonesGuardar = document.querySelectorAll(".boton__guardarcambios");
const ventana = document.querySelector(".ventana");
const btnCerrar = document.getElementById("btn-close");

// Añade un evento de clic a cada botón de 'Abrir Ventana'
botonesGuardar.forEach(function (button) {
    button.addEventListener("click", function () {
        ventana.style.display = 'block';
    });
});

btnCerrar.addEventListener("click", function () {
    ventana.style.display = 'none';
});