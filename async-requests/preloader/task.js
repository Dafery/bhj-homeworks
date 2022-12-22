'use strict';

const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {  
  loader.classList.remove('loader_active');

  const responseCurrencies = xhr.response.response.Valute;
  for (const currency in responseCurrencies) {
    items.insertAdjacentHTML(
      'beforeEnd',
      `<div class="item">
        <div class="item__code">${responseCurrencies[currency].CharCode}</div>
        <div class="item__value">${responseCurrencies[currency].Value}</div>
        <div class="item__currency">руб.</div>
      </div>`
    );
  }
});
