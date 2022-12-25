'use strict';

const editor = document.querySelector('#editor');
const clearEditor = document.querySelector('#clear-editor');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', (e) => localStorage.setItem('text', e.target.value));
clearEditor.addEventListener('click', () => {
  editor.value = '';
  localStorage.text = '';
});
