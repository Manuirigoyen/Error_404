"use strict";
const clases_figurita = ["Comun", "Especial", "Legendaria"];
const clases_sobre = ["Gris", "Dorado", "Premium"];
/**
 * Lista de tipos de álbumes disponibles.
 */
const clases_album = ["Mundial", "Continental", "Nacional", "Local"];
/**
 * Lista de países disponibles para selección.
 */
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
document.addEventListener("DOMContentLoaded", async () => {
    await cargarSecciones();
    cargarSelects();
    const btn_listar = document.getElementById("btn_listar");
    const btn_agregar = document.getElementById("btn_agregar");
    const btn_modificar = document.getElementById("btn_modificar");
    const btn_eliminar = document.getElementById("btn_eliminar");
    const botonesMenu = [btn_listar, btn_agregar, btn_modificar, btn_eliminar];
    const hamburgerBtn = document.querySelector(".hamburger_btn");
    const menuPrincipal = document.querySelector("#menu_principal");
    const submenu_listar = document.getElementById("submenu_listar");
    const submenu_agregar = document.getElementById("submenu_agregar");
    const submenu_modificar = document.getElementById("submenu_modificar");
    const submenu_eliminar = document.getElementById("submenu_eliminar");
    const forms = document.querySelectorAll("form");
    desactivarForms(forms);
    btn_listar.addEventListener("click", () => {
        activarBoton(btn_listar, botonesMenu);
        toggleSubmenu(submenu_listar);
    });
    btn_agregar.addEventListener("click", () => {
        activarBoton(btn_agregar, botonesMenu);
        toggleSubmenu(submenu_agregar);
    });
    btn_modificar.addEventListener("click", () => {
        activarBoton(btn_modificar, botonesMenu);
        toggleSubmenu(submenu_modificar);
    });
    btn_eliminar.addEventListener("click", () => {
        activarBoton(btn_eliminar, botonesMenu);
        toggleSubmenu(submenu_eliminar);
    });
    hamburgerBtn?.addEventListener("click", () => {
        menuPrincipal?.classList.toggle("menuOculto");
        const submenus = document.querySelectorAll("#menu_secundario ul");
        submenus.forEach((s) => s.classList.add("submenuOculto"));
        botonesMenu.forEach((b) => b.classList.remove("btn_activo"));
    });
});
/* Esta función carga los fragmentos HTML correspondientes a cada sección de la pagina.
 * retorna un objeto Promise<void> cuando todas las secciones han sido cargadas correctamente.
 */
