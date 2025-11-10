// Datos de prueba
var usuario = {
    nombre: "usuario temporal",
    email: "temporal@email.com",
    password: "12345678",
};
// Cargar datos automáticamente al inicio
window.addEventListener("DOMContentLoaded", function () {
    // Mostrar nombre de usuario en bienvenida
    var usernameDisplay = document.getElementById("usernameDisplay");
    if (usernameDisplay)
        usernameDisplay.textContent = usuario.nombre;
    // Seleccionar inputs
    var usernameInput = document.getElementById("usernameInput");
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");
    // Asignar datos actuales como placeholder
    if (usernameInput)
        usernameInput.placeholder = usuario.nombre;
    if (emailInput)
        emailInput.placeholder = usuario.email;
    if (passwordInput)
        passwordInput.placeholder = "********"; // nunca mostrar contraseña real
});
// Función general para manejar alert de actualización
function alertActualizado() {
    alert("Dato actualizado");
}
// Asociar botones de modificar con alert
var usernameBtn = document.getElementById("usernameBtn");
var emailBtn = document.getElementById("emailBtn");
var passwordBtn = document.getElementById("passwordBtn");
var deleteBtn = document.getElementById("deleteBtn");
usernameBtn === null || usernameBtn === void 0 ? void 0 : usernameBtn.addEventListener("click", alertActualizado);
emailBtn === null || emailBtn === void 0 ? void 0 : emailBtn.addEventListener("click", alertActualizado);
passwordBtn === null || passwordBtn === void 0 ? void 0 : passwordBtn.addEventListener("click", alertActualizado);
deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", function () {
    var select = document.getElementById("deleteReason");
    if (select && select.value) {
        alert("Cuenta eliminada por motivo: ".concat(select.value));
    }
    else {
        alert("Por favor, selecciona un motivo antes de eliminar la cuenta");
    }
});
// Botones inferiores
var btnCartera = document.getElementById("btnCartera");
var btnAlbum = document.getElementById("btnAlbum");
var btnRuleta = document.getElementById("btnRuleta");
btnCartera === null || btnCartera === void 0 ? void 0 : btnCartera.addEventListener("click", function () { return alert("Cartera abierta"); });
btnAlbum === null || btnAlbum === void 0 ? void 0 : btnAlbum.addEventListener("click", function () { return alert("Álbum abierto"); });
btnRuleta === null || btnRuleta === void 0 ? void 0 : btnRuleta.addEventListener("click", function () { return alert("Ruleta abierta"); });
