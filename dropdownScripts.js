document.addEventListener('DOMContentLoaded', function() {
    const closeFeatures = document.querySelector('.featuresDropdownMenu');
    const featuresNavDropdown = document.querySelector('.featuresNavDropdown');
    const features = document.querySelector('.features');
    const secondPartNav = document.querySelector('.secondPartNav');

    closeFeatures.addEventListener('click', function(event) {
        if (window.innerWidth < 1025) {
            event.stopPropagation();
            if (!companyNavDropdown.classList.contains('hiddenDropdown')) {
                companyNavDropdown.classList.add('hiddenDropdown');
                company.classList.remove('companyPadding');
                secondPartNavigation.classList.remove('companySecondPartNavPadding');
            }
        }
        featuresNavDropdown.classList.toggle('hiddenDropdown');
        features.classList.toggle('featuresPadding');
        secondPartNav.classList.toggle('featuresSecondPartNavPadding');
    });

    const closeCompany = document.querySelector('.companyDropdownMenu');
    const companyNavDropdown = document.querySelector('.companyNavDropdown');
    const company = document.querySelector('.company');
    const secondPartNavigation = document.querySelector('.secondPartNav');

    closeCompany.addEventListener('click', function(event) {
        if (window.innerWidth < 1025) {
        event.stopPropagation();
        }
        companyNavDropdown.classList.toggle('hiddenDropdown');
        company.classList.toggle('companyPadding');
        secondPartNavigation.classList.toggle('companySecondPartNavPadding');
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