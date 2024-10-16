import { updatePadding } from "./updatePadding.js";

export const handleCompanyClick = (
  event,
  companyNavDropdown,
  company,
  companyArrow,
  secondPartNav,
  featuresNavDropdown
) => {
  if (window.innerWidth < 1025) {
    event.stopPropagation();
  }
  companyNavDropdown.classList.toggle("hiddenDropdown");
  company.classList.toggle("companyPadding");
  companyArrow.classList.toggle("arrowUp");
  updatePadding(featuresNavDropdown, companyNavDropdown, secondPartNav);
};
