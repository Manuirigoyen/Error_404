document.addEventListener("DOMContentLoaded", async () => {
  await cargarSecciones();
  cargarSelects();

  const hamburgerBtn =
    document.querySelector<HTMLButtonElement>(".hamburger_btn");
  const menuPrincipal = document.querySelector<HTMLElement>("#menu_principal");

  // Inicializar menú y submenús después de cargar las secciones
  const btn_listar = document.getElementById("btn_listar") as HTMLButtonElement;
  const btn_agregar = document.getElementById(
    "btn_agregar"
  ) as HTMLButtonElement;
  const btn_modificar = document.getElementById(
    "btn_modificar"
  ) as HTMLButtonElement;
  const btn_eliminar = document.getElementById(
    "btn_eliminar"
  ) as HTMLButtonElement;

  const submenu_listar = document.getElementById(
    "submenu_listar"
  ) as HTMLElement;
  const submenu_agregar = document.getElementById(
    "submenu_agregar"
  ) as HTMLElement;
  const submenu_modificar = document.getElementById(
    "submenu_modificar"
  ) as HTMLElement;
  const submenu_eliminar = document.getElementById(
    "submenu_eliminar"
  ) as HTMLElement;

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
  const activarBoton = (
    btn: HTMLButtonElement,
    botonesMenu: HTMLButtonElement[]
  ) => {
    const activo = btn.classList.contains("btn_activo");
    botonesMenu.forEach((b) => b.classList.remove("btn_activo"));
    if (!activo) btn.classList.add("btn_activo");
  };

  // Muestra u oculta el submenú correspondiente y oculta los demás
  const toggleSubmenu = (submenu: HTMLElement): void => {
    submenus.forEach((s) => {
      s === submenu
        ? s.classList.toggle("submenuOculto")
        : s.classList.add("submenuOculto");
    });
  };

  const submenuListarItems =
    document.querySelectorAll<HTMLLIElement>("#submenu_listar li");
  const submenuAgregarItems = document.querySelectorAll<HTMLLIElement>(
    "#submenu_agregar li"
  );
  const submenuModificarItems = document.querySelectorAll<HTMLLIElement>(
    "#submenu_modificar li"
  );
  const submenuEliminarItems = document.querySelectorAll<HTMLLIElement>(
    "#submenu_eliminar li"
  );

  const rutas = {
    listar: [
      "section/listado/listarFigurita.html",
      "section/listado/listarSobre.html",
      "section/listado/listarAlbum.html",
      "section/listado/listarUsuario.html",
    ],
    agregar: [
      "section/alta/agregarFigurita.html",
      "section/alta/agregarSobre.html",
      "section/alta/agregarAlbum.html",
      "section/alta/agregarUsuario.html",
    ],
    modificar: [
      "section/modificacion/modificarFigurita.html",
      "section/modificacion/modificarSobre.html",
      "section/modificacion/modificarAlbum.html",
      "section/modificacion/modificarUsuario.html",
    ],
    eliminar: [
      "section/baja/eliminarFigurita.html",
      "section/baja/eliminarSobre.html",
      "section/baja/eliminarAlbum.html",
      "section/baja/eliminarUsuario.html",
    ],
  };

  const manejarSubmenu = (
    items: NodeListOf<HTMLLIElement>,
    listaRutas: string[]
  ) => {
    items.forEach((item, index) => {
      item.addEventListener("click", async () => {
        const archivo = listaRutas[index];
        if (archivo) {
          await cargarParcial(".section", archivo);
          cargarSelects();
        }
      });
    });
  };

  manejarSubmenu(submenuListarItems, rutas.listar);
  manejarSubmenu(submenuAgregarItems, rutas.agregar);
  manejarSubmenu(submenuModificarItems, rutas.modificar);
  manejarSubmenu(submenuEliminarItems, rutas.eliminar);

  // Inicializar eventos de formularios
  const forms = document.querySelectorAll<HTMLFormElement>("form");
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
const cargarSecciones = async (): Promise<void> => {
  try {
    await cargarParcial(".section", "section/listado/listarFigurita.html");
    cargarSelects();
  } catch (e) {
    console.error("Error cargando secciones:", e);
  }
};

const cargarParcial = async (seccion: string, ruta: string): Promise<void> => {
  const cont = document.querySelector(seccion);
  if (!cont) return;
  try {
    const res = await fetch(ruta);
    cont.innerHTML = await res.text();
  } catch (err) {
    console.error("Error cargando parcial:", err);
  }
};

//Carga opciones dentro de todos los select de cada formulario dependiendo de su clase.
const cargarSelects = (): void => {
  cargarGrupoSelect(".cls_sobre", clases_sobre);
  cargarGrupoSelect(".cls_album", clases_album);
  cargarGrupoSelect(".cls_figurita", clases_figurita);
  cargarGrupoSelect(".cls_pais", paises);
};

const cargarGrupoSelect = (selector: string, valores: string[]) => {
  const selects = document.querySelectorAll<HTMLSelectElement>(selector);
  selects.forEach((s) => cargarOption(s, valores));
};

const cargarOption = (select: HTMLSelectElement, array: string[]): void => {
  select.innerHTML = "";
  array.forEach((v) => {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
};

//Se le quitan a todos los formularios de la pagina los eventos por defecto que desencadena el envio del formulario
const desactivarForms = (forms: NodeListOf<HTMLFormElement>) => {
  forms.forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      procesarFormulario(form);
    });
  });
};

// Procesa un formulario según su name, obteniendo el archivo.json asociado (map) para su posterior procesamiento.
const procesarFormulario = async (form: HTMLFormElement) => {
  const rutas = new Map<string, string>([
    ["listar_figurita_por_id", "figuritas.json"],
    ["listar_figurita_por_sobre", "figuritas.json"],
    ["listar_sobre_por_id", "sobres.json"],
    ["listar_sobre_por_album", "sobres.json"],
    ["listar_album_por_id", "albums.json"],
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
  if (!archivo) return;

  const data = await getJson(archivo);
  if (!data || !Array.isArray(data)) return;

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

/*
 * Procesa una operación de listar, filtrando los datos según los
 * campos enviados en formDate y mostrando los resultados obtenidos en una tabla.
 */
const procesarListado = (
  name: string,
  formData: FormData,
  data: any[]
): void => {
  const contenedor = document.getElementById("respuesta_" + name);
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const tipo = name.replace("listar_", "").replace(/_/g, " ");
  const claves = Array.from(formData.keys());

  if (claves.length === 0) {
    contenedor.appendChild(errorDeFormulario("listar"));
    return;
  }

  const clavesFiltro = claves.filter(
    (k) => k.startsWith("id") || k.toLowerCase().startsWith("limite")
  );

  const datosFiltrados = filtrarDatos(formData, data);

  if (datosFiltrados.length === 0) {
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = `No se encontraron resultados para los datos ingresados.`;
    contenedor.appendChild(p);
    return;
  }

  contenedor.appendChild(crearTabla(tipo, datosFiltrados, clavesFiltro));
};

// Procesa una operación de baja, mostrando los elementos que fueron eliminados.
const procesarEliminacion = (
  id: string,
  formData: FormData,
  data: any
): void => {
  const contenedor = document.getElementById("respuesta_" + id);
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const claves = Array.from(formData.keys());

  if (claves.length === 0) {
    contenedor.appendChild(errorDeFormulario("eliminar"));
    return;
  }

  const clavesFiltro = claves.filter(
    (k) => k.startsWith("id") || k.toLowerCase().startsWith("limite")
  );

  const datosFiltrados = filtrarDatos(formData, data);

  if (datosFiltrados.length === 0) {
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = `No se encontraron resultados para los datos ingresados.`;
    contenedor.appendChild(p);
    return;
  }

  const tabla = crearTabla("eliminar", datosFiltrados, clavesFiltro);
  contenedor.appendChild(tabla);

  const mensaje = document.createElement("p");
  mensaje.classList.add("exito");
  mensaje.textContent = "Los elementos fueron eliminados correctamente.";
  contenedor.appendChild(mensaje);
};

// Procesa una operación de alta, validando que no exista un registro repetido,
const procesarAlta = (id: string, formData: FormData, data: any[]): void => {
  const contenedor = document.getElementById("respuesta_" + id);
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const claves = Array.from(formData.keys());
  if (claves.length === 0) {
    contenedor.appendChild(errorDeFormulario("alta"));
    return;
  }

  const existe = registroExistente(formData, data);
  if (existe) {
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = "El elemento ya existe y no se puede agregar.";
    contenedor.appendChild(p);
    return;
  }

  const nuevoObjeto: any = {};
  claves.forEach((key) => {
    nuevoObjeto[key] = formData.get(key);
  });

  contenedor.appendChild(crearTabla("alta", [nuevoObjeto], []));

  const mensaje = document.createElement("p");
  mensaje.classList.add("exito");
  mensaje.textContent = "El elemento se agregó correctamente.";
  contenedor.appendChild(mensaje);
};

// Procesa una operación de modificacion, mostrando los datos originales y los nuevos en dos tablas distintas.
const procesarModificacion = (
  id: string,
  formData: FormData,
  data: any[]
): void => {
  const contenedor = document.getElementById("respuesta_" + id);
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const claves = Array.from(formData.keys());
  if (claves.length === 0) {
    contenedor.appendChild(errorDeFormulario("modificar"));
    return;
  }

  const datosOriginales = filtrarDatos(formData, data);

  if (datosOriginales.length === 0) {
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = "No se encontró el elemento indicado para su modificación.";
    contenedor.appendChild(p);
    return;
  }

  const nuevoObjeto: any = {};
  claves.forEach((key) => {
    nuevoObjeto[key] = formData.get(key);
  });

  const clavesFiltro = claves.filter(
    (k) => k.startsWith("id") || k.toLowerCase().startsWith("limite")
  );

  const tituloOriginal = document.createElement("h3");
  tituloOriginal.textContent = "Datos originales";
  contenedor.appendChild(tituloOriginal);

  contenedor.appendChild(
    crearTabla("modificar", datosOriginales, clavesFiltro)
  );

  const tituloNuevo = document.createElement("h3");
  tituloNuevo.textContent = "Datos nuevos";
  contenedor.appendChild(tituloNuevo);

  contenedor.appendChild(crearTabla("modificar", [nuevoObjeto], []));

  const mensaje = document.createElement("p");
  mensaje.classList.add("exito");
  mensaje.textContent = "El elemento fue modificado correctamente.";
  contenedor.appendChild(mensaje);
};

// Filtra datos del JSON según el campo ID enviado en el formDate y un límite opcional.
const filtrarDatos = (formData: FormData, data: any[]): any[] => {
  const campoID = Array.from(formData.keys()).find((key) =>
    key.startsWith("id")
  );

  if (!campoID) return [];

  const valorID = Number(formData.get(campoID));
  if (isNaN(valorID)) return [];

  const campoLimite = Array.from(formData.keys()).find((key) =>
    key.toLowerCase().startsWith("limite")
  );

  const limite = campoLimite ? Number(formData.get(campoLimite)) : 1;

  const resultados = data.filter((item) => Number(item[campoID]) === valorID);
  return resultados.slice(0, limite);
};

// Determina si un registro ya existe comparando campos que deben tener valores unicos y comienzan con "nombre".
const registroExistente = (formData: FormData, data: any[]): boolean => {
  const campoNombre = Array.from(formData.keys()).find((key) =>
    key.startsWith("nombre")
  );

  if (!campoNombre) return false;

  const valorNombre = formData.get(campoNombre);
  if (!valorNombre) return false;

  const encontrado = data.some(
    (item) =>
      String(item[campoNombre]).toLowerCase() ===
      String(valorNombre).toLowerCase()
  );

  return encontrado;
};

// Crea un mensaje de error para indicar que no se seleccionó ningún campo.
const errorDeFormulario = (accion: string): HTMLElement => {
  const p = document.createElement("p");
  p.classList.add("error");
  p.textContent = `No se seleccionó ningún campo para ${accion}.`;
  return p;
};

// Crea una tabla HTML basada en una lista de objetos JSON con sus claves y valores asociados.
const crearTabla = (
  titulo: string,
  data: any[],
  clavesFiltro: string[] = []
): HTMLTableElement => {
  const tabla = document.createElement("table");
  const caption = document.createElement("caption");

  caption.textContent = titulo;
  tabla.appendChild(caption);

  if (!data || data.length === 0) return tabla;

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

// Carga un archivo JSON desde la carpeta /data y lo retorna como una promesa.
const getJson = async (nombreArchivo: string): Promise<any> => {
  try {
    const response = await fetch(`../../data/${nombreArchivo}`);
    if (!response.ok) throw new Error(`No se pudo cargar ${nombreArchivo}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
