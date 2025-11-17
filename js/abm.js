document.addEventListener("DOMContentLoaded", function () {
    var clases_figurita = ["Comun", "Especial", "Legendaria"];
    var clases_sobre = ["Gris", "Dorado", "Premium"];
    var clases_album = ["Mundial", "Continental", "Nacional", "Local"];
    var paises = [
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
    function cargarOption(select, array) {
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.textContent = array[i];
            select.appendChild(option);
        }
    }
    function cargarSelects() {
        var selects_sobre = document.querySelectorAll(".cls_sobre");
        var selects_album = document.querySelectorAll(".cls_album");
        var selects_figurita = document.querySelectorAll(".cls_figurita");
        var selects_pais = document.querySelectorAll(".cls_pais");
        for (var i = 0; i < selects_sobre.length; i++)
            cargarOption(selects_sobre[i], clases_sobre);
        for (var i = 0; i < selects_album.length; i++)
            cargarOption(selects_album[i], clases_album);
        for (var i = 0; i < selects_figurita.length; i++)
            cargarOption(selects_figurita[i], clases_figurita);
        for (var i = 0; i < selects_pais.length; i++)
            cargarOption(selects_pais[i], paises);
    }
    var btn_listar = document.getElementById("btn_listar");
    var btn_agregar = document.getElementById("btn_agregar");
    var btn_modificar = document.getElementById("btn_modificar");
    var btn_eliminar = document.getElementById("btn_eliminar");
    var submenu_listar = document.getElementById("submenu_listar");
    var submenu_agregar = document.getElementById("submenu_agregar");
    var submenu_modificar = document.getElementById("submenu_modificar");
    var submenu_eliminar = document.getElementById("submenu_eliminar");
    var hamburgerBtn = document.querySelector(".hamburger_btn");
    var menuPrincipal = document.querySelector("#menu_principal");
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
    function toggleSubmenu(submenu) {
        var submenus = document.querySelectorAll("#menu_secundario ul");
        for (var i = 0; i < submenus.length; i++) {
            if (submenus[i] === submenu) {
                submenus[i].classList.toggle("submenuOculto");
            }
            else {
                submenus[i].classList.add("submenuOculto");
            }
        }
    }
    hamburgerBtn.addEventListener("click", function () {
        menuPrincipal.classList.toggle("menuOculto");
        var submenus = document.querySelectorAll("#menu_secundario ul");
        for (var i = 0; i < submenus.length; i++) {
            submenus[i].classList.add("submenuOculto");
        }
    });
    cargarSelects();
});
