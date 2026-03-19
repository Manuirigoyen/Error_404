import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

import './App.css';

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
              <h2 className="text-center mb-5">⚖️ Negociaciones</h2>
              <p className="lead text-center">Intercambio de figuritas</p>
            </div>
          } />
          <Route path="/ruleta" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">🎡 Ruleta</h2>
              <p className="lead text-center">Gana premios girando!</p>
            </div>
          } />
          <Route path="/perfil" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">👤 Perfil</h2>
              <p className="lead text-center">Tus álbumes y estadísticas</p>
            </div>
          } />
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
