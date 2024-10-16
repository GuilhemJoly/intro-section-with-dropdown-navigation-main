import { featuresDropdownMenuDatas } from "../datas/featuresDropdownMenuDatas.js";

document.addEventListener('DOMContentLoaded', () => {
  const featuresDropdownContainer = document.getElementById("featuresDropdown");

  if (featuresDropdownContainer && Array.isArray(featuresDropdownMenuDatas)) {
    featuresDropdownMenuDatas.forEach(({ title, description, iconSrc, link }) => {
      const divElement = document.createElement("div");
      const imgElement = document.createElement("img");
      const aElement = document.createElement("a");

      imgElement.src = iconSrc;
      imgElement.alt = description;
      imgElement.classList.add("dropdownIcons");

      aElement.textContent = title;
      aElement.href = link;

      divElement.appendChild(imgElement);
      divElement.appendChild(aElement);

      featuresDropdownContainer.appendChild(divElement);
    });
  } else {
    console.error('Le conteneur #featuresDropdown est introuvable ou les données ne sont pas un tableau.');
  }
});