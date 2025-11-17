document.addEventListener("DOMContentLoaded", function () {
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

  function cargarOption(select: HTMLSelectElement, array: string[]): void {
    for (let i = 0; i < array.length; i++) {
      const option = document.createElement("option");
      option.value = array[i];
      option.textContent = array[i];
      select.appendChild(option);
    }
  }

  function cargarSelects(): void {
    const selects_sobre =
      document.querySelectorAll<HTMLSelectElement>(".cls_sobre");
    const selects_album =
      document.querySelectorAll<HTMLSelectElement>(".cls_album");
    const selects_figurita =
      document.querySelectorAll<HTMLSelectElement>(".cls_figurita");
    const selects_pais =
      document.querySelectorAll<HTMLSelectElement>(".cls_pais");

    for (let i = 0; i < selects_sobre.length; i++)
      cargarOption(selects_sobre[i], clases_sobre);
    for (let i = 0; i < selects_album.length; i++)
      cargarOption(selects_album[i], clases_album);
    for (let i = 0; i < selects_figurita.length; i++)
      cargarOption(selects_figurita[i], clases_figurita);
    for (let i = 0; i < selects_pais.length; i++)
      cargarOption(selects_pais[i], paises);
  }

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

  const hamburgerBtn =
    document.querySelector<HTMLButtonElement>(".hamburger_btn")!;
  const menuPrincipal = document.querySelector<HTMLElement>("#menu_principal")!;

  btn_listar.addEventListener("click", function () {
    toggleSubmenu(submenu_listar);
  });
  btn_agregar.addEventListener("click", function () {
    toggleSubmenu(submenu_agregar);
  });
  btn_modificar.addEventListener("click", function () {
    toggleSubmenu(submenu_modificar);
  });
  btn_eliminar.addEventListener("click", function () {
    toggleSubmenu(submenu_eliminar);
  });

  function toggleSubmenu(submenu: HTMLElement): void {
    const submenus = document.querySelectorAll<HTMLElement>(
      "#menu_secundario ul"
    );

    for (let i = 0; i < submenus.length; i++) {
      if (submenus[i] === submenu) {
        submenus[i].classList.toggle("submenuOculto");
      } else {
        submenus[i].classList.add("submenuOculto");
      }
    }
  }

  hamburgerBtn.addEventListener("click", function () {
    menuPrincipal.classList.toggle("menuOculto");

    const submenus = document.querySelectorAll<HTMLElement>(
      "#menu_secundario ul"
    );
    for (let i = 0; i < submenus.length; i++) {
      submenus[i].classList.add("submenuOculto");
    }
  });

  cargarSelects();
});
