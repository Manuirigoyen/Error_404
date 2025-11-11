var sobres = [
    { id: 1, nombre: "Sobre 1" },
    { id: 2, nombre: "Sobre 2" },
    { id: 3, nombre: "Sobre 3" },
];
var albums = [
    { id: 1, nombre: "Álbum 1" },
    { id: 2, nombre: "Álbum 2" },
    { id: 3, nombre: "Álbum 3" },
];
function llenarSelect(selectId, opciones) {
    var selectElement = document.getElementById(selectId);
    selectElement.innerHTML = "";
    opciones.forEach(function (opcion) {
        var optionElement = document.createElement("option");
        optionElement.value = opcion.id.toString();
        optionElement.textContent = opcion.nombre;
        selectElement.appendChild(optionElement);
    });
}
window.onload = function () {
    llenarSelect("sobre_figurita", sobres);
    llenarSelect("album_sobre", albums);
    llenarSelect("sobre_figurita_eliminar", sobres);
    llenarSelect("album_sobre_eliminar", albums);
};
