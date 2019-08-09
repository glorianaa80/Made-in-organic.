const plantsLi = document.getElementById('plants-link');
const menueLevel = document.getElementById('plants-accordion');


function accordion() {
  if (plantsLi) {
    menueLevel.classList.remove('hola');
    menueLevel.classList.add('muestra');
    console.log('hola si');
  } else {
    menueLevel.classList.remove('muestra');
    menueLevel.classList.add('hola');
    console.log('hola no ');
  }
}
plantsLi.addEventListener('click', accordion);
