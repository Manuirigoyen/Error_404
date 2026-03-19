import React from 'react';
import './FiguritaCard.css';

interface Figurita {
  id: string;
  teamId: string;
  isSpecial: boolean;
  isComplete: boolean;
  backgroundImageUrl: string; 
  coverImageUrl?: string;
  specialImageAlt?: string;
  dataJugador?: string;
}

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