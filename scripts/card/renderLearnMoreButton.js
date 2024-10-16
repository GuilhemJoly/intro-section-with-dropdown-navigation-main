import { cardDatas } from "../../datas/cardDatas.js";

export const renderLearnMoreButton = (container) => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = cardDatas.buttonText;
  container.appendChild(buttonElement);
};
