'use strict';

const menuLinks = [...document.querySelectorAll('.menu__link')];

menuLinks.forEach((el) => {
  el.onclick = () => {
    let sub = el.closest('.menu__item').querySelector('.menu_sub');
    let subActive = document.querySelector('.menu_active');

    if (subActive !== sub) {
      subActive?.classList.toggle('menu_active');
    }

    if (sub) {
      sub.classList.toggle('menu_active');
      return false;
    }
  };
});
