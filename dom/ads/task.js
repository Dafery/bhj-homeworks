'use strict';

const cards = [...document.querySelectorAll('.card')];

cards.forEach((card) => {
  const rotator = card.querySelector('.rotator');
  const rotatorCases = [...rotator.querySelectorAll('.rotator__case')];
  let rotatorCase = rotator.firstElementChild;
  let counterCases = 0;

  rotatorCase.style.color = rotatorCase.dataset.color;

  setTimeout(function switchCase() {
    rotatorCase.classList.remove('rotator__case_active');
    rotatorCase = rotatorCase.nextElementSibling;
    counterCases++;

    if (counterCases > rotatorCases.length - 1) {
      rotatorCase = rotator.firstElementChild;
      counterCases = 0;
    }

    rotatorCase.classList.add('rotator__case_active');
    rotatorCase.style.color = rotatorCase.dataset.color;

    setTimeout(switchCase, rotatorCase.dataset.speed);
  }, rotatorCase.dataset.speed);
});
