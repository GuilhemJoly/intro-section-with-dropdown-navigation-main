import { cardDatas } from "../../datas/cardDatas.js";

export const renderTitle = (container) => {
  const titleElement = document.createElement("h1");
  const makeWordSpan = document.createElement("span");
  makeWordSpan.className = cardDatas.titleClass;
  makeWordSpan.textContent = cardDatas.titleSpanOne;

  const remoteWorkWordSpan = document.createElement("span");
  remoteWorkWordSpan.textContent = cardDatas.titleSpanTwo;

  titleElement.appendChild(makeWordSpan);
  titleElement.appendChild(remoteWorkWordSpan);
  container.appendChild(titleElement);
};
