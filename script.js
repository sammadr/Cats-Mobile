const body = document.querySelector('body');
const img = document.querySelector('.pantalla__img');

const teclas = document.querySelectorAll('.tecla');
const audios = document.querySelectorAll('audio');

teclas.forEach(tecla => {
  tecla.addEventListener('click', function() {
    const contexto = tecla.getAttribute('data-contexto');
    cambiarContexto(contexto);
    playSonido(`#sonido_${contexto}`);
  });
});

function cambiarContexto(contexto) {
  body.setAttribute('data-contexto', contexto);
  img.setAttribute('src', `./img/${contexto}.jpeg`);
}

// function playSonido(idElementoAudio) {
//   const audio = document.querySelector(idElementoAudio);
//   if (audio) {
//     audio.play();
//   }
// }

function playSonido(idElementoAudio) {
  // Pausar todos los audios
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // Reiniciar el audio al inicio
  });

  // Reproducir el audio seleccionado
  const audio = document.querySelector(idElementoAudio);
  if (audio) {
    audio.play();
  }
}