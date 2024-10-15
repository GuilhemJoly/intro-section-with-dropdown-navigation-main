document.addEventListener("DOMContentLoaded", function () {
  const closeFeatures = document.querySelector(".featuresDropdownMenu");
  const featuresNavDropdown = document.querySelector(".featuresNavDropdown");
  const features = document.querySelector(".features");
  const secondPartNav = document.querySelector(".secondPartNav");

  const closeCompany = document.querySelector(".companyDropdownMenu");
  const companyNavDropdown = document.querySelector(".companyNavDropdown");
  const company = document.querySelector(".company");

  const updatePadding = () => {
    const featuresOpen = !featuresNavDropdown.classList.contains("hiddenDropdown");
    const companyOpen = !companyNavDropdown.classList.contains("hiddenDropdown");

    secondPartNav.classList.remove("featuresSecondPartNavPadding", "companySecondPartNavPadding", "featuresVsCompanyPadding");

    if (featuresOpen && companyOpen) {
      secondPartNav.classList.add("featuresVsCompanyPadding");
      companyNavDropdown.classList.add("moveCompanyToBottom")
    } else {
      if (featuresOpen) {
        secondPartNav.classList.add("featuresSecondPartNavPadding");
        companyNavDropdown.classList.remove("moveCompanyToBottom")
      }
      if (companyOpen) {
        secondPartNav.classList.add("companySecondPartNavPadding");
        companyNavDropdown.classList.remove("moveCompanyToBottom")
      }
    }
  };

  closeFeatures.addEventListener("click", function (event) {
    if (window.innerWidth < 1025) {
      event.stopPropagation();
    }
    featuresNavDropdown.classList.toggle("hiddenDropdown");
    features.classList.toggle("featuresPadding");
    updatePadding();
  });

  closeCompany.addEventListener("click", function (event) {
    if (window.innerWidth < 1025) {
      event.stopPropagation();
    }
    companyNavDropdown.classList.toggle("hiddenDropdown");
    company.classList.toggle("companyPadding");
    updatePadding();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1025) {
      featuresNavDropdown.classList.add("hiddenDropdown");
      companyNavDropdown.classList.add("hiddenDropdown");
      features.classList.remove("featuresPadding");
      company.classList.remove("companyPadding");
      secondPartNav.classList.remove("featuresSecondPartNavPadding", "companySecondPartNavPadding", "featuresVsCompanyPadding");
    }
  });
});