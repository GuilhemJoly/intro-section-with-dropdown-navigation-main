document.addEventListener('DOMContentLoaded', function() {
    const closeImg = document.querySelector('.closeImg');
    const nav = document.querySelector('.fixed-nav');
    const burger = document.querySelector('.burgerImg');
    const greyBackground = document.querySelector('.navGreyBackground');
    const body = document.querySelector('body');

    const toggleNav = () => {
        if (nav.classList.contains('hidden')) {
            nav.classList.remove('hidden');
            nav.classList.remove('slideOut');
            nav.classList.add('slideIn');
        } else {
            nav.classList.remove('slideIn');
            nav.classList.add('slideOut');
            setTimeout(() => {
                nav.classList.add('hidden');
            }, 500);
        }
        burger.classList.toggle('hidden');
        greyBackground.classList.toggle('greyBackground');
        body.classList.toggle('noScroll');
    };

    closeImg.addEventListener('click', toggleNav);
    burger.addEventListener('click', toggleNav);
});