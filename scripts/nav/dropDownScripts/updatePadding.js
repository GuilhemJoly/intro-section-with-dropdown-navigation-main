export const updatePadding = (featuresNavDropdown, companyNavDropdown, secondPartNav) => {
    const featuresOpen = !featuresNavDropdown.classList.contains("hiddenDropdown");
    const companyOpen = !companyNavDropdown.classList.contains("hiddenDropdown");
  
    secondPartNav.classList.remove("featuresSecondPartNavPadding", "companySecondPartNavPadding", "featuresVsCompanyPadding");
  
    if (featuresOpen && companyOpen) {
      secondPartNav.classList.add("featuresVsCompanyPadding");
      companyNavDropdown.classList.add("moveCompanyToBottom");
    } else {
      if (featuresOpen) {
        secondPartNav.classList.add("featuresSecondPartNavPadding");
        companyNavDropdown.classList.remove("moveCompanyToBottom");
      }
      if (companyOpen) {
        secondPartNav.classList.add("companySecondPartNavPadding");
        companyNavDropdown.classList.remove("moveCompanyToBottom");
      }
    }
  };