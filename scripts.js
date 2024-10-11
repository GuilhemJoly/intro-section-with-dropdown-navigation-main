document.addEventListener('DOMContentLoaded', function() {
    const closeImg = document.querySelector('.closeImg');
    const nav = document.querySelector('.fixed-nav');
    const burger = document.querySelector('.burgerImg');

    closeImg.addEventListener('click', function() {
        nav.classList.toggle('hidden');
        burger.classList.toggle('hidden');
    });

    const burgerImg = document.querySelector('.burgerImg');
    burgerImg.addEventListener('click', function() {
        nav.classList.toggle('hidden');
        burger.classList.toggle('hidden');
    });
});