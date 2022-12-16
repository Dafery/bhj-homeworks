'use strict';

const tasksForm = document.querySelector('#tasks__form');

const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
tasks.forEach((value) => addTask(value));

function addTask(inputValue) {
  const tasksList = document.querySelector('#tasks__list');
  tasksList.insertAdjacentHTML(
    'beforeEnd',
    `<div class="task">
      <div class="task__title">
        ${inputValue}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
  );

  const taskRemove = tasksList.lastChild.querySelector('.task__remove');
  taskRemove.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.closest('.task').remove();

    const taskIdx = tasks.indexOf(inputValue);
    tasks.splice(taskIdx, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}

tasksForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = e.target['task__input'].value;

  if (inputValue) {
    addTask(inputValue);

    tasks.push(inputValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.currentTarget.reset();
  }
});
