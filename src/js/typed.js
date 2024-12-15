document.addEventListener("DOMContentLoaded", () => {
    const typedText = document.getElementById("typed");
    const textArray = ['Bienvenid@s Esfotdianos', 'Noticias actuales', 'Apoyo académico', 'Cursos de refuerzo', ' y mucho más....'];
    let arrayIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textArray[arrayIndex].length) {
            typedText.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            arrayIndex = (arrayIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});
