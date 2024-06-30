import { ActivarMenuDesplegableYUsuario } from "../soloClases/activarMenuDesplegableYUsuario.js";
import { Link } from "../soloClases/links.js";




const selectorMenu = document.querySelector("#selectorMenu");
const cuerpoMenuDesplegado = document.querySelector("#cuerpoMenuDesplegado");

const activadorUsuario = document.querySelector("#activarUsuario");
const perfilDesactivado = document.querySelector("#perfilDesactivado");


new ActivarMenuDesplegableYUsuario(selectorMenu, cuerpoMenuDesplegado).menu();


new ActivarMenuDesplegableYUsuario(activadorUsuario, perfilDesactivado).usuario();


// continuar al acabar todas las vistas





const buttonnuevop = document.querySelectorAll(".boton__nuevoproducto");
const ventana = document.querySelector(".ventana ");
const noEliminar = document.getElementById("btn-not");
const siEliminar = document.getElementById("btn-yes");
const btnCerrar = document.getElementById("btn-close");

// Añade un evento de clic a cada botón de 'Abrir Ventana'
buttonnuevop.forEach(function (button) {
    button.addEventListener("click", function () {
        ventana.style.display = 'block';
    });
});

btnCerrar.addEventListener("click", function () {
    ventana.style.display = 'none';
});

noEliminar.addEventListener("click", function () {
    ventana.style.display = 'none';
});



new Link("../HTML/_15_productosVerProductos.html", "#btn-yes").redireccionar();

new Link("../HTML/_13_productos.html","#container__imagenX").redireccionar();