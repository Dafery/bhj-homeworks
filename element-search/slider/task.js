'use strict';

const sliderItems = [...document.querySelectorAll('.slider__item')];
const sliderDots = [...document.querySelectorAll('.slider__dot')];
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
let idxItem = 0;

sliderDots[0].classList.add('slider__dot_active');

function toggleActive(idxItem) {
  sliderItems[idxItem].classList.toggle('slider__item_active');
  sliderDots[idxItem].classList.toggle('slider__dot_active');
}

arrowPrev.onclick = () => {
  toggleActive(idxItem);
  idxItem = idxItem > 0 ? idxItem - 1 : sliderItems.length - 1;
  toggleActive(idxItem);
};

arrowNext.onclick = () => {
  toggleActive(idxItem);
  idxItem = idxItem < sliderItems.length - 1 ? idxItem + 1 : 0;
  toggleActive(idxItem);
};

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = () => {
    let sliderDot = sliderDots[i];
    let sliderItem = sliderItems[i];
    let dotActive = document.querySelector('.slider__dot_active');
    let itemActive = document.querySelector('.slider__item_active');

    if (sliderDot.classList.contains('slider__dot_active')) return;

    dotActive.classList.toggle('slider__dot_active');
    itemActive.classList.toggle('slider__item_active');
    sliderDot.classList.toggle('slider__dot_active');
    sliderItem.classList.toggle('slider__item_active');

    idxItem = i;
  };
}
