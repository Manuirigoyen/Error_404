"use strict";

function renderizarBilletera() {
  const billeteraContenedor = document.getElementById("billetera-contenedor");
  if (!billeteraContenedor) return;

  billeteraContenedor.innerHTML = "";
  const billetera = JSON.parse(localStorage.getItem("billetera") || "{}");

  if (!Object.keys(billetera).length) {
    billeteraContenedor.innerHTML = "<p>No tenés figuritas repetidas</p>";
    return;
  }

  Object.entries(billetera).forEach(([id, data]) => {
    if (data.count > 0) {
      const figu = document.createElement("div");
      figu.className = "figu-repetida";
      figu.dataset.id = id;
      figu.style.backgroundImage = data.img;

      const contador = document.createElement("div");
      contador.className = "contador";
      contador.textContent = `x${data.count}`;
      figu.appendChild(contador);

      const botones = document.createElement("div");
      botones.className = "botones-billetera";

      const btnEliminar = document.createElement("button");
      btnEliminar.className = "btn-eliminar";
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        if (billetera[id].count > 1) {
          billetera[id].count--;
        } else {
          delete billetera[id];
        }
        localStorage.setItem("billetera", JSON.stringify(billetera));
        renderizarBilletera();
      });

      const btnIntercambiar = document.createElement("button");
      btnIntercambiar.className = "btn-intercambiar";
      btnIntercambiar.textContent = "Intercambiar";

      botones.appendChild(btnEliminar);
      botones.appendChild(btnIntercambiar);
      figu.appendChild(botones);

      billeteraContenedor.appendChild(figu);
    }
  });
}

// Ejecutar al cargar billetera.html
renderizarBilletera();
