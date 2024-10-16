import { clientLogoDatas } from '../datas/clientLogoDatas.js';

export const renderClientLogos = (container) => {
  const clientLogosContainer = document.createElement('div');
  clientLogosContainer.className = 'clientLogos';
  clientLogoDatas.forEach(logoData => {
    const imgElement = document.createElement('img');
    imgElement.className = logoData.class;
    imgElement.src = logoData.imgSrc;
    imgElement.alt = logoData.alt;
    clientLogosContainer.appendChild(imgElement);
  });
  container.appendChild(clientLogosContainer);
};