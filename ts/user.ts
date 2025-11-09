// Datos de prueba
const usuario = {
  nombre: "usuario temporal",
  email: "temporal@email.com",
  password: "12345678",
};

// Cargar datos automáticamente al inicio
window.addEventListener("DOMContentLoaded", () => {
  // Mostrar nombre de usuario en bienvenida
  const usernameDisplay = document.getElementById(
    "usernameDisplay"
  ) as HTMLParagraphElement;
  if (usernameDisplay) usernameDisplay.textContent = usuario.nombre;

  // Mostrar datos actuales en los campos correspondientes
  const currentUsername = document.getElementById(
    "currentUsername"
  ) as HTMLDivElement;
  const currentEmail = document.getElementById(
    "currentEmail"
  ) as HTMLDivElement;
  const currentPassword = document.getElementById(
    "currentPassword"
  ) as HTMLDivElement;

  if (currentUsername) currentUsername.textContent = usuario.nombre;
  if (currentEmail) currentEmail.textContent = usuario.email;
  if (currentPassword) currentPassword.textContent = "********"; // Nunca mostrar la contraseña real
});

// Función general para manejar alert de actualización
function alertActualizado() {
  alert("Dato actualizado");
}

// Asociar botones de modificar con alert
const usernameBtn = document.getElementById("usernameBtn") as HTMLButtonElement;
const emailBtn = document.getElementById("emailBtn") as HTMLButtonElement;
const passwordBtn = document.getElementById("passwordBtn") as HTMLButtonElement;
const deleteBtn = document.getElementById("deleteBtn") as HTMLButtonElement;

usernameBtn?.addEventListener("click", alertActualizado);
emailBtn?.addEventListener("click", alertActualizado);
passwordBtn?.addEventListener("click", alertActualizado);
deleteBtn?.addEventListener("click", () => {
  const select = document.getElementById("deleteReason") as HTMLSelectElement;
  if (select && select.value) {
    alert(`Cuenta eliminada por motivo: ${select.value}`);
  } else {
    alert("Por favor, selecciona un motivo antes de eliminar la cuenta");
  }
});

// Botones inferiores
const btnCartera = document.getElementById("btnCartera") as HTMLButtonElement;
const btnAlbum = document.getElementById("btnAlbum") as HTMLButtonElement;
const btnRuleta = document.getElementById("btnRuleta") as HTMLButtonElement;

btnCartera?.addEventListener("click", () => alert("Cartera abierta"));
btnAlbum?.addEventListener("click", () => alert("Álbum abierto"));
btnRuleta?.addEventListener("click", () => alert("Ruleta abierta"));
