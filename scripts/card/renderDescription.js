import { cardDatas } from "../../datas/cardDatas.js";

export const renderDescription = (container) => {
  const descriptionElement = document.createElement("p");
  descriptionElement.className = cardDatas.descriptionClass;
  descriptionElement.textContent = cardDatas.description;
  container.appendChild(descriptionElement);
};
