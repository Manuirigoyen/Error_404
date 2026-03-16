/**
 * Componente Header con navegación responsive React Router.
 * Incluye logo, menú hamburguesa y navegación general.
 * @returns Elemento JSX del header completo.
 */
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link className="navbar-brand" to="/">
          <img
            src="assets/img/icons/logo.png"
            alt="Logo principal FigusApp"
            style={{ 
              height: '90px',   
              width: '90px',
              padding: 0
            }}
          />
        </Link>

        {getButtonBurger()}

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item mx-lg-3">
              <Link
                to="/tienda"
                className="nav-link text-white btn btn-link"
                id="tiendaBtn"
              >
                Tienda 🛒
              </Link>
            </li>

            <li className="nav-item mx-lg-3">
              <Link
                to="/negociaciones"
                className="nav-link text-white btn btn-link"
                id="negociacionesBtn"
              >
                Intercambios ⚖️
              </Link>
            </li>

            <li className="nav-item mx-lg-3">
              <Link
                to="/ruleta"
                className="nav-link text-white btn btn-link"
                id="ruletaBtn"
              >
                Ruleta 🎡
              </Link>
            </li>

            <li className="nav-item mx-lg-3">
              <a className="nav-link text-white" href="#footer">
                Contacto 📞
              </a>
            </li>

            <li className="nav-item mx-lg-3">
              <Link
                to="/perfil"
                className="nav-link text-white btn btn-link"
                id="perfilBtn"
              >
                Perfil 👤
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

/**
 * Genera el botón hamburguesa para navegación móvil.
 * @returns Botón desplegable.
 */
const getButtonBurger = () => (
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarContent"
    aria-controls="navbarContent"
    aria-expanded="false"
    aria-label="Alternar navegación"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);
