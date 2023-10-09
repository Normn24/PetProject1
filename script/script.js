"use strict";

let tabActive = document.querySelectorAll(".ourServices__items");
let tabContent = document.querySelectorAll(".tabs__content li");

tabActive.forEach((item) => {
  item.addEventListener('click', () => {

    tabActive.forEach((navLink) => {
      navLink.classList.remove('active');
    });
    item.classList.add('active');

    const tabName = item.getAttribute('data-tab');
    tabContent.forEach((content) => {
      content.style.display = 'none';
    });

    const tabContentActive = document.querySelector(`[data-tab-content="${tabName}"]`);
    tabContentActive.style.cssText = `
    display: flex;
    justify-content: space-between;
    gap: 15px;
    `
  });
});
