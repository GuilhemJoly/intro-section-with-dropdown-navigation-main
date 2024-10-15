document.addEventListener('DOMContentLoaded', function() {
    const closeImg = document.querySelector('.closeImg');
    const nav = document.querySelector('.fixed-nav');
    const burger = document.querySelector('.burgerImg');
    const greyBackground = document.querySelector('.navGreyBackground');
    const body = document.querySelector('body');

    closeImg.addEventListener('click', function() {
        nav.classList.toggle('hidden');
        burger.classList.toggle('hidden');
        greyBackground.classList.toggle('greyBackground');
        body.classList.remove('noScroll');
    });
    
    const burgerImg = document.querySelector('.burgerImg');
    burgerImg.addEventListener('click', function() {
        nav.classList.toggle('hidden');
        burger.classList.toggle('hidden');
        greyBackground.classList.toggle('greyBackground')
        body.classList.add('noScroll');
    });
});