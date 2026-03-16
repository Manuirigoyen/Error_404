/**
 * Componente Footer renderizado con información legal, contacto, formulario de consultas,
 * redes sociales y métodos de pago.
 * @returns El elemento JSX del footer completo.
 */
export const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-white">
      <div className="container">
        <div className="row gy-4 justify-content-between">

          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mt-4">Legal</h6>
            {getDivLegales()}
            {getDivContacto()}
            <h6 className="fw-bold mt-4">Redes Sociales</h6>
            {getDivRedesSociales()}
          </div>

          <div className="col-lg-4 col-md-6">
            {getFormConsultas()}
          </div>

          <div className="col-lg-4 col-md-12">
            {getMetodosDePago()}
            {getDivLenguages()}
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Genera la lista de enlaces legales.
 * @returns Lista con enlaces a términos legales.
 */
const getDivLegales = () => (
  <ul className="list-unstyled mt-2">
    <li>
      <a
        href="https://en.wikipedia.org/wiki/Terms_of_service"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
        aria-label="Términos de Servicio"
      >
        Términos de Servicio
      </a>
    </li>
    <li>
      <a
        href="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
        aria-label="Política de Privacidad"
      >
        Política de Privacidad
      </a>
    </li>
    <li>
      <a
        href="https://es.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
        aria-label="Política de Cookies"
      >
        Política de Cookies
      </a>
    </li>
  </ul>
);

/**
 * Genera la sección de contacto.
 * @returns Fragmento con información de contacto.
 */
const getDivContacto = () => (
  <>
    <h6 className="fw-bold mt-4">Contáctanos</h6>
    <p className="mb-1">
      📞
      <a
        href="https://wa.me/5492983546783"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp +54 9 2983 546783"
      >
        +54 9 2983 546783
      </a>
    </p>
    <p className="mb-3">
      📧
      <a
        href="mailto:figusApp@gmail.com?subject=Consulta%20desde%20FigusApp"
        className="text-white text-decoration-none"
        aria-label="Enviar email a FigusApp"
      >
        figusApp@gmail.com
      </a>
    </p>
  </>
);

/**
 * Genera el formulario de consultas.
 * @returns Formulario de contacto.
 */
const getFormConsultas = () => (
  <div className="d-flex justify-content-center">
    <form className="w-100" aria-labelledby="consultas-title">
      <h6 id="consultas-title" className="fw-bold text-center mb-3">Consultas</h6>

      <select className="form-select mb-2" required aria-label="Motivo de la consulta">
        <option value="">Motivo de la consulta</option>
        <option value="soporte">Soporte</option>
        <option value="compras">Problemas con compras</option>
        <option value="sugerencias">Sugerencias</option>
      </select>

      <input
        type="email"
        className="form-control mb-2"
        placeholder="Tu correo"
        required
        aria-label="Tu dirección de correo electrónico"
      />

      <textarea
        className="form-control mb-2"
        rows={3}
        placeholder="Escribe tu consulta..."
        required
        aria-label="Escribe tu consulta aquí"
      />

      <div
        className="g-recaptcha mb-3 mx-auto d-block"
        data-sitekey="Clave"
        style={{ width: '302px', height: '78px' }}
      />

      <button
        id="btnEnviarConsulta"
        className="btn btn-light w-100 fw-bold"
        type="submit"
        disabled
      >
        Enviar
      </button>
    </form>
  </div>
);

/**
 * Genera los iconos de las tecnologias utilizadas.
 * @returns Contenedor con enlaces a la documentación de las tecnologias utilizadas.
 */
const getDivLenguages = () => (
  <div className="text-end">
    <div><h6 className="fw-bold">Tecnologías utilizadas</h6></div>
    <div className="d-flex gap-3 mt-4 justify-content-center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" aria-label="Documentación HTML5">
        <img src="assets/img/icons/html5.png" alt="HTML5" width="32" height="32" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" aria-label="Documentación CSS3">
        <img src="assets/img/icons/css3.png" alt="CSS3" width="32" height="32" />
      </a>
      <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" aria-label="Documentación TypeScript">
        <img src="assets/img/icons/typescript.png" alt="TypeScript" width="32" height="32" />
      </a>
      <a href="https://getbootstrap.com/docs/" target="_blank" rel="noopener noreferrer" aria-label="Documentación Bootstrap">
        <img src="assets/img/icons/bootstrap.png" alt="Bootstrap" width="32" height="32" />
      </a>
    </div>
    <div><p className="small mt-2">© 2025 - Actualidad | FigusApp</p></div>
    </div>
);

/**
 * Genera los iconos de redes sociales.
 * @returns Contenedor con enlaces a redes sociales.
 */
const getDivRedesSociales = () => (
  <div className="d-flex gap-3 mt-3">
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white fs-4" aria-label="WhatsApp" title="WhatsApp">
      <i className="bi bi-whatsapp"></i>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-4" aria-label="Instagram" title="Instagram">
      <i className="bi bi-instagram"></i>
    </a>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-4" aria-label="Facebook" title="Facebook">
      <i className="bi bi-facebook"></i>
    </a>
    <a href="mailto:figusApp@gmail.com" className="text-white fs-4" aria-label="Email" title="Enviar email">
      <i className="bi bi-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-4" aria-label="LinkedIn" title="LinkedIn">
      <i className="bi bi-linkedin"></i>
    </a>
  </div>
);

/**
 * Genera la sección de métodos de pago.
 * @returns Sección con logos de métodos de pago.
 */
const getMetodosDePago = () => (
  <div className="text-end">
    <h6 className="fw-bold">Métodos de Pago</h6>
    <div className="row g-0 justify-content-end">
      {getPagoItem("https://www.visa.com", "assets/img/icons/visa.jpeg", "Visa")}
      {getPagoItem("https://www.mastercard.com", "assets/img/icons/mastercard.jpeg", "Mastercard")}
      {getPagoItem("https://www.pagofacil.com.ar/", "assets/img/icons/pagoFacil.jpeg", "Pago Fácil")}
      {getPagoItem("https://www.rapipago.com.ar", "assets/img/icons/rapiPago.jpeg", "Rapi Pago")}
    </div>
    <div className="row g-0 justify-content-end">
      {getPagoItem("https://www.naranja.com", "assets/img/icons/naranja.jpeg", "Naranja X")}
      {getPagoItem("https://www.diner.com.ar", "assets/img/icons/diner.jpeg", "Diner")}
      {getPagoItem("https://www.cenco.com.ar", "assets/img/icons/cenco.jpeg", "Cenco")}
      {getPagoItem("https://www.america.com.ar", "assets/img/icons/america.jpeg", "America")}
    </div>
  </div>
);

/**
 * Genera un logo individual de método de pago.
 * @param link - URL del sitio del método de pago
 * @param img - Ruta de la imagen del logo
 * @param alt - Texto alternativo para accesibilidad
 * @returns Enlace con imagen del método de pago
 */
const getPagoItem = (link: string, img: string, alt: string) => (
  <div className="col-auto p-1">
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Pagar con ${alt}`}>
      <img src={img} alt={alt} width="45" height="30" className="img-fluid" />
    </a>
  </div>
);