'use strict';

const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const btnClose = Array.from(document.querySelectorAll('.modal__close'));
const btnDanger = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

btnClose.forEach((el) => {
  el.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  };
});

btnDanger.onclick = () => {
  modalSuccess.classList.add('modal_active');
  modalMain.classList.remove('modal_active');
};
