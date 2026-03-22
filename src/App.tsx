import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Ruleta } from './components/Ruleta';

import './App.css';


//perfil, album, y billetera no es un action, solo es para pruebas, el resto lo maneja el router del backend no del frontend
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
          <Route path="/ruleta" element={<Ruleta />} />
          <Route path="/login" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">🔑 Login</h2>
              <p className="lead text-center">Inicia sesión para acceder a tu perfil</p>
            </div>
          } />
          <Route path="/register" element={
            <div className="container py-5">
              <h2 className="text-center mb-5">📝 Register</h2>
              <p className="lead text-center">Regístrate para crear tu cuenta</p>
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
