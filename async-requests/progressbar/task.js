'use strict';

const progress = document.querySelector('#progress');

document.forms.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(document.forms.form);

  xhr.upload.addEventListener('progress', (e) => {
    progress.value = e.loaded / e.total;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});
