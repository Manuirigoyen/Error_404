"use strict";

function asignarImagenEspecial(card: HTMLElement, teamId: string): void {
  const img = card.querySelector("img") as HTMLImageElement | null;
  if (!img) return;

  const imagenes: {
    [key: string]: { src: string; alt: string };
  } = {
    argentina: { src: "/assets/img/fondos/Argentina/15.jpg", alt: "Maradona" },
    brasil: { src: "/assets/img/fondos/Brasil/15.jpg", alt: "Pelé" },
    francia: { src: "/assets/img/fondos/Francia/15.jpg", alt: "Zidane" },
  };

  if (imagenes[teamId]) {
    img.src = imagenes[teamId].src;
    img.alt = imagenes[teamId].alt;
  }
}

function actualizarProgresoEquipo(team: HTMLElement): void {
  const cards = team.querySelectorAll(".card") as NodeListOf<HTMLElement>;
  const bandera = team.querySelector(".bandera") as HTMLElement | null;
  const progressBar = team.querySelector(".progress-bar") as HTMLElement | null;
  const progressText = team.querySelector(
    ".progress-text"
  ) as HTMLElement | null;

  if (!progressBar || !progressText || !bandera) return;

  const totalCards = cards.length;
  const completadas = Array.from(cards).filter((c) =>
    c.classList.contains("completa")
  ).length;

  const porcentaje = Math.round((completadas / totalCards) * 100);

  progressBar.style.width = porcentaje + "%";
  progressText.textContent = `Progreso: ${porcentaje}%`;

  if (porcentaje <= 33) progressBar.style.background = "#e53935";
  else if (porcentaje <= 66) progressBar.style.background = "#fdd835";
  else progressBar.style.background = "#43a047";

  if (completadas === totalCards && !bandera.classList.contains("color")) {
    bandera.classList.add("color");
  }

  mostrarMensajeFinal();
}

function mostrarMensajeFinal(): void {
  const equipos = document.querySelectorAll(".team") as NodeListOf<HTMLElement>;
  if (!equipos.length) return;

  let todosCompletos = true;

  equipos.forEach((team) => {
    const cards = team.querySelectorAll(".card") as NodeListOf<HTMLElement>;
    const total = cards.length;
    const completas = Array.from(cards).filter((c) =>
      c.classList.contains("completa")
    ).length;
    if (completas < total) todosCompletos = false;
  });

  const incompleto = document.getElementById("mensaje-incompleto");
  const completo = document.getElementById("mensaje-completo");

  if (todosCompletos) {
    incompleto?.classList.add("oculto");
    completo?.classList.remove("oculto");
  } else {
    completo?.classList.add("oculto");
    incompleto?.classList.remove("oculto");
  }
}

// Inicializar álbum
document.querySelectorAll(".team").forEach((team) => {
  const teamElement = team as HTMLElement;
  const cards = teamElement.querySelectorAll(
    ".card"
  ) as NodeListOf<HTMLElement>;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.id as string;
      let img = card.style.backgroundImage;

      if (!img || img === "none") {
        const imgTag = card.querySelector("img") as HTMLImageElement | null;
        if (imgTag) img = `url("${imgTag.src}")`;
      }

      // Primer clic → álbum
      if (!card.classList.contains("completa")) {
        card.classList.add("completa");

        if (card.classList.contains("especial")) {
          asignarImagenEspecial(card, teamElement.id);
        }

        actualizarProgresoEquipo(teamElement);
        return;
      }

      // Clics siguientes → billetera
      const billetera = JSON.parse(
        localStorage.getItem("billetera") || "{}"
      ) as {
        [key: string]: { count: number; img: string };
      };

      billetera[id] = billetera[id] || { count: 0, img };
      billetera[id].count++;

      localStorage.setItem("billetera", JSON.stringify(billetera));
    });
  });

  actualizarProgresoEquipo(teamElement);
});

mostrarMensajeFinal();

// Menú hamburguesa
const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
const navLinks = document.querySelector(".nav-links") as HTMLElement | null;

hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("show");
});
