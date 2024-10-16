export const handleResize = (featuresNavDropdown, companyNavDropdown, features, company, secondPartNav, featuresArrow, companyArrow) => {
    if (window.innerWidth >= 1025) {
      featuresNavDropdown.classList.add("hiddenDropdown");
      companyNavDropdown.classList.add("hiddenDropdown");
      features.classList.remove("featuresPadding");
      company.classList.remove("companyPadding");
      secondPartNav.classList.remove("featuresSecondPartNavPadding", "companySecondPartNavPadding", "featuresVsCompanyPadding");
      featuresArrow.classList.remove("arrowUp");
      companyArrow.classList.remove("arrowUp");
    }
  };