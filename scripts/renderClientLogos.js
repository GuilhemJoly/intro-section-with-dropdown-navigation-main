import { clientLogoDatas } from '../datas/clientLogoDatas.js';

document.addEventListener('DOMContentLoaded', () => {
    const clientLogosContainer = document.querySelector('.clientLogos');

    if (clientLogosContainer && Array.isArray(clientLogoDatas)) {
        clientLogoDatas.forEach(({ class: className, imgSrc, alt }) => {
            const imgElement = document.createElement('img');
            imgElement.className = className || '';
            imgElement.src = imgSrc;
            imgElement.alt = alt || '';
            clientLogosContainer.appendChild(imgElement);
        });
    } else {
        console.error('clientLogos container not found or data is not an array.');
    }
});
