const body = document.querySelector('body');
const img = document.querySelector('.pantalla__img');

const btn1 = document.querySelector('.teclado1');
const btn2 = document.querySelector('.teclado2');
const btn3 = document.querySelector('.teclado3');
const btn4 = document.querySelector('.teclado4');
const btn5 = document.querySelector('.teclado5');
const btn6 = document.querySelector('.teclado6');
const btn7 = document.querySelector('.teclado7');
const btn8 = document.querySelector('.teclado8');
const btn9 = document.querySelector('.teclado9');
const btn10 = document.querySelector('.teclado10');
const btn11 = document.querySelector('.teclado11');
const btn12 = document.querySelector('.teclado12');

// btn1.addEventListener('click', ()=> {
//   console.log("cambio la imagen")
// });

btn1.addEventListener('click', function() {
  cambiarContexto('tecla1');
});

btn2.addEventListener('click', function() {
  cambiarContexto('tecla2');
});

btn3.addEventListener('click', function() {
  cambiarContexto('tecla3');
});

btn4.addEventListener('click', function() {
  cambiarContexto('tecla4');
});


btn5.addEventListener('click', function() {
  cambiarContexto('tecla5');
});

btn6.addEventListener('click', function() {
  cambiarContexto('tecla6');
});

btn7.addEventListener('click', function() {
  cambiarContexto('tecla7');
});

btn8.addEventListener('click', function() {
  cambiarContexto('tecla8');
});


btn9.addEventListener('click', function() {
  cambiarContexto('tecla9');
});

btn10.addEventListener('click', function() {
  cambiarContexto('tecla10');
});

btn11.addEventListener('click', function() {
  cambiarContexto('tecla11');
});

btn12.addEventListener('click', function() {
  cambiarContexto('tecla12');
});







function cambiarContexto(contexto){
  body.setAttribute('data-contexto', contexto);
  img.setAttribute('src', `./img/${contexto}.jpeg`);

  // switch (contexto) {
  //   case "enfoque":
  //     titulo.innerHTML =  `Optimiza tu productividad,<br>
  //       <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
  //     break;
  //   case "descanso-corto":
  //     titulo.innerHTML =  `¿Qué tal tomar un respiro? <br>
  //       <strong class="app__title-strong">¡Haz una pausa corta!</strong>`;
  //     break;  
  //   case "descanso-largo":
  //     titulo.innerHTML =  `Hora de volver a la superficie <br>
  //       <strong class="app__title-strong"> Haz una pausa larga.</strong>`;
  //     break;  
  
  //   default:
  //     break;
  // }
}


