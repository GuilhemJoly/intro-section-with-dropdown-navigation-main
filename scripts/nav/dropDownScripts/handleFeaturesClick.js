import { updatePadding } from "./updatePadding.js";

export const handleFeaturesClick = (
  event,
  featuresNavDropdown,
  features,
  featuresArrow,
  secondPartNav,
  companyNavDropdown
) => {
  if (window.innerWidth < 1025) {
    event.stopPropagation();
  }
  featuresNavDropdown.classList.toggle("hiddenDropdown");
  features.classList.toggle("featuresPadding");
  featuresArrow.classList.toggle("arrowUp");
  updatePadding(featuresNavDropdown, companyNavDropdown, secondPartNav);
};
