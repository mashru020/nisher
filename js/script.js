'use strict'
const a = document.querySelector('.wrapper');
const menu = document.querySelector('.about--btn');
console.log(menu);
const section1 = document.querySelector('#section--2');

menu.addEventListener('click', function() {
    section1.scrollIntoView({behavior: 'smooth'});
    a.classList.add('static');
});


