import { ActivarMenuDesplegableYUsuario } from "../soloClases/activarMenuDesplegableYUsuario.js";
import { Link } from "../soloClases/links.js";
import { obtenerYActualizarDatosUsuario } from "../soloFunciones/actualizarInfoMenu.js";
import { cerrarSesion } from "../soloFunciones/cerrarSesion.js";
import { verificarTokenYRedirigir } from "../soloFunciones/verificarLogin.js";

document.addEventListener('DOMContentLoaded', function() {

    /**
     * @fileoverview Script para manejar la activación del menú desplegable, la gestión del usuario,
     * la apertura y cierre de ventanas emergentes, y la redirección de enlaces en la interfaz de usuario.
     */

    /**
     * Selector del menú.
     * @type {HTMLElement}
     */
    const selectorMenu = document.querySelector("#selectorMenu");

    /**
     * Cuerpo del menú desplegado.
     * @type {HTMLElement}
     */
    const cuerpoMenuDesplegado = document.querySelector("#cuerpoMenuDesplegado");

    /**
     * Activador del usuario.
     * @type {HTMLElement}
     */
    const activadorUsuario = document.querySelector("#activarUsuario");

    /**
     * Perfil desactivado.
     * @type {HTMLElement}
     */
    const perfilDesactivado = document.querySelector("#perfilDesactivado");

    /**
     * Instancia de la clase ActivarMenuDesplegableYUsuario para controlar el menú desplegable.
     */
    new ActivarMenuDesplegableYUsuario(selectorMenu, cuerpoMenuDesplegado).menu();

    /**
     * Instancia de la clase ActivarMenuDesplegableYUsuario para controlar el perfil de usuario.
     */
    new ActivarMenuDesplegableYUsuario(activadorUsuario, perfilDesactivado).usuario();

    // continuar al acabar todas las vistas

    new Link("../HTML/_14_productosNuevoProducto.html", "#nuevoProductoBtn").redireccionar();
    new Link("../HTML/_15_productosVerProductos.html", "#verProductoBtn").redireccionar();

    /**
     * Instancia de la clase Link para redirigir a la página de gestión de cuenta.
     */
    new Link("../HTML/_7_cambiarInformacionPersonal.html", ".contenedores__boton--gestionarCuenta").redireccionar();

    /**
     * Instancia de la clase Link para redirigir a la página del menú.
     */
    new Link("../HTML/_6_menu.html", ".inicio").redireccionar();

    /**
     * Instancia de la clase Link para redirigir a la página de historial.
     */
    new Link("../HTML/_10_historial.html", ".historial").redireccionar();

    /**
     * Instancia de la clase Link para redirigir a la página de productos.
     */
    new Link("../HTML/_13_productos.html", ".productos").redireccionar();

    /**
     * Instancia de la clase Link para redirigir a la página de categorías.
     */
    new Link("../HTML/_17_categorias.html", ".categorias").redireccionar();

    /**
     * Instancia de la clase Link para redirigir a la página de comprobación de existencias.
     */
    new Link("../HTML/_23_comprobarExistencias.html", ".comprobarExistencias").redireccionar();

    /**
     * Obtiene y actualiza los datos del usuario.
     * @returns {Promise<void>}
     */
    obtenerYActualizarDatosUsuario()
        .catch(error => {
            console.error('Error al obtener y actualizar datos del usuario:', error);
        });

    /**
     * Botón para cerrar sesión.
     * @type {HTMLElement}
     */
    const botonCerrarSesion = document.getElementById('boton--cerrarSesion');
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', cerrarSesion);
    }

    /**
     * Verifica el token y redirige si es necesario.
     */
    verificarTokenYRedirigir();
});


const urls = window.location.href; // Obtiene la URL actual
const nuevaUrl = urls.split('.html')[0]; // Elimina la extensión .html
window.history.replaceState(null, null, nuevaUrl);
