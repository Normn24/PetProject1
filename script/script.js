"use strict";

let tabActive = document.querySelectorAll(".ourServices__items");
let tabContent = document.querySelectorAll(".tabs__content li");
let arrow = document.querySelectorAll(".arrow__active");

tabActive.forEach((item) => {
  item.addEventListener('click', () => {

    tabActive.forEach((navLink) => {
      navLink.classList.remove('active');
      navLink.querySelector('.arrow__active').style.visibility = "hidden";
    });
    item.classList.add('active');
    item.querySelector('.arrow__active').style.visibility = "visible";
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


let workActive = document.querySelectorAll(".work__items");
let workContent = document.querySelectorAll(".work__img");

workActive.forEach((item) => {
  item.addEventListener('click', () => {

    workActive.forEach((navLink) => {
      navLink.classList.remove('work__active');
    });
    item.classList.add('work__active');

    const tabName = item.getAttribute('data-tab');
    workContent.forEach((content) => {
      content.style.display = 'none';
    });

    const tabContentActive = document.querySelectorAll(`[data-tab-content="${tabName}"], [data-parent="${tabName}"]`);

    tabContentActive.forEach((item) => {
      item.style.cssText = `
      display: block;
      `
    })
  });
});
