let navMain = document.querySelector('.main-nav');
let headerToggle = document.querySelector('.header-logo__toggle');
let beforeImage = document.querySelector('.before-image');
let afterImage = document.querySelector('.after-image');
let beforeButton = document.querySelector('.slide-toggle__before');
let afterButton = document.querySelector('.slide-toggle__after');
let togleBar = document.querySelector('.slide-toggle__bar');

headerToggle.classList.remove('header-logo__toggle--nojs');
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

headerToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    headerToggle.classList.remove('header-logo__toggle--burger');
    headerToggle.classList.add('header-logo__toggle--close');
  } else {
    navMain.classList.add('main-nav--closed');
    headerToggle.classList.remove('header-logo__toggle--close');
    headerToggle.classList.add('header-logo__toggle--burger');
  }
});

beforeButton.addEventListener('click', function () {
  if (beforeImage.classList.contains('before-after__image--hide')) {
    beforeImage.classList.remove('before-after__image--hide');
    afterImage.classList.add('before-after__image--hide');
  }
  if (togleBar.classList.contains('slide-toggle__bar--after')) {
    togleBar.classList.remove('slide-toggle__bar--after');
    togleBar.classList.add(('slide-toggle__bar--before'));
  }
});

afterButton.addEventListener('click', function () {
  if (afterImage.classList.contains('before-after__image--hide')) {
    afterImage.classList.remove('before-after__image--hide');
    beforeImage.classList.add('before-after__image--hide');
  }
  if (togleBar.classList.contains('slide-toggle__bar--before')) {
    togleBar.classList.remove('slide-toggle__bar--before');
    togleBar.classList.add(('slide-toggle__bar--after'));
  }
});
