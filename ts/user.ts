const usuario = {
  nombre: "usuario temporal",
  email: "temporal@email.com",
  password: "12345678",
};

window.addEventListener("DOMContentLoaded", () => {
  const usernameDisplay = document.getElementById(
    "usernameDisplay"
  ) as HTMLParagraphElement | null;
  if (usernameDisplay) usernameDisplay.textContent = usuario.nombre;

  const usernameInput = document.getElementById(
    "usernameInput"
  ) as HTMLInputElement | null;
  const emailInput = document.getElementById(
    "emailInput"
  ) as HTMLInputElement | null;
  const passwordInput = document.getElementById(
    "passwordInput"
  ) as HTMLInputElement | null;

  if (usernameInput) usernameInput.placeholder = usuario.nombre;
  if (emailInput) emailInput.placeholder = usuario.email;
  if (passwordInput) passwordInput.placeholder = "********";
});

function alertActualizado() {
  alert("Dato actualizado");
}

const usernameBtn = document.getElementById(
  "usernameBtn"
) as HTMLButtonElement | null;
const emailBtn = document.getElementById(
  "emailBtn"
) as HTMLButtonElement | null;
const passwordBtn = document.getElementById(
  "passwordBtn"
) as HTMLButtonElement | null;
const deleteBtn = document.getElementById(
  "deleteBtn"
) as HTMLButtonElement | null;

usernameBtn?.addEventListener("click", alertActualizado);
emailBtn?.addEventListener("click", alertActualizado);
passwordBtn?.addEventListener("click", alertActualizado);

deleteBtn?.addEventListener("click", () => {
  const select = document.getElementById(
    "deleteReason"
  ) as HTMLSelectElement | null;
  if (select && select.value) {
    alert(`Cuenta eliminada por motivo: ${select.value}`);
  } else {
    alert("Por favor, selecciona un motivo antes de eliminar la cuenta");
  }
});

const btnCartera = document.getElementById(
  "btnCartera"
) as HTMLButtonElement | null;
const btnAlbum = document.getElementById(
  "btnAlbum"
) as HTMLButtonElement | null;
const btnRuleta = document.getElementById(
  "btnRuleta"
) as HTMLButtonElement | null;

btnCartera?.addEventListener("click", () => alert("Cartera abierta"));
btnAlbum?.addEventListener("click", () => alert("Álbum abierto"));
btnRuleta?.addEventListener("click", () => alert("Ruleta abierta"));
