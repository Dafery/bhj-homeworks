'use strict';

const reveals = [...document.querySelectorAll('.reveal')];

function showBlock() {
  reveals.forEach((el) => {
    const { top, bottom } = el.getBoundingClientRect();

    if (top < window.innerHeight && bottom > 0) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', showBlock);
