'use strict';

const book = document.querySelector('.book');
const bookControlFontSize = book.querySelector('.book__control_font-size');
const bookControlColor = book.querySelector('.book__control_color');
const bookControlBackground = book.querySelector('.book__control_background');

function changeActiveClass(e, activeClass) {
  e.preventDefault();

  if (e.target.tagName === 'SPAN' || e.target.classList.contains(activeClass)) return;

  e.currentTarget.querySelector(`.${activeClass}`).classList.remove(activeClass);
  e.target.classList.add(activeClass);
}

function changeBookClass(prefix, suffix) {
  let bookClassArr = book.className.split(' ');
  let idx = bookClassArr.findIndex((el) => el.includes(prefix));

  if (idx > -1) bookClassArr.splice(idx, 1);

  book.className = bookClassArr.join(' ') + (suffix ? ` ${prefix}-${suffix}` : '');
}

function switchFontSize(e) {
  changeActiveClass(e, 'font-size_active');
  changeBookClass('book_fs', e.target.dataset.size);
}

function switchColor(e) {
  changeActiveClass(e, 'color_active');
  changeBookClass('book_color', e.target.dataset.textColor);
}

function switchBackground(e) {
  changeActiveClass(e, 'color_active');
  changeBookClass('book_bg', e.target.dataset.bgColor);
}

bookControlFontSize.addEventListener('click', switchFontSize);
bookControlColor.addEventListener('click', switchColor);
bookControlBackground.addEventListener('click', switchBackground);
