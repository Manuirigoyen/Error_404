const sobres = [
  { id: 1, nombre: "Sobre 1" },
  { id: 2, nombre: "Sobre 2" },
  { id: 3, nombre: "Sobre 3" },
];

const albums = [
  { id: 1, nombre: "Álbum 1" },
  { id: 2, nombre: "Álbum 2" },
  { id: 3, nombre: "Álbum 3" },
];

const paises = [
  { id: 1, nombre: "Argentina" },
  { id: 2, nombre: "Brasil" },
  { id: 3, nombre: "Chile" },
];

function llenarSelect(
  selectId: string,
  opciones: { id: number; nombre: string }[],
  placeholder: string
): void {
  const selectElement = document.getElementById(
    selectId
  ) as HTMLSelectElement | null;
  if (!selectElement) {
    console.warn(`⚠️ No se encontró el select con id="${selectId}"`);
    return;
  }
  selectElement.innerHTML = "";
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);
  opciones.forEach((opcion) => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.id.toString();
    optionElement.textContent = opcion.nombre;
    selectElement.appendChild(optionElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  llenarSelect("sobre_figurita", sobres, "Seleccione un sobre");
  llenarSelect("sobre_figurita_eliminar", sobres, "Seleccione un sobre");
  llenarSelect("album_sobre_eliminar", albums, "Seleccione un álbum");
  llenarSelect("sobre_figurita_agregar", sobres, "Seleccione un sobre");
  llenarSelect("album_sobre_agregar", albums, "Seleccione un álbum");
  llenarSelect("pais_album_agregar", paises, "Seleccione un país");
  llenarSelect("sobre_figurita_modificar", sobres, "Seleccione un sobre");
  llenarSelect("album_sobre_modificar", albums, "Seleccione un álbum");
  llenarSelect("pais_album_modificar", paises, "Seleccione un país");
});
