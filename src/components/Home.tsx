/**
 * Componente Home principal de FigusApp.
 * Renderiza la página de inicio completa con header, video de presentación y beneficios.
 * @returns Elemento JSX de la página de inicio.
 */
export const Home = () => {
  return (
    <main id="mainContent" className="main-wrapper">
      <div className="position-relative">
        {getDivHeader()}

        <div className="container-fluid px-0">
          <div className="row g-0 align-items-start">
            <div className="col-xl-2 px-0">
              {getDivAnuncio()}
            </div>

            <div className="col-xl-8 px-0">
              {getDivPresentacion()}
            </div>

            <div className="col-xl-2 px-0">
              {getDivAnuncio()}
            </div>
          </div>
        </div>
      </div>

      {getDivPublicidad()}
    </main>
  );
};

/**
 * Renderiza el anuncio lateral fijo.
 * @returns Bloque de anuncio 300x250 con posición sticky.
 */
const getDivAnuncio = () => (
  <div
    className="ad-sidebar sticky-top"
    style={{ top: '100px', height: '100vh', maxHeight: '800px' }}
  >
    <div className="ad-unit bg-light border rounded-3 p-3 text-center h-100 d-flex flex-column justify-content-start">
      <p className="small text-muted mb-2">Anuncio 300x250</p>
      <div
        className="bg-warning ad-placeholder flex-grow-1 rounded"
        style={{ width: '100%', height: '250px', minHeight: '250px' }}
      >
        ADSENSE 300×250
      </div>
    </div>
  </div>
);

/**
 * Renderiza el header principal de bienvenida.
 * @returns Sección de título y descripción inicial.
 */
const getDivHeader = () => (
  <section className="header-section text-center py-5 position-relative z-index-1">
    <h1 className="fw-bold display-4 mb-4">Bienvenidos a FigusApp</h1>
    <p className="lead">
      Álbum oficial de las <strong>mejores selecciones del mundo</strong>!!
    </p>
  </section>
);

/**
 * Renderiza el video de presentación principal con contenido descriptivo.
 * @returns Video hero responsive con información del álbum debajo.
 */
const getDivPresentacion = () => (
  <>
    <div className="video-hero shadow rounded-4 overflow-hidden position-relative z-index-1">
      <video
        className="w-100"
        src="assets/vids/presentacion.mp4"
        poster="assets/img/fonts/portada.jpeg"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    <div className="mt-4 px-4">
      <h3 className="fw-bold mb-2 text-center">Álbum Virtual FigusApp</h3>

      <p className="lead">
        Coleccioná figuritas digitales de <strong className="fw-bold">Argentina, Brasil y Francia</strong> en una sola app.
      </p>

      <p>
        Intercambiá tus <strong className="fw-bold">figuritas repetidas</strong> con amigos y
        participá por <strong className="fw-bold">viajes gratis al completar los álbumes</strong>.
      </p>

      <ul className="list-unstyled mt-3">
        <li className="mb-2">
          <i className="bi bi-check-circle-fill text-primary me-2" />Figuritas digitales exclusivas
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle-fill text-primary me-2" />Intercambio en tiempo real con la comunidad
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle-fill text-primary me-2" />Viajes gratis al completar los álbumes
        </li>
      </ul>

      <p className="fw-bold fs-5 mt-4 text-center">
        ¡Empezá ahora y llevá tu pasión al siguiente nivel!
      </p>
    </div>
  </>
);

/**
 * Renderiza la sección de beneficios de FigusApp.
 * @returns Tres cards con ventajas principales de la aplicación.
 */
const getDivPublicidad = () => (
  <section className="beneficios-section text-center py-3 mt-0">
    <div className="container">
      <h3 className="fw-bold mb-5">¿Por qué elegir FigusApp?</h3>

      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card-beneficio bg-white p-4 border rounded-4 shadow h-100">
            <i className="bi bi-people-fill fs-1 text-primary mb-3 d-block mx-auto"></i>
            <h5 className="fw-bold mb-3">Comunidad Activa</h5>
            <p className="lead mb-0">
              Intercambiá <strong>figuritas</strong> con miles de jugadores de todo el mundo.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-beneficio bg-white p-4 border rounded-4 shadow h-100">
            <i className="bi bi-phone-fill fs-1 text-primary mb-3 d-block mx-auto"></i>
            <h5 className="fw-bold mb-3">100% Digital</h5>
            <p className="lead mb-0">
              Coleccioná figuritas y albums desde cualquier dispositivo.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-beneficio bg-white p-4 border rounded-4 shadow h-100">
            <i className="bi bi-trophy-fill fs-1 text-primary mb-3 d-block mx-auto"></i>
            <h5 className="fw-bold mb-3">Premios Reales</h5>
            <p className="lead mb-0">
              Ganá <strong>viajes y entradas a torneos</strong> completando tus álbumes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);