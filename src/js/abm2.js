"use strict";
document.addEventListener("DOMContentLoaded", async () => {
    await cargarSecciones();
    cargarSelects();
    const hamburgerBtn = document.querySelector(".hamburger_btn");
    const menuPrincipal = document.querySelector("#menu_principal");
    // Inicializar menú y submenús después de cargar las secciones
    const btn_listar = document.getElementById("btn_listar");
    const btn_agregar = document.getElementById("btn_agregar");
    const btn_modificar = document.getElementById("btn_modificar");
    const btn_eliminar = document.getElementById("btn_eliminar");
    const submenu_listar = document.getElementById("submenu_listar");
    const submenu_agregar = document.getElementById("submenu_agregar");
    const submenu_modificar = document.getElementById("submenu_modificar");
    const submenu_eliminar = document.getElementById("submenu_eliminar");
    const botonesMenu = [btn_listar, btn_agregar, btn_modificar, btn_eliminar];
    const submenus = [
        submenu_listar,
        submenu_agregar,
        submenu_modificar,
        submenu_eliminar,
    ];
    botonesMenu.forEach((boton, i) => {
        boton.addEventListener("click", () => {
            activarBoton(boton, botonesMenu);
            toggleSubmenu(submenus[i]);
        });
    });
    hamburgerBtn?.addEventListener("click", () => {
        menuPrincipal?.classList.toggle("menuOculto");
        submenus.forEach((s) => s.classList.add("submenuOculto"));
        botonesMenu.forEach((b) => b.classList.remove("btn_activo"));
    });
    // Activa el botón seleccionado y desactiva los demás
    const activarBoton = (btn, botonesMenu) => {
        const activo = btn.classList.contains("btn_activo");
        botonesMenu.forEach((b) => b.classList.remove("btn_activo"));
        if (!activo)
            btn.classList.add("btn_activo");
    };
    // Muestra u oculta el submenú correspondiente y oculta los demás
    const toggleSubmenu = (submenu) => {
        submenus.forEach((s) => {
            s === submenu
                ? s.classList.toggle("submenuOculto")
                : s.classList.add("submenuOculto");
        });
    };
    const submenuListarItems = document.querySelectorAll("#submenu_listar li");
    const sectionContainer = document.querySelector(".section");
    submenuListarItems.forEach((item, index) => {
        item.addEventListener("click", async () => {
            if (!sectionContainer)
                return;
            let archivo = "";
            switch (index) {
                case 0:
                    archivo = "section/listado/listarFigurita.html";
                    break;
                case 1:
                    archivo = "section/listado/listarSobre.html";
                    break;
                case 2:
                    archivo = "section/listado/listarAlbum.html";
                    break;
                case 3:
                    archivo = "section/listado/listarUsuario.html";
                    break;
            }
            if (archivo) {
                await cargarParcial(".section", archivo);
            }
        });
    });
    // Inicializar eventos de formularios
    const forms = document.querySelectorAll("form");
    desactivarForms(forms);
});
const clases_figurita = ["Comun", "Especial", "Legendaria"];
const clases_sobre = ["Gris", "Dorado", "Premium"];
const clases_album = ["Mundial", "Continental", "Nacional", "Local"];
const paises = [
    "Argentina",
    "Brasil",
    "Uruguay",
    "Chile",
    "Paraguay",
    "Bolivia",
    "Peru",
    "Ecuador",
    "Colombia",
    "Venezuela",
    "Mexico",
    "España",
    "Francia",
    "Alemania",
    "Italia",
    "Portugal",
    "Inglaterra",
    "Paises Bajos",
    "Belgica",
    "Croacia",
];
/* Esta función carga los fragmentos HTML correspondientes a cada sección de la pagina.
 * retorna un objeto Promise<void> cuando todas las secciones han sido cargadas correctamente.
 */
const cargarSecciones = async () => {
    try {
        await cargarParcial(".section", "section/listado/listarFigurita.html");
        /*await cargarParcial(".section_alta", "section/alta.html");
        await cargarParcial(".section_modificacion", "section/modificacion.html");
        await cargarParcial(".section_eliminar", "section/eliminar.html");
      */
    }
    catch (e) {
        console.error("Error cargando secciones:", e);
    }
};
const cargarParcial = async (seccion, ruta) => {
    const cont = document.querySelector(seccion);
    if (!cont)
        return;
    try {
        const res = await fetch(ruta);
        cont.innerHTML = await res.text();
    }
    catch (err) {
        console.error("Error cargando parcial:", err);
    }
};
//Carga opciones dentro de todos los select de cada formulario dependiendo de su clase.
const cargarSelects = () => {
    cargarGrupoSelect(".cls_sobre", clases_sobre);
    cargarGrupoSelect(".cls_album", clases_album);
    cargarGrupoSelect(".cls_figurita", clases_figurita);
    cargarGrupoSelect(".cls_pais", paises);
};
const cargarGrupoSelect = (selector, valores) => {
    const selects = document.querySelectorAll(selector);
    selects.forEach((s) => cargarOption(s, valores));
};
const cargarOption = (select, array) => {
    array.forEach((v) => {
        const option = document.createElement("option");
        option.value = v;
        option.textContent = v;
        select.appendChild(option);
    });
};
//Se le quitan a todos los formularios de la pagina los eventos por defecto que desencadena el envio del formulario
const desactivarForms = (forms) => {
    forms.forEach((f) => {
        f.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = e.target;
            procesarFormulario(form);
        });
    });
};