const cargarSecciones = async () => {
    try {
        await cargarParcial(".section_listar", "section/listado.html");
        await cargarParcial(".section_alta", "section/alta.html");
        await cargarParcial(".section_modificacion", "section/modificacion.html");
        await cargarParcial(".section_eliminar", "section/eliminar.html");
    }
    catch (e) {
        console.error("Error cargando secciones:", e);
    }
};
const cargarParcial = async (seccion, ruta) => {
    const cont = document.querySelector(seccion);
    if (!cont)
        return;
    const res = await fetch(ruta);
    cont.innerHTML = await res.text();
};
//Activa el botón seleccionado y desactiva los demás para evitar conflictos en la interfaz
const activarBoton = (btn, botonesMenu) => {
    const activo = btn.classList.contains("btn_activo");
    botonesMenu.forEach((b) => b.classList.remove("btn_activo"));
    if (!activo)
        btn.classList.add("btn_activo");
};
//Muestra u oculta el submenú correspondiente y oculta los demás para evitar conlifctos en la interfaz.
const toggleSubmenu = (submenu) => {
    const submenus = document.querySelectorAll("#menu_secundario ul");
    submenus.forEach((s) => {
        s === submenu
            ? s.classList.toggle("submenuOculto")
            : s.classList.add("submenuOculto");
    });
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
// Procesa un formulario según su name, obteniendo el archivo.json asociado (map) para su posterior procesamiento.
const procesarFormulario = async (form) => {
    const rutas = new Map([
        ["listar_figurita_por_id", "figuritas.json"],
        ["listar_figurita_por_sobre", "figuritas.json"],
        ["listar_sobre_por_id", "sobres.json"],
        ["listar_sobre_por_album", "sobres.json"],
        ["listar_album_por_id", "albums.json"],
        ["listar_album_por_pais_y_limite", "albums.json"],
        ["listar_usuario_por_id", "usuarios.json"],
        ["agregar_figurita", "figuritas.json"],
        ["agregar_sobre", "sobres.json"],
        ["agregar_album", "albums.json"],
        ["agregar_usuario", "usuarios.json"],
        ["modificar_figurita", "figuritas.json"],
        ["modificar_sobre", "sobres.json"],
        ["modificar_album", "albums.json"],
        ["modificar_usuario", "usuarios.json"],
        ["eliminar_figurita", "figuritas.json"],
        ["eliminar_sobre", "sobres.json"],
        ["eliminar_album", "albums.json"],
        ["eliminar_usuario", "usuarios.json"],
    ]);
    const formData = new FormData(form);
    const archivo = rutas.get(form.name);
    if (!archivo)
        return;
    const data = await getJson(archivo);
    switch (true) {
        case form.name.startsWith("listar_"):
            procesarListado(form.name, formData, data);
            break;
        case form.name.startsWith("agregar_"):
            procesarAlta(form.name, formData, data);
            break;
        case form.name.startsWith("modificar_"):
            procesarModificacion(form.name, formData, data);
            break;
        case form.name.startsWith("eliminar_"):
            procesarEliminacion(form.name, formData, data);
            break;
    }
};
const procesarListado = (name, formData, data) => {
    const contenedor = document.getElementById("respuesta_" + name);
    if (!contenedor)
        return;
    contenedor.innerHTML = "";
    const tipo = name.replace("listar_", "").replace(/_/g, " ");
    const claves = Array.from(formData.keys());
    if (claves.length === 0) {
        contenedor.appendChild(errorDeFormulario("listar"));
        return;
    }
    const datosFiltrados = filtrarDatos(formData, data);
    if (datosFiltrados.length === 0) {
        const p = document.createElement("p");
        p.classList.add("error");
        p.textContent = `No se encontraron resultados para los datos ingresados.`;
        contenedor.appendChild(p);
        return;
    }
    contenedor.appendChild(crearTabla(tipo, datosFiltrados, claves));
};
const procesarAlta = (id, formData, data) => { };
const procesarModificacion = (id, formData, data) => { };
const procesarEliminacion = (id, formData, data) => { };
const filtrarDatos = (formData, data) => {
    const campoID = Array.from(formData.keys()).find((key) => key.startsWith("id"));
    if (!campoID)
        return [];
    const valorID = Number(formData.get(campoID));
    if (isNaN(valorID))
        return [];
    const campoLimite = Array.from(formData.keys()).find((key) => key.toLowerCase().startsWith("limite"));
    const limite = campoLimite ? Number(formData.get(campoLimite)) : 1;
    const resultados = data.filter((item) => item[campoID] === valorID);
    return resultados.slice(0, limite);
};
const errorDeFormulario = (accion) => {
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = `No se seleccionó ningún campo para ${accion}.`;
    return p;
};
const crearTabla = (titulo, data, clavesFiltro) => {
    const tabla = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = titulo;
    tabla.appendChild(caption);
    if (!data || data.length === 0)
        return tabla;
    let columnas = Object.keys(data[0]);
    columnas = columnas.filter((c) => !clavesFiltro.includes(c));
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    columnas.forEach((col) => {
        const th = document.createElement("th");
        th.textContent = col;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    tabla.appendChild(thead);
    const tbody = document.createElement("tbody");
    data.forEach((item) => {
        const tr = document.createElement("tr");
        columnas.forEach((col) => {
            const td = document.createElement("td");
            td.textContent = item[col] ?? "—";
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    tabla.appendChild(tbody);
    return tabla;
};
const getJson = async (nombreArchivo) => {
    try {
        const response = await fetch(`../../data/${nombreArchivo}`);
        if (!response.ok)
            throw new Error(`No se pudo cargar ${nombreArchivo}`);
        return await response.json();
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
