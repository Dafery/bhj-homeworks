'use strict'

// const timer = document.getElementById('timer');

const timerId = setInterval(function() {
  if (!+timer.textContent) {
    alert('Вы победили в конкурсе!');
    clearInterval(timerId);
    return;
  }
  
  +timer.textContent--;
}, 1000);

// Повышенный уровень сложности #1

let hours = 1;
let minutes = 0;
let seconds = 3;

let counter = hours * 3600 + minutes * 60 + seconds;
timer.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

const timerId = setInterval(function() {
  if (!counter) {
    alert('Вы победили в конкурсе!');
    clearInterval(timerId);
    return;
  }

  --counter;
  hours = addZero(Math.floor(counter / 3600));
  minutes = addZero(Math.floor(counter / 60) % 60);
  seconds = addZero(counter % 60);  
  timer.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Повышенный уровень сложности #2

const timer = document.getElementById('timer');

const timerId = setInterval(function() {
  if (!+timer.textContent) {
    location.assign('https://z2.fm/download/21616105');
    clearInterval(timerId);
    return;
  }

  +timer.textContent--;
}, 1000);