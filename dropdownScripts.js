document.addEventListener('DOMContentLoaded', function() {
    const closeFeatures = document.querySelector('.featuresDropdownMenu');
    const featuresNavDropdown = document.querySelector('.featuresNavDropdown');
    const features = document.querySelector('.features');
    const secondPartNav = document.querySelector('.secondPartNav');

    closeFeatures.addEventListener('click', function(event) {
        event.stopPropagation();
        featuresNavDropdown.classList.toggle('hiddenDropdown');
        features.classList.toggle('featuresPadding');
        secondPartNav.classList.toggle('secondPartNavPadding');
    });

    const closeCompany = document.querySelector('.companyDropdownMenu');
    const companyNavDropdown = document.querySelector('.companyNavDropdown');

    closeCompany.addEventListener('click', function(event) {
        event.stopPropagation();
        companyNavDropdown.classList.toggle('hiddenDropdown');
    });

    document.addEventListener('click', function() {
        if (!featuresNavDropdown.classList.contains('hiddenDropdown')) {
            featuresNavDropdown.classList.add('hiddenDropdown');
        }
        if (!companyNavDropdown.classList.contains('hiddenDropdown')) {
            companyNavDropdown.classList.add('hiddenDropdown');
        }
    });

    featuresNavDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    companyNavDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});