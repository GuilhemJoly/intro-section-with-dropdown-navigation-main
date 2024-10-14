document.addEventListener('DOMContentLoaded', function() {
    const closeFeatures = document.querySelector('.featuresDropdownMenu');
    const featuresNavDropdown = document.querySelector('.featuresNavDropdown ');

    closeFeatures.addEventListener('click', function() {
        featuresNavDropdown.classList.toggle('hiddenDropdown');
    });
    
    const closeCompany = document.querySelector('.companyDropdownMenu');
    const companyNavDropdown = document.querySelector('.companyNavDropdown');

    closeCompany.addEventListener('click', function() {
        companyNavDropdown.classList.toggle('hiddenDropdown');
    });
});