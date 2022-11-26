'use strict'

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetCounters() {
  deadCounter = 0;
  lostCounter = 0;
  dead.textContent = deadCounter;
  lost.textContent = lostCounter;
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')) {
      deadCounter++;
      dead.textContent = deadCounter;
    } else {
      lostCounter++;
      lost.textContent = lostCounter;
    }

    if (deadCounter === 10) {
      alert('Вы победили!');
      resetCounters();
    } else if (lostCounter === 5) {
      alert('Вы проиграли!');
      resetCounters();
    }         
  };
};