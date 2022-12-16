'use strict';

const body = document.querySelector('body');

function addTooltip(e) {
  e.preventDefault();

  let tooltip = e.target.nextElementSibling;
  const targetСoordinates = e.target.getBoundingClientRect();

  if (tooltip === null || !tooltip.classList.contains('tooltip_active')) {
    const tooltipActive = document.querySelector('.tooltip_active');

    if (tooltipActive) tooltipActive.remove();

    e.target.insertAdjacentHTML(
      'afterEnd',
      `<div class="tooltip tooltip_active" data-position="top">${e.target.title}</div>`
    );

    tooltip = e.target.nextElementSibling;
    const tooltipСoordinates = tooltip.getBoundingClientRect();

    switch (tooltip.dataset.position) {
      case 'top':
        tooltip.style.top = targetСoordinates.top - targetСoordinates.height - 10 + 'px';
        tooltip.style.left = targetСoordinates.left + 'px';
        break;
      case 'left':
        tooltip.style.top = targetСoordinates.top + 'px';
        tooltip.style.left = targetСoordinates.right - targetСoordinates.width - tooltipСoordinates.width + 'px';
        break;
      case 'right':
        tooltip.style.top = targetСoordinates.top + 'px';
        tooltip.style.left = targetСoordinates.left + targetСoordinates.width + 'px';
        break;

      default:
        tooltip.style.top = targetСoordinates.bottom + 5 + 'px';
        tooltip.style.left = targetСoordinates.left + 'px';
        break;
    }
  } else {
    tooltip.remove();
  }
}

body.addEventListener('click', addTooltip);
