const body = document.querySelector('body');
const img = document.querySelector('.pantalla__img');
const frase = document.querySelector('.pantalla__text');

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

  switch (contexto) {
    case "tecla1":
      frase.innerHTML =  `Ante usted, Cat-Boss.`;
      break;
    case "tecla2":
      frase.innerHTML =  `La poderosa Madame Cat.`;
      break;  
    case "tecla3":
      frase.innerHTML =  `Soy el jefe aquí.`;
      break;  
    
    case "tecla4":
      frase.innerHTML =  `Y que sea breve.`;
      break;
    case "tecla5":
      frase.innerHTML =  `Mi tiempo es oro.`;
      break;  
    case "tecla6":
      frase.innerHTML =  `¡Salud y siestas!`;
      break;  

    case "tecla7":
      frase.innerHTML =  `Partner in crime.`;
      break;
    case "tecla8":
      frase.innerHTML =  `Gangsta Love`;
      break;  
    case "tecla9":
      frase.innerHTML =  `Uno y dos = problemas.`;
      break;  

    case "tecla10":
      frase.innerHTML =  `¡Eres el elegido!`;
      break;
    case "tecla11":
      frase.innerHTML =  `Michis rudos.`;
      break;
    case "tecla12":
      frase.innerHTML =  `¡Tú, hazlo ahora!`;
      break;  
  
    default:
      frase.innerHTML = "ups, error gatuno.";
      break;
  }
};

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
};


// Modo Dark
document.getElementById('switch').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  // const isDarkMode = document.body.classList.contains('dark-mode');
});