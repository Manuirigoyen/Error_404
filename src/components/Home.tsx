/**
 * Componente Home principal de FigusApp.
 * Incluye header hero, carrusel responsive, presentación y features optimizadas.
 * @returns Elemento JSX de la página de inicio completa.
 */
export const Home = () => {
  return (
    <main id="mainContent" className="main-wrapper">
      {getDivHeader()}

      <section className="row align-items-center g-4">
        <div className="col-lg-8">
          {getDivCarrusel()}
        </div>

        {getDivPresentacion()}
      </section>

      {getDivPublicidad()}
    </main>
  );
};

/**
 * Genera el header hero de bienvenida.
 * @returns Sección hero con título y descripción principal.
 */
const getDivHeader = () => (
  <section className="text-center py-5">
    <h1 className="fw-bold display-4 text-primary mb-4">Bienvenidos a FigusApp</h1>
    <p className="lead">
      Álbum oficial de las <strong>mejores selecciones del mundo</strong>!!
    </p>
  </section>
);

/**
 * Genera el carrusel principal responsive.
 * @returns Carrusel Bootstrap con 4 imágenes de fondos.
 */
const getDivCarrusel = () => (
  <div
    id="carruselFigus"
    className="carousel slide shadow rounded-4 overflow-hidden w-100 carousel-figus"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="assets/img/fondos/carrusel_1.jpeg"
          className="d-block w-100 carrusel-img"
          alt="Colección Argentina"
        />
      </div>
      <div className="carousel-item">
        <img
          src="assets/img/fondos/carrusel_2.jpeg"
          className="d-block w-100 carrusel-img"
          alt="Colección Brasil"
        />
      </div>
      <div className="carousel-item">
        <img
          src="assets/img/fondos/carrusel_3.jpeg"
          className="d-block w-100 carrusel-img"
          alt="Colección Francia"
        />
      </div>
      <div className="carousel-item">
        <img
          src="assets/img/fondos/carrusel_4.jpeg"
          className="d-block w-100 carrusel-img"
          alt="Figuritas digitales"
        />
      </div>
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carruselFigus"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carruselFigus"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
);

/**
 * Genera la sección de presentación del álbum virtual.
 * @returns Columna con descripción y características principales.
 */
const getDivPresentacion = () => (
  <div className="col-lg-4">
    <h3 className="fw-bold mb-2 text-primary">Álbum Virtual FigusApp</h3>

    <p className="lead">
      Coleccioná figuritas digitales de <strong>Argentina, Brasil y Francia</strong> en una sola app.
    </p>

    <p>
      Intercambiá tus <strong>figuritas repetidas</strong> con amigos y
      participá por <strong>viajes gratis al completar los álbumes</strong>.
    </p>

    <ul className="list-unstyled mt-3">
      <li className="mb-2">
        <i className="bi bi-check-circle-fill text-primary me-2"></i>
        Figuritas digitales exclusivas
      </li>
      <li className="mb-2">
        <i className="bi bi-check-circle-fill text-primary me-2"></i>
        Intercambio en tiempo real con la comunidad
      </li>
      <li className="mb-2">
        <i className="bi bi-check-circle-fill text-primary me-2"></i>
        Viajes gratis al completar los álbumes
      </li>
    </ul>

    <p className="fw-bold text-primary fs-5 mt-3">
      ¡Empezá ahora y llevá tu pasión al siguiente nivel!
    </p>
  </div>
);

/**
 * Genera la sección de características con cards blancas.
 * @returns Tres cards responsive con fondo blanco y padding.
 */
const getDivPublicidad = () => (
  <section className="text-center py-5">
    <h3 className="fw-bold mb-5 text-primary">¿Por qué elegir FigusApp?</h3>
    
    <div className="container">
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 col-lg-4">
          <div className="feature-card bg-white p-4 border rounded-4 shadow h-100">
            <i className="bi bi-people-fill fs-1 text-primary mb-3 d-block mx-auto"></i>
            <h5 className="fw-bold mb-3">Comunidad Activa</h5>
            <p className="lead mb-0">
              Intercambiá <strong>figuritas</strong> con miles de jugadores.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-lg-4">
          <div className="feature-card bg-white p-4 border rounded-4 shadow h-100">
            <i className="bi bi-phone-fill fs-1 text-primary mb-3 d-block mx-auto"></i>
            <h5 className="fw-bold mb-3">100% Digital</h5>
            <p className="lead mb-0">
              Coleccioná desde cualquier dispositivo.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-lg-4">
          <div className="feature-card bg-white p-4 border rounded-4 shadow h-100">
            <i className="bi bi-trophy-fill fs-1 text-primary mb-3 d-block mx-auto"></i>
            <h5 className="fw-bold mb-3">Premios Reales</h5>
            <p className="lead mb-0">
              Ganá <strong>viajes gratis y premios</strong> completando álbumes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);