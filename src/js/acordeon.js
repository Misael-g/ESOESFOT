const prevBtn = document.querySelector('.fa-circle-left');
const nextBtn = document.querySelector('.fa-circle-right');
const slider = document.querySelector('.directiva__box');

// Al hacer clic en el botón de la izquierda
prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -150, // Desplazar hacia la izquierda
        behavior: 'smooth' // Movimiento suave
    });
});

// Al hacer clic en el botón de la derecha
nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: 150, // Desplazar hacia la derecha
        behavior: 'smooth' // Movimiento suave
    });

});