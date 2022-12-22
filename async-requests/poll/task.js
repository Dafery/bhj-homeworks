'use strict';

const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
  pollTitle.innerText = xhr.response.data.title;

  const responseAnswers = xhr.response.data.answers;
  responseAnswers.forEach((answer) => {
    pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${answer}</button>`);
  });

  pollAnswers.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Спасибо, ваш голос засчитан!');
  });
});
