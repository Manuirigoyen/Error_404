function asignarImagenEspecial(card, teamId) {
  const img = card.querySelector('img');
  if (!img) return;

  const imagenes = {
    argentina: { src: '/assets/img/fondos/Argentina/15.jpg', alt: 'Maradona' },
    brasil: { src: '/assets/img/fondos/Brasil/15.jpg', alt: 'Pele' },
    francia: { src: '/assets/img/fondos/Francia/15.jpg', alt: 'Zidane' }
  };

  if (imagenes[teamId]) {
    img.src = imagenes[teamId].src;
    img.alt = imagenes[teamId].alt;
  }
}

function actualizarProgresoEquipo(team) {
  const cards = team.querySelectorAll('.card');
  const bandera = team.querySelector('.bandera');
  const progressBar = team.querySelector('.progress-bar');
  const progressText = team.querySelector('.progress-text');
  const totalCards = cards.length;

  const completadas = Array.from(cards).filter(c => c.classList.contains('completa')).length;
  const porcentaje = Math.round((completadas / totalCards) * 100);

  progressBar.style.width = porcentaje + '%';
  progressText.textContent = `Progreso: ${porcentaje}%`;

  if (porcentaje <= 33) {
    progressBar.style.background = '#e53935';
  } else if (porcentaje <= 66) {
    progressBar.style.background = '#fdd835';
  } else {
    progressBar.style.background = '#43a047';
  }

  if (completadas === totalCards && !bandera.classList.contains('color')) {
    bandera.classList.add('color');
  }

  mostrarMensajeFinal();
}

function desbloquearCardPorId(teamId, index1Base) {
  const team = document.getElementById(teamId);
  if (!team) return;

  const cards = team.querySelectorAll('.card');
  const card = cards[index1Base - 1];
  if (card && !card.classList.contains('completa')) {
    card.classList.add('completa');

    if (card.classList.contains('especial')) {
      asignarImagenEspecial(card, teamId);
    }

    actualizarProgresoEquipo(team);
  }
}

function mostrarMensajeFinal() {
  const equipos = document.querySelectorAll('.team');
  if (!equipos.length) return;

  let todosCompletos = true;

  equipos.forEach(team => {
    const cards = team.querySelectorAll('.card');
    const total = cards.length;
    const completas = Array.from(cards).filter(c => c.classList.contains('completa')).length;

    if (completas < total) {
      todosCompletos = false;
    }
  });

  const incompleto = document.getElementById('mensaje-incompleto');
  const completo = document.getElementById('mensaje-completo');

  if (todosCompletos) {
    incompleto?.classList.add('oculto');
    completo?.classList.remove('oculto');
  } else {
    completo?.classList.add('oculto');
    incompleto?.classList.remove('oculto');
  }
}

function guardarEnBilletera(card) {
  const id = card.dataset.id;
  let img = card.style.backgroundImage;

  if (!img || img === 'none') {
    const imgTag = card.querySelector('img');
    if (imgTag) img = `url("${imgTag.src}")`;
  }

  const billetera = JSON.parse(localStorage.getItem('billetera')) || {};

  billetera[id] = billetera[id] || { count: 0, img };
  billetera[id].count++;
  localStorage.setItem('billetera', JSON.stringify(billetera));
}

function resetAlbum() {
  document.querySelectorAll('.card.completa').forEach(c => c.classList.remove('completa'));
  document.querySelectorAll('.progress-bar').forEach(p => p.style.width = '0%');
  document.querySelectorAll('.progress-text').forEach(t => t.textContent = 'Progreso: 0%');
  document.querySelectorAll('.bandera').forEach(b => b.classList.remove('color'));
}

document.addEventListener('DOMContentLoaded', () => {
  const billeteraContenedor = document.getElementById('billetera-contenedor');

  if (!billeteraContenedor) {
    localStorage.removeItem('billetera');
    resetAlbum();
    mostrarMensajeFinal();
  }

  document.querySelectorAll('.team').forEach(team => {
    const cards = team.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (!card.classList.contains('completa')) {
          card.classList.add('completa');

          if (card.classList.contains('especial')) {
            asignarImagenEspecial(card, team.id);
          }

          actualizarProgresoEquipo(team);
        } else {
          guardarEnBilletera(card);
        }
      });
    });

    actualizarProgresoEquipo(team);
  });

  mostrarMensajeFinal();

  // -------------------- BILLETERA --------------------
  if (billeteraContenedor) {
    const billetera = JSON.parse(localStorage.getItem('billetera')) || {};

    Object.entries(billetera).forEach(([id, data]) => {
      const figu = document.createElement('div');
      figu.className = 'figu-repetida';
      figu.dataset.id = id;
      figu.style.backgroundImage = data.img;

      const contador = document.createElement('div');
      contador.className = 'contador';
      contador.textContent = `x${data.count}`;
      figu.appendChild(contador);

      const botones = document.createElement('div');
      botones.className = 'botones-billetera';

      const btnEliminar = document.createElement('button');
      btnEliminar.className = 'btn-eliminar';
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.addEventListener('click', () => {
        if (billetera[id].count > 1) {
          billetera[id].count--;
          localStorage.setItem('billetera', JSON.stringify(billetera));
          contador.textContent = `x${billetera[id].count}`;
        } else {
          delete billetera[id];
          localStorage.setItem('billetera', JSON.stringify(billetera));
          figu.remove();
        }
      });

      const btnIntercambiar = document.createElement('button');
      btnIntercambiar.className = 'btn-intercambiar';
      btnIntercambiar.textContent = 'Intercambiar';

      botones.appendChild(btnEliminar);
      botones.appendChild(btnIntercambiar);
      figu.appendChild(botones);

      billeteraContenedor.appendChild(figu);
    });
  }

  // -------------------- MENÚ HAMBURGUESA --------------------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});