document.addEventListener('DOMContentLoaded', function() {
    const closeImg = document.querySelector('.closeImg');
    const nav = document.querySelector('.fixed-nav');

    closeImg.addEventListener('click', function() {
        nav.classList.toggle('hidden');
    });
});