const perfilBtn = document.getElementById("perfilBtn");
const ruletaBtn = document.getElementById("ruletaBtn");
const billeteraBtn = document.getElementById("billeteraBtn");
const tiendaBtn = document.getElementById("tiendaBtn");
const btnEnviarConsulta = document.getElementById("btnEnviarConsulta");
const mainContent = document.getElementById("mainContent");

btnEnviarConsulta?.addEventListener("click", (e) => {
  e.preventDefault();
  const form = btnEnviarConsulta.closest("form");
  if (!form) return;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const alertDiv = document.createElement("div");
  alertDiv.innerHTML = showSuccessMessage();
  form.prepend(alertDiv);
});

perfilBtn?.addEventListener("click", async () => {
  let role = null;
  do {
    role =
      prompt("Ingresa tu rol de usuario: 'comun' o 'administrador'")?.trim().toLowerCase() ||
      null;
    if (role !== "comun" && role !== "administrador") {
      alert("Rol incorrecto. Debes ingresar 'comun' o 'administrador'.");
      role = null;
    }
  } while (!role);

  if (role === "comun") {
    await loadSection(
      "../pages/user/user.html",
      "../src/css/user.css",
      "data-user-css",
      "../js/user.js",
      "data-user-js"
    );
  } else if (role === "administrador") {
    await loadSection(
      "../pages/abm/abm.html",
      "../src/css/abm.css",
      "data-abm-css",
      "../js/abm.js",
      "data-abm-js"
    );
  }
});

ruletaBtn?.addEventListener("click", async () => {
  await loadSection(
    "../pages/ruleta/ruleta.html",
    "../src/css/ruleta.css",
    "data-ruleta-css",
    "../js/ruleta.js",
    "data-ruleta-js"
  );
});

billeteraBtn?.addEventListener("click", async () => {
  await loadSection(
    "../pages/billetera/billetera.html",
    "../src/css/billetera.css",
    "data-billetera-css",
    "../js/billetera.js",      
    "data-billetera-js"
  );

  setTimeout(() => {
    if (typeof renderizarBilletera === "function") {
      renderizarBilletera();
    }
  }, 200);
});

tiendaBtn?.addEventListener("click", async () => {
  await loadSection(
    "../pages/tienda/tienda.html",
    "../src/css/tienda.css",
    "data-tienda-css",
    "../js/tienda.js",
    "data-tienda-js"
  );
});

/* Elimina links/scripts dinámicos previos (busca data-*-css / data-*-js o data-section-*) */
function removeDynamicAssets() {
  // enlaces
  document.querySelectorAll("link").forEach((link) => {
    for (const name of link.getAttributeNames()) {
      if (name.startsWith("data-") && (name.endsWith("-css") || name === "data-section-css")) {
        link.remove();
        return;
      }
    }
  });
  // scripts
  document.querySelectorAll("script").forEach((script) => {
    for (const name of script.getAttributeNames()) {
      if (name.startsWith("data-") && (name.endsWith("-js") || name === "data-section-js")) {
        script.remove();
        return;
      }
    }
  });
}

/* Carga CSS de sección y marca el link con atributos para poder eliminarlo luego */
export function loadCss(href, dataAttr) {
  return new Promise((resolve) => {
    document.querySelectorAll("link[data-section-css]").forEach((n) => n.remove());
    if (!href) return resolve(true);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    if (dataAttr) link.setAttribute(dataAttr, "true");
    link.setAttribute("data-section-css", "true");
    link.onload = () => resolve(true);
    link.onerror = () => resolve(false);
    document.head.appendChild(link);
  });
}

/* Carga JS de sección (module) y marca el script para poder eliminarlo luego */
export function loadJs(src, dataAttr) {
  return new Promise((resolve) => {
    if (dataAttr) {
      const existing = document.querySelector(`script[${dataAttr}]`);
      if (existing) existing.remove();
    }
    document.querySelectorAll("script[data-section-js]").forEach((n) => n.remove());
    if (!src) return resolve(true);
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    if (dataAttr) script.setAttribute(dataAttr, "true");
    script.setAttribute("data-section-js", "true");
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/* Carga un partial HTML, inyecta el contenido y ejecuta scripts (inline y externos),
además administra la carga/limpieza de assets de sección. */
async function loadSection(htmlPath, cssPath, cssDataAttr, jsPath, jsDataAttr) {
  try {
    removeDynamicAssets();

    const response = await fetch(htmlPath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const html = await response.text();

    let content = html;
    if (/<\s*html|<!doctype/i.test(html)) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      content = doc.body.innerHTML;
    }

    const tmp = document.createElement("div");
    tmp.innerHTML = content;
    const scripts = Array.from(tmp.querySelectorAll("script"));
    scripts.forEach((s) => s.remove());

    if (!mainContent) throw new Error("#mainContent no encontrado");
    mainContent.innerHTML = tmp.innerHTML;

    await loadCss(cssPath, cssDataAttr);

    for (const s of scripts) {
      if (!s.src) {
        const inline = document.createElement("script");
        if (s.type) inline.type = s.type;
        inline.textContent = s.textContent;
        document.body.appendChild(inline);
        document.body.removeChild(inline);
      }
    }

    await loadJs(jsPath, jsDataAttr);

    for (const s of scripts) {
      if (s.src) {
        const ext = document.createElement("script");
        if (s.type) ext.type = s.type;
        ext.src = s.src;
        document.body.appendChild(ext);
      }
    }
  } catch (error) {
    mainContent.innerHTML = showErrorMessage(error);
    console.error("loadSection:", error);
  }
}

export function showErrorMessage(message) {
  return `
<div class="alert alert-danger mt-4" role="alert">
<h4 class="alert-heading">Error</h4>
<p>Ocurrió un problema al procesar la solicitud.</p>
<hr>
<p class="mb-0"><strong>Detalle:</strong> ${message}</p>
</div>
`;
}

export function showSuccessMessage() {
  return `
<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
¡Gracias por tu consulta! Nos pondremos en contacto pronto.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
}
