import { companyDropdownMenuDatas } from "../datas/companyDropdownMenuDatas.js";

document.addEventListener('DOMContentLoaded', () => {
  const companyDropdownContainer = document.getElementById("companyDropdown");

  if (companyDropdownContainer && Array.isArray(companyDropdownMenuDatas)) {
    companyDropdownMenuDatas.forEach(({ title, link }) => {
      const aElement = document.createElement("a");
      aElement.textContent = title;
      aElement.href = link;
      companyDropdownContainer.appendChild(aElement);
    });
  } else {
    console.error('companyDropdown container not found or data is not an array.');
  }
});