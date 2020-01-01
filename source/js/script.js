var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navMainList = document.querySelector('.main-nav__list');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--close');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    navToggle.classList.remove('main-nav__toggle--close');
  }
});
