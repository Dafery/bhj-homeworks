'use strict';

const dropdownValues = [...document.querySelectorAll('.dropdown__value')];
const dropdownList = document.querySelector('.dropdown__list');

function switchingList(e) {
  e.preventDefault();
  dropdownValues.forEach((el) => (el.textContent = e.target.textContent));
  dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValues.forEach((el) => el.addEventListener('click', switchingList));
dropdownList.addEventListener('click', switchingList);
