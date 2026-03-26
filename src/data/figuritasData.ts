// src/data/figuritasData.ts

// 1. Interfaz Figurita unificada (la misma que tienes en Album.tsx y FiguritaCard.tsx)
export interface Figurita {
  id: string;
  teamId: string;
  isSpecial: boolean;
  isComplete: boolean;
  backgroundImageUrl: string;
  coverImageUrl?: string;
  specialImageUrl?: string;
  specialImageAlt?: string;
  dataJugador?: string;
}

// 2. Datos ALL_FIGURITAS (tu initialFiguritasData de Album.tsx)
export const ALL_FIGURITAS: Figurita[] = [
  // Argentina
  { id: 'figu01', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/1.jpg' },
  { id: 'figu02', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/2.jpg' },
  { id: 'figu03', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/3.jpg' },
  { id: 'figu04', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/4.jpg' },
  { id: 'figu05', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/5.jpg' },
  { id: 'figu06', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/6.jpg' },
  { id: 'figu07', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/7.jpg' },
  { id: 'figu08', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/8.jpg' },
  { id: 'figu09', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/9.jpg' },
  { id: 'figu10', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/10.jpg' },
  { id: 'figu11', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/11.jpg' },
  { id: 'figu12', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/pelota.jpg' },
  { id: 'figu13', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/hinchada.jpg' },
  { id: 'figu14', teamId: 'argentina', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Argentina/copa.jpg' },
  { id: 'figu15', teamId: 'argentina', isSpecial: true, isComplete: false, backgroundImageUrl: '/assets/img/fonts/jugadorsorpresa.jpeg', specialImageUrl: '/assets/img/fonts/Argentina/15.jpg', specialImageAlt: 'Maradona', dataJugador: 'Maradona' },
  // Brasil
  { id: 'figu16', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/1.jpg' },
  { id: 'figu17', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/2.jpg' },
  { id: 'figu18', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/3.jpg' },
  { id: 'figu19', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/4.jpg' },
  { id: 'figu20', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/5.jpg' },
  { id: 'figu21', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/6.jpg' },
  { id: 'figu22', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/7.jpg' },
  { id: 'figu23', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/8.jpg' },
  { id: 'figu24', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/9.jpg' },
  { id: 'figu25', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/10.png' },
  { id: 'figu26', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/11.jpg' },
  { id: 'figu27', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/escudo.jpg' },
  { id: 'figu28', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/hinchada.jpg' },
  { id: 'figu29', teamId: 'brasil', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Brasil/copa.jpg' },
  { id: 'figu30', teamId: 'brasil', isSpecial: true, isComplete: false, backgroundImageUrl: '/assets/img/fonts/jugadorsorpresa.jpeg', specialImageUrl: '/assets/img/fonts/Brasil/15.jpg', specialImageAlt: 'Pelé', dataJugador: 'Pele' },
  // Francia
  { id: 'figu31', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/1.jpg' },
  { id: 'figu32', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/2.jpg' },
  { id: 'figu33', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/3.jpg' },
  { id: 'figu34', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/4.jpg' },
  { id: 'figu35', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/5.jpg' },
  { id: 'figu36', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/6.jpg' },
  { id: 'figu37', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/7.jpg' },
  { id: 'figu38', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/8.jpg' },
  { id: 'figu39', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/9.jpg' },
  { id: 'figu40', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/10.jpg' },
  { id: 'figu41', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/11.jpg' },
  { id: 'figu42', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/Camiseta.jpg' },
  { id: 'figu43', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/hinchada.jpg' },
  { id: 'figu44', teamId: 'francia', isSpecial: false, isComplete: false, backgroundImageUrl: '/assets/img/fonts/Francia/copa.jpg' },
  { id: 'figu45', teamId: 'francia', isSpecial: true, isComplete: false, backgroundImageUrl: '/assets/img/fonts/jugadorsorpresa.jpeg', specialImageUrl: '/assets/img/fonts/Francia/15.jpg', specialImageAlt: 'Zidane', dataJugador: 'Zidane' },
];