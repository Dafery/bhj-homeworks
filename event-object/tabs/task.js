'use strict';

const tabsWrappers = [...document.querySelectorAll('.tabs')];

function switchingTabs(idx, tabs, tabsContent) {
  return () => {
    if (tabs[idx].classList.contains('tab_active')) return;

    let activeIdx = tabs.findIndex((el) => el.classList.contains('tab_active'));

    tabs[activeIdx].classList.remove('tab_active');
    tabsContent[activeIdx].classList.remove('tab__content_active');

    tabs[idx].classList.add('tab_active');
    tabsContent[idx].classList.add('tab__content_active');
  };
}

tabsWrappers.forEach((el) => {
  const tabs = [...el.querySelectorAll('.tab')];
  const tabsContent = [...el.querySelectorAll('.tab__content')];

  tabs.forEach((el, idx) => el.addEventListener('click', switchingTabs(idx, tabs, tabsContent)));
});
