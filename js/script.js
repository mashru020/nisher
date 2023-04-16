'use strict'
const nav = document.querySelector('.wrapper');
const menu = document.querySelector('.nav__links');
const avatar = document.getElementById('avatar');

avatar.addEventListener('click',(e)=>{
  nav.classList.remove('static');
  curPage = 0;
  e.preventDefault();
  document.getElementById('nav').scrollIntoView({ behavior: 'smooth' });
})
menu.addEventListener('click', function () {
  nav.classList.add('static');
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    curPage= Number(e.target.hash.slice(-1));
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
  $section = $('section');

let numOfPages = $section.length - 1;
let curPage = 0; 
let scrollLock = false;

function scrollPage() {
  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {

      if(curPage === 1){
        setTimeout(()=>{
          nav.classList.remove('static');
        }, 900);
        
      }
      navigateUp();

    }
    else {
      navigateDown();
    }
  });
  $(document).on("keydown", function (e) {
    if (scrollLock) return;
    if (e.which === 38){
      if(curPage === 1){
        setTimeout(()=>{
          nav.classList.remove('static');
        }, 900);
        navigateUp();
      }
      else{
        navigateUp();
      }
    }
      
    else if (e.which === 40)
      navigateDown();
  });
}

function pagination() {
  scrollLock = true;
  $body.stop().animate({
    scrollTop: $section.eq(curPage).offset().top
  }, 1000, 'swing', function () {
    scrollLock = false;
  });
};

function navigateUp() {
  if (curPage === 0) return;
  curPage--;
  pagination();
};

function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  // console.log(curPage);
  if (curPage > 0) {
    nav.classList.add('static');
  }
    pagination();
  
};


$(function () {
  scrollPage();

});


document.addEventListener('keydown', function (e) {
  setTimeout(function () {
    const navHeight = document.querySelector('#nav').getBoundingClientRect().top;
    // console.log(navHeight);
  }, 1000);

})

