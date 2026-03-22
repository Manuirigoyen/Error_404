import React, { useEffect, useState, useCallback, useMemo } from 'react';
import FiguritaCard from './FiguritaCard';
import './album.css';
import './FiguritaCard.css';

interface Figurita {
  id: string;
  teamId: string;
  isSpecial: boolean;
  isComplete: boolean;
  backgroundImageUrl: string;
  specialImageUrl?: string;
  specialImageAlt?: string;
  dataJugador?: string;
}

interface BilleteraItem {
  count: number;
}

interface Billetera {
  [figuritaId: string]: BilleteraItem;
}

export const Album: React.FC = () => {
  const [figuritas, setFiguritas] = useState<Figurita[]>([]);
  const [billetera, setBilletera] = useState<Billetera>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initialFiguritasData = useMemo<Figurita[]>(() => ([
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
  ]), []);

  useEffect(() => {
    let loadedBilletera: Billetera = {};
    try {
      const storedBilleteraStr = localStorage.getItem('billetera');
      if (storedBilleteraStr) {
        loadedBilletera = JSON.parse(storedBilleteraStr);
        setBilletera(loadedBilletera);
      }
    } catch (e) {
      console.error('Error al cargar la billetera del localStorage:', e);
      setError('No se pudo cargar la billetera del localStorage.');
    }

    const figuritasWithInitialState = initialFiguritasData.map(fig => ({
      ...fig,
      isComplete: !!loadedBilletera[fig.id],
    }));
    setFiguritas(figuritasWithInitialState);
    setIsLoading(false);
  }, [initialFiguritasData]);

  useEffect(() => {
    localStorage.setItem('billetera', JSON.stringify(billetera));
  }, [billetera]);

  const handleFiguritaClick = useCallback((clickedFiguritaId: string) => {
    setFiguritas(prevFiguritas =>
      prevFiguritas.map(fig => {
        if (fig.id === clickedFiguritaId) {
          if (!fig.isComplete) {
            console.log(`Figurita ${fig.id} marcada como completa.`);
            return { ...fig, isComplete: true };
          } else {
            console.log(`Figurita ${fig.id} añadida a la billetera.`);
            setBilletera(prevBilletera => {
              const newCount = (prevBilletera[fig.id]?.count || 0) + 1;
              return {
                ...prevBilletera,
                [fig.id]: { count: newCount },
              };
            });
            return fig;
          }
        }
        return fig;
      })
    );
  }, []);

  const equiposAgrupados = useMemo(() => {
    const teamMap = new Map<string, {
      name: string;
      banderaIcono: string;
      descripcion: string;
      banderaPrincipal: string;
      figuritas: Figurita[];
    }>();

    const teamsInfo = {
      argentina: {
        name: 'Argentina',
        banderaIcono: '/assets/img/fonts/Argentina/banderaArg.jpg',
        descripcion:
          'La Selección Argentina de Fútbol es el equipo nacional que representa a la Argentina en competiciones internacionales...',
        banderaPrincipal: '/assets/img/fonts/Argentina/banderaArg.jpg',
      },
      brasil: {
        name: 'Brasil',
        banderaIcono: '/assets/img/fonts/Brasil/banderaicono.jpg',
        descripcion:
          'La Selección de Brasil de Fútbol, conocida como la “Canarinha”, es la más ganadora en la historia de los Mundiales...',
        banderaPrincipal: '/assets/img/fonts/Brasil/banderaBra.jpg',
      },
      francia: {
        name: 'Francia',
        banderaIcono: '/assets/img/fonts/Francia/banderaicono.jpg',
        descripcion:
          'La Selección de Francia de Fútbol, conocida como “Les Bleus”, es una de las potencias más importantes del fútbol mundial...',
        banderaPrincipal: '/assets/img/fonts/Francia/BanderaFra.jpg',
      },
    };

    figuritas.forEach(fig => {
      if (!teamMap.has(fig.teamId)) {
        const info = teamsInfo[fig.teamId as keyof typeof teamsInfo];
        teamMap.set(fig.teamId, { ...info, figuritas: [] });
      }
      const team = teamMap.get(fig.teamId);
      if (team) {
        team.figuritas.push(fig);
      }
    });

    return Array.from(teamMap.values());
  }, [figuritas]);

  const allFiguritasComplete = useMemo(
    () => figuritas.length > 0 && figuritas.every(fig => fig.isComplete),
    [figuritas]
  );

  if (isLoading) {
    return (
      <div className="album-container">
        <h1 className="main-title">Cargando Álbum de Figuritas...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="album-container error-message">
        <h1 className="main-title">Error al cargar el Álbum</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="album" id="album-react">
      <h1 className="main-title">
        Bienvenidos a Figusapp álbum oficial de las mejores selecciones del mundo!!
      </h1>

      {equiposAgrupados.map(team => {
        const totalCards = team.figuritas.length;
        const completadas = team.figuritas.filter(fig => fig.isComplete).length;
        const porcentaje = Math.round((completadas / totalCards) * 100);

        let progressBarColor = '#e53935';
        if (porcentaje > 33 && porcentaje <= 66) progressBarColor = '#fdd835';
        if (porcentaje > 66) progressBarColor = '#43a047';

        const isTeamComplete = completadas === totalCards;

        return (
          <div key={team.name} id={team.name.toLowerCase()} className="team">
            <h2 className="titulo-seleccion">
              {team.name}
              <img
                src={team.banderaIcono}
                alt={`Bandera ${team.name}`}
                className="icono-bandera"
              />
            </h2>
            <div className="album-layout">
              <div className="contenido-album">
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${porcentaje}%`, backgroundColor: progressBarColor }}
                  />
                  <span className="progress-text">Progreso: {porcentaje}%</span>
                </div>
                <div className="cards">
                  {team.figuritas.map(fig => (
                    <FiguritaCard
                      key={fig.id}
                      figurita={fig}
                      onFiguritaClick={handleFiguritaClick}
                    />
                  ))}
                </div>
              </div>
              <div className="contenedor-band-desc">
                <p className="descripcion">{team.descripcion}</p>
                <img
                  src={team.banderaPrincipal}
                  alt={`Bandera ${team.name}`}
                  className={`bandera ${isTeamComplete ? 'color' : ''}`}
                />
              </div>
            </div>
          </div>
        );
      })}

      <div id="promo-final" className="promo-final">
        <div
          id="mensaje-incompleto"
          className={`mensaje ${allFiguritasComplete ? 'oculto' : ''}`}
        >
          <h4>Completa el álbum</h4>
          <h3>y GANÁ</h3>
          <h2>PREMIOS INCREIBLES!!!!</h2>
          <p>Viajes a elección: Colombia, México o Brasil!!!</p>
        </div>
        <div
          id="mensaje-completo"
          className={`mensaje ${!allFiguritasComplete ? 'oculto' : ''}`}
        >
          <h2>FELICIDADES!!</h2>
          <h3>Completaste el álbum!</h3>
          <a href="#" className="boton-viaje">
            CLICK <br />
            AQUÍ
          </a>
          <svg className="svg-curvo" viewBox="0 0 400 200">
            <path id="curva" d="M10 10 Q 95 45 180 10 T 350 10" />
            <text>
              <textPath href="#curva" startOffset="0%">
                PARA ELEGIR SU VIAJE
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <section className="billetera-section">
        <h2>Mi Billetera de Figuritas Repetidas</h2>
        <div className="billetera-grid">
          {Object.entries(billetera).length === 0 ? (
            <p className="empty-billetera">
              Tu billetera está vacía. ¡Consigue más figuritas para repetir!
            </p>
          ) : (
            Object.entries(billetera).map(([figuritaId, item]) => {
              const originalFigurita = figuritas.find(f => f.id === figuritaId);
              let imgSource = '';
              let imgAlt = figuritaId;

              if (originalFigurita) {
                if (originalFigurita.isSpecial && originalFigurita.specialImageUrl) {
                  imgSource = originalFigurita.specialImageUrl;
                  imgAlt = originalFigurita.specialImageAlt || figuritaId;
                } else {
                  imgSource = originalFigurita.backgroundImageUrl;
                  imgAlt = figuritaId;
                }
              }

              return (
                <div key={figuritaId} className="billetera-item">
                  {imgSource && (
                    <img src={imgSource} alt={imgAlt} className="billetera-img" />
                  )}
                  <span>Figurita {figuritaId}: </span>
                  <strong>x{item.count}</strong>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Album;
