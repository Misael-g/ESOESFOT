const hamburger = document.querySelector(".header__hamburger");
const navegacion = document.querySelector(".header__barra");
const navLinks = document.querySelectorAll(".navegacion__link");

function toggleMenu() {
    navegacion.classList.toggle("active");
}

function closeMenu() {
    navegacion.classList.remove("active");
}

hamburger.addEventListener("click", toggleMenu);


navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
    if (navegacion.classList.contains("active")) {
        closeMenu();
    }

});
