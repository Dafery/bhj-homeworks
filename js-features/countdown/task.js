'use strict'

const timer = document.getElementById('timer');

let hours = 1;
let minutes = 0;
let seconds = +timer.textContent;

let counter = hours * 3600 + minutes * 60 + seconds;
timer.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

const timerId = setInterval(function() {
  if (!counter) {
    alert('Вы победили в конкурсе!');
    location.assign('https://z2.fm/download/21616105');
    clearInterval(timerId);
    return;
  }

  --counter;
  hours = addZero(Math.floor(counter / 3600));
  minutes = addZero(Math.floor(counter / 60) % 60);
  seconds = addZero(counter % 60);  
  timer.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);