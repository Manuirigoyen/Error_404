// src/components/Album.tsx
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import FiguritaCard from './FiguritaCard';
import './Album.css';
import './FiguritaCard.css';
import { ALL_FIGURITAS, Figurita } from '../data/figuritasData'; // <-- Importamos Figurita y ALL_FIGURITAS

// Elimina las interfaces Figurita, BilleteraItem y Billetera de aquí.
// interface Figurita {... }
interface BilleteraItem { // La interfaz de BilleteraItem sí es exclusiva de Album/Billetera
  count: number;
}
interface Billetera { // La interfaz de Billetera sí es exclusiva de Album/Billetera
  [figuritaId: string]: BilleteraItem;
}

function Album() {
  const [figuritas, setFiguritas] = useState<Figurita[]>([]);
  const [billetera, setBilletera] = useState<Billetera>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ¡Elimina initialFiguritasData de aquí! Ahora usaremos ALL_FIGURITAS importada.
  // const initialFiguritasData = useMemo<Figurita[]>(() => ([...]));

  useEffect(() => {
    let loadedBilletera: Billetera = {};
    try {
      const storedBilleteraStr = localStorage.getItem("billetera");
      if (storedBilleteraStr) {
        loadedBilletera = JSON.parse(storedBilleteraStr);
        setBilletera(loadedBilletera);
      }
    } catch (e) {
      console.error("Error al cargar la billetera del localStorage:", e);
      setError("No se pudo cargar la billetera del localStorage.");
    }

    // Usamos ALL_FIGURITAS en lugar de initialFiguritasData
    const figuritasWithInitialState = ALL_FIGURITAS.map(fig => ({
     ...fig,
      isComplete:!!loadedBilletera[fig.id] // Comprueba si ya está en la billetera
    }));
    setFiguritas(figuritasWithInitialState);
    setIsLoading(false);
  }, []); // <-- ¡MUY IMPORTANTE! Cambiar la dependencia de initialFiguritasData a un array vacío []

  useEffect(() => {
    localStorage.setItem("billetera", JSON.stringify(billetera));
  }, [billetera]);

  const handleFiguritaClick = useCallback((clickedFiguritaId: string) => {
    setFiguritas(prevFiguritas =>
      prevFiguritas.map(fig => {
        if (fig.id === clickedFiguritaId) {
          if (!fig.isComplete) {
            console.log(`Figurita ${fig.id} marcada como completa.`);
            return {...fig, isComplete: true };
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
      figuritas: Figurita[]
    }>();

    const teamsInfo = {
      argentina: {
        name: "Argentina",
        banderaIcono: "/assets/img/fonts/Argentina/banderaArg.jpg",
        descripcion: "La Selección Argentina de Fútbol es el equipo nacional que representa a la Argentina en competiciones internacionales. Es una de las selecciones más exitosas del mundo, con una rica historia y una gran pasión popular. Ha ganado tres Copas del Mundo (1978, 1986 y 2022) y múltiples títulos continentales, incluyendo la Copa América. Con figuras legendarias como Diego Maradona, Lionel Messi y muchos otros, la “Albiceleste” es símbolo de talento, garra y orgullo nacional.",
        banderaPrincipal: "/assets/img/fonts/Argentina/banderaArg.jpg"
      },
      brasil: {
        name: "Brasil",
        banderaIcono: "/assets/img/fonts/Brasil/banderaicono.jpg",
        descripcion: "La Selección de Brasil de Fútbol, conocida como la “Canarinha”, es la más ganadora en la historia de los Mundiales, con cinco Copas del Mundo (1958, 1962, 1970, 1994 y 2002). Famosa por su estilo alegre y ofensivo, el “jogo bonito”, Brasil ha dado al fútbol algunas de sus mayores leyendas, como Pelé, Zico, Ronaldo, Ronaldinho y Neymar. Es símbolo de talento, pasión y creatividad, y representa la esencia del fútbol sudamericano.",
        banderaPrincipal: "/assets/img/fonts/Brasil/banderaBra.jpg"
      },
      francia: {
        name: "Francia",
        banderaIcono: "/assets/img/fonts/Francia/banderaicono.jpg",
        descripcion: "La Selección de Francia de Fútbol, conocida como “Les Bleus”, es una de las potencias más importantes del fútbol mundial. Ha ganado dos Copas del Mundo (1998 y 2018) y varias Eurocopas, destacándose por su estilo de juego técnico y dinámico. Con generaciones de grandes figuras como Zidane, Henry, Mbappé y Griezmann, Francia combina juventud, talento y disciplina táctica, siendo un referente del fútbol moderno.",
        banderaPrincipal: "/assets/img/fonts/Francia/BanderaFra.jpg"
      },
    };

    figuritas.forEach(fig => {
      if (!teamMap.has(fig.teamId)) {
        const info = teamsInfo[fig.teamId as keyof typeof teamsInfo];
        teamMap.set(fig.teamId, {...info, figuritas: [] });
      }
      teamMap.get(fig.teamId)?.figuritas.push(fig);
    });
    return Array.from(teamMap.values());
  }, [figuritas]);

  const allFiguritasComplete = useMemo(() => {
    return figuritas.length > 0 && figuritas.every(fig => fig.isComplete);
  }, [figuritas]);

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
        MIS ALBUMES
      </h1>

      {equiposAgrupados.map(team => {
        const totalCards = team.figuritas.length;
        const completadas = team.figuritas.filter(fig => fig.isComplete).length;
        const porcentaje = Math.round((completadas / totalCards) * 100);

        // Lógica de color para la barra de progreso
        let progressBarColor = "#e53935"; // Rojo por defecto
        if (porcentaje > 33 && porcentaje <= 66) progressBarColor = "#fdd835"; // Amarillo
        if (porcentaje > 66) progressBarColor = "#43a047"; // Verde

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
                  ></div>
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
                  className={`bandera ${isTeamComplete? 'color' : ''}`}
                />
              </div>
            </div>
          </div>
        );
      })}

      <div id="promo-final" className="promo-final">
        <div id="mensaje-incompleto" className={`mensaje ${allFiguritasComplete? 'oculto' : ''}`}>
          <h4>Completa el álbum</h4>
          <h3>y GANÁ</h3>
          <h2>PREMIOS INCREIBLES!!!!</h2>
          <p>Viajes a elección: Colombia, México o Brasil!!!</p>
        </div>
        <div id="mensaje-completo" className={`mensaje ${!allFiguritasComplete? 'oculto' : ''}`}>
          <h2>FELICIDADES!!</h2>
          <h3>Completaste el álbum!</h3>
          <a href="#" className="boton-viaje">CLICK <br />AQUÍ</a>
          <svg className="svg-curvo" viewBox="0 0 400 200">
            <path id="curva" d="M10 10 Q 95 45 180 10 T 350 10" />
            <text>
              <textPath href="#curva" startOffset="0%">PARA ELEGIR SU VIAJE</textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Album;