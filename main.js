
document.querySelector('.menu-boton').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show');
});

/* scroll reveal */

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.banner1', {delay: 500});
ScrollReveal().reveal('.contactos', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});