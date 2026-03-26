// src/components/Billetera.tsx
import React, { useState, useEffect } from 'react';
import './Billetera.css'; // Importa el CSS de la billetera
import { ALL_FIGURITAS, Figurita } from '../data/figuritasData'; // <-- Importamos ALL_FIGURITAS y Figurita
import FiguritaCard from './FiguritaCard'; // <-- Importamos FiguritaCard

// Define la interfaz para una figurita en la billetera
interface BilleteraItemData {
  count: number;
  // Ya no necesitamos 'img' aquí, la imagen vendrá de FiguritaCard
  // img: string;
}

// Define la interfaz para el objeto de la billetera (mapa de ID a BilleteraItemData)
interface BilleteraState {
  [figuritaId: string]: BilleteraItemData;
}

// Props que recibirá el componente Billetera
interface BilleteraProps {
  // Ya no necesitamos pasar 'figuritas' como prop, porque ALL_FIGURITAS ya está importado
  // figuritas: FiguritaOriginal[];
}

const Billetera: React.FC<BilleteraProps> = () => { // Ya no recibe 'figuritas' como prop
  const [billetera, setBilletera] = useState<BilleteraState>({});

  // Cargar la billetera desde localStorage al inicio
  useEffect(() => {
    try {
      const storedBilleteraStr = localStorage.getItem('billetera');
      if (storedBilleteraStr) {
        setBilletera(JSON.parse(storedBilleteraStr));
      }
    } catch (error) {
      console.error("Error al cargar la billetera de localStorage:", error);
    }
  }, []);

  // Guardar la billetera en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('billetera', JSON.stringify(billetera));
  }, [billetera]);

  const handleEliminarFigurita = (figuritaId: string) => {
    setBilletera(prevBilletera => {
      const newBilletera = {...prevBilletera };
      if (newBilletera[figuritaId]) {
        if (newBilletera[figuritaId].count > 1) {
          newBilletera[figuritaId].count--;
        } else {
          delete newBilletera[figuritaId];
        }
      }
      return newBilletera;
    });
  };

  // Eliminamos getFiguritaImageInfo porque FiguritaCard manejará la lógica de la imagen
  // const getFiguritaImageInfo = (...) => {... };

  return (
    <section className="billetera-section">
      <h2>Mi Billetera de Figuritas Repetidas</h2>
      <h3>¡Intercambialas con amigos!</h3>
      <div className="figus-repetidas" id="billetera-contenedor">
        {Object.entries(billetera).length === 0? (
          <p className="empty-billetera">Tu billetera está vacía. ¡Consigue más figuritas para repetir!</p>
        ) : (
          Object.entries(billetera).map(([figuritaId, item]) => {
            // Buscamos la figurita completa en ALL_FIGURITAS
            const originalFigurita = ALL_FIGURITAS.find(f => f.id === figuritaId);

            if (!originalFigurita) {
              console.warn(`Figurita con ID ${figuritaId} encontrada en billetera pero no en ALL_FIGURITAS.`);
              return null; // Ocultar si no se encuentra la figurita original
            }

            // Creamos una copia de la figurita original y le seteamos isComplete a true
            // para que se muestre como "completa" en la billetera
            const figuritaParaBilletera: Figurita = {
             ...originalFigurita,
              isComplete: true, // Siempre mostrar como "completa" en la billetera
            };

            return (
              <div key={figuritaId} className="billetera-item-wrapper"> {/* Nuevo contenedor para cada item */}
                <FiguritaCard
                  figurita={figuritaParaBilletera} // Le pasamos la figurita adaptada
                  onFiguritaClick={() => { /* No hacer nada al clickear en la billetera */ }}
                />
                <div className="contador">x{item.count}</div>
                <div className="botones-billetera">
                  <button
                    className="btn-eliminar"
                    onClick={() => handleEliminarFigurita(figuritaId)}
                  >
                    Eliminar
                  </button>
                  <button className="btn-intercambiar">Intercambiar</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Billetera;