// src/components/FiguritaCard.tsx
import React from 'react';
import './FiguritaCard.css';
import { Figurita } from '../data/figuritasData'; // <-- Importamos la interfaz Figurita centralizada

// Ya no necesitas definir la interfaz Figurita aquí.
// interface Figurita {... }

interface FiguritaCardProps {
  figurita: Figurita;
  onFiguritaClick: (figuritaId: string) => void;
}

function FiguritaCard({ figurita, onFiguritaClick }: FiguritaCardProps) {
  const handleClick = () => {
    onFiguritaClick(figurita.id);
  };

  let imageSrc = figurita.backgroundImageUrl;
  let altText = figurita.isSpecial? figurita.specialImageAlt || `Figurita especial ${figurita.dataJugador}` : `Figurita ${figurita.id} de ${figurita.teamId}`;

  // Nota: figurita.isComplete aquí se refiere al estado en el álbum, no si está en la billetera
  if (!figurita.isComplete && figurita.isSpecial && figurita.coverImageUrl) {
    imageSrc = figurita.coverImageUrl;
    altText = 'Figurita especial oculta';
  }
  return (
    <div
      className={`card ${figurita.isComplete? 'completa' : ''} ${figurita.isSpecial? 'especial' : ''}`}
      onClick={handleClick}
      data-id={figurita.id}
    >
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default FiguritaCard;