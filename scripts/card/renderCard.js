import { renderTitle } from "./renderTitle.js";
import { renderDescription } from "./renderDescription.js";
import { renderLearnMoreButton } from "./renderLearnMoreButton.js";
import { renderClientLogos } from "../renderClientLogos.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card");

  if (cardContainer) {
    renderTitle(cardContainer);
    renderDescription(cardContainer);
    renderLearnMoreButton(cardContainer);
    renderClientLogos(cardContainer);
  } else {
    console.error("Le conteneur .card est introuvable.");
  }
});
