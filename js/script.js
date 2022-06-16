'use strict'
const nav = document.querySelector('.wrapper');
const menu = document.querySelector('.nav__links');
console.log(menu);

menu.addEventListener('click', function() {
    nav.classList.add('static');
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
    // console.log(e.target);

    // Matching strategy
    if(e.target.classList.contains('nav__link')) {
        console.log(e);
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
      $section = $('section');

let numOfPages = $section.length - 1; //取得section的數量
let curPage = 0; //初始頁
let scrollLock = false;

function scrollPage() {
  //滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
        navigateUp();
    }
    else{
        navigateDown();
    } 
  });
  $(document).on("keydown", function(e) {
    if (scrollLock) return;
    if (e.which === 38)
      navigateUp();
    else if (e.which === 40)
      navigateDown();
  });
}

function pagination() {
  scrollLock = true;
  $body.stop().animate({
    scrollTop: $section.eq(curPage).offset().top
  }, 1000, 'swing', function(){
    scrollLock = false;
  });
};

function navigateUp () {
  if (curPage === 0) {
    nav.classList.remove('static');
    return;
  }
  curPage--;
  pagination();
};

function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
};


$(function() {
  scrollPage();
  console.log(curPage);
  if(curPage<1) {
    nav.classList.remove('static');
  }
  else{
    nav.classList.add('static');
  }
});


document.addEventListener('keydown',function(e) {
  setTimeout(function() {
    const navHeight = document.querySelector('#nav').getBoundingClientRect().top;
    console.log(navHeight);
},1000) ;

})
