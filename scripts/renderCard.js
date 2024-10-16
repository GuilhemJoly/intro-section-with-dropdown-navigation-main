import { cardDatas } from '../datas/cardDatas.js';
import { clientLogoDatas } from '../datas/clientLogoDatas.js';

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelector('.card');

  if (cardContainer) {
    const titleElement = document.createElement('h1');
    const makeWordSpan = document.createElement('span');
    makeWordSpan.className = cardDatas.titleClass;
    makeWordSpan.textContent = cardDatas.titleSpanOne;

    const remoteWorkWordSpan = document.createElement('span');
    remoteWorkWordSpan.textContent = cardDatas.titleSpanTwo;

    titleElement.appendChild(makeWordSpan);
    titleElement.appendChild(remoteWorkWordSpan);
    cardContainer.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.className = cardDatas.descriptionClass;
    descriptionElement.textContent = cardDatas.description;
    cardContainer.appendChild(descriptionElement);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = cardDatas.buttonText;
    cardContainer.appendChild(buttonElement);

    const clientLogosContainer = document.createElement('div');
    clientLogosContainer.className = 'clientLogos';
    clientLogoDatas.forEach(logoData => {
      const imgElement = document.createElement('img');
      imgElement.className = logoData.class;
      imgElement.src = logoData.imgSrc;
      imgElement.alt = logoData.alt;
      clientLogosContainer.appendChild(imgElement);
    });
    cardContainer.appendChild(clientLogosContainer);
  } else {
    console.error('Le conteneur .card est introuvable.');
  }
});