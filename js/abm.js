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
var paises = [
    { id: 1, nombre: "Argentina" },
    { id: 2, nombre: "Brasil" },
    { id: 3, nombre: "Chile" },
];
function llenarSelect(selectId, opciones, placeholder) {
    var selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.warn("\u26A0\uFE0F No se encontr\u00F3 el select con id=\"".concat(selectId, "\""));
        return;
    }
    selectElement.innerHTML = "";
    var placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = placeholder;
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.appendChild(placeholderOption);
    opciones.forEach(function (opcion) {
        var optionElement = document.createElement("option");
        optionElement.value = opcion.id.toString();
        optionElement.textContent = opcion.nombre;
        selectElement.appendChild(optionElement);
    });
}
document.addEventListener("DOMContentLoaded", function () {
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
