'use strict'
const a = document.querySelector('.wrapper');
const menu = document.querySelector('.about');
console.log(menu);
const section1 = document.querySelector('#about');

menu.addEventListener('click', function() {
    section1.scrollIntoView({behavior: 'smooth'});
    a.classList.add('static');
});

