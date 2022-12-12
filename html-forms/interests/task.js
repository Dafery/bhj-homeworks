'use strict';

const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('change', (e) => {
  const interestsActive = e.target.closest('.interest').querySelector('.interests_active');

  if (!e.target.closest('.interests_active')) {
    const interestChecks = interestsActive.querySelectorAll('.interest__check');

    for (const checkbox of interestChecks) {
      checkbox.checked = e.target.checked;
    }
  }
});
