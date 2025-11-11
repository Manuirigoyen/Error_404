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

function llenarSelect(
  selectId: string,
  opciones: { id: number; nombre: string }[]
) {
  const selectElement = document.getElementById(selectId) as HTMLSelectElement;
  selectElement.innerHTML = "";

  opciones.forEach((opcion) => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.id.toString();
    optionElement.textContent = opcion.nombre;
    selectElement.appendChild(optionElement);
  });
}

window.onload = () => {
  llenarSelect("sobre_figurita", sobres);
  llenarSelect("album_sobre", albums);
  llenarSelect("sobre_figurita_eliminar", sobres);
  llenarSelect("album_sobre_eliminar", albums);
};
