import { handleFeaturesClick } from './handleFeaturesClick.js';
import { handleCompanyClick } from './handleCompanyClick.js';
import { handleResize } from './handleResize.js';

document.addEventListener("DOMContentLoaded", function () {
  const closeFeatures = document.querySelector(".featuresDropdownMenu");
  const featuresNavDropdown = document.querySelector(".featuresNavDropdown");
  const features = document.querySelector(".features");
  const featuresArrow = document.querySelector(".features .navArrow");
  const companyArrow = document.querySelector(".company .navArrow");
  const secondPartNav = document.querySelector(".secondPartNav");

  const closeCompany = document.querySelector(".companyDropdownMenu");
  const companyNavDropdown = document.querySelector(".companyNavDropdown");
  const company = document.querySelector(".company");

  if (!closeFeatures || !featuresNavDropdown || !features || !featuresArrow || !companyArrow || !secondPartNav || !closeCompany || !companyNavDropdown || !company) {
    console.error('One or more elements are undefined:', { closeFeatures, featuresNavDropdown, features, featuresArrow, companyArrow, secondPartNav, closeCompany, companyNavDropdown, company });
    return;
  }

  closeFeatures.addEventListener("click", function (event) {
    handleFeaturesClick(event, featuresNavDropdown, features, featuresArrow, secondPartNav, companyNavDropdown);
  });

  closeCompany.addEventListener("click", function (event) {
    handleCompanyClick(event, companyNavDropdown, company, companyArrow, secondPartNav, featuresNavDropdown);
  });

  window.addEventListener("resize", function () {
    handleResize(featuresNavDropdown, companyNavDropdown, features, company, secondPartNav, featuresArrow, companyArrow);
  });
});