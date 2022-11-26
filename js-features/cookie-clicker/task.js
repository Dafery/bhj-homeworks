'use strict'

const clickerCounter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('click__speed');
const cookie = document.getElementById('cookie');
let timeLast = 0;

cookie.onclick = function() {
  cookie.width = ++clickerCounter.textContent % 2 ? 220 : 200;
  
  let speedAverage = 1 / ((new Date().getTime() / 1000) - timeLast);
  clickSpeed.textContent = speedAverage.toFixed(2);
  timeLast = new Date().getTime() / 1000;
};
