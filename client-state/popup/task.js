'use strict';

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

if (!document.cookie.includes('modal_close=true')) modal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');

  document.cookie = 'modal_close=true';
});
