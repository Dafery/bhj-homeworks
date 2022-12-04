'use strict';

const dropdowns = [...document.querySelectorAll('.dropdown')];

function switchingList(dropdownList, dropdownValue) {
  return (e) => {
    e.preventDefault();

    const dropdownListActive = document.querySelector('.dropdown__list_active');

    if (dropdownValue) dropdownValue.textContent = e.target.textContent;

    dropdownList.classList.add('dropdown__list_active');
    dropdownListActive?.classList.remove('dropdown__list_active');
  };
}

dropdowns.forEach((el) => {
  const dropdownValue = el.querySelector('.dropdown__value');
  const dropdownList = el.querySelector('.dropdown__list');

  dropdownValue.addEventListener('click', switchingList(dropdownList));
  dropdownList.addEventListener('click', switchingList(dropdownList, dropdownValue));
});
