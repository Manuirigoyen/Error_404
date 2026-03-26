// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import Album from './components/Album';      
import Billetera from './components/Billetera';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tienda" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">🛒 Tienda</h2>
              <p className="lead text-center">Próximamente: Figuritas disponibles</p>
            </div>
          } />
          
          <Route path="/negociaciones" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">Negociaciones ⚖️</h2>
              <p className="lead text-center">Acá podes hacer negociaciones que haya disponibles</p>
            </div>
          } />

          <Route path="/ruleta" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">🎡 Ruleta</h2>
              <p className="lead text-center">Gana premios girando!</p>
            </div>
          } />
          <Route path="/perfil" element={
            <div className="container py-5 text-center">
              <h2 className="text-center mb-5">👤 Perfil</h2>
              <p className="lead text-center mb-4">Tus álbumes y estadísticas</p>
              
              {/* Contenedor para los dos botones */}
              <div className="d-flex justify-content-center gap-4 mt-5">
                <Link to="/album" className="btn btn-primary btn-lg">
                  Mi Álbum 📚
                </Link>
                <Link to="/billetera" className="btn btn-success btn-lg">
                  Mi Billetera 💼
                </Link>
              </div>
            </div>
          } />

          {/* Rutas individuales para Album y Billetera */}
          <Route path="/album" element={<Album />} />
          <Route path="/billetera" element={<Billetera />} />
          <Route path="*" element={
            <div className="container py-5 text-center">
              <h2>404 - Página no encontrada</h2>
              <p className="lead">
                <a href="/" className="btn btn-primary">Volver al inicio</a>
              </p>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;