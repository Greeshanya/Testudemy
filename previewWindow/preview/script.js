'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
// Без прокрутки но с padding
// const width = box.clientWidth;
// const height = box.clientHeight;

// Уже как в css, со всеми прокрутками
// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

document.documentElement.scrollTop = 0; // можно повесить на стрелочку вверх
window.sctollBy(0, 400); //х = 0, н = 400;
window.sctollTo(0, 400);