let navMain=document.querySelector(".main-nav"),headerToggle=document.querySelector(".header-logo__toggle"),beforeImage=document.querySelector(".before-image"),afterImage=document.querySelector(".after-image"),beforeButton=document.querySelector(".slide-toggle__before"),afterButton=document.querySelector(".slide-toggle__after"),togleBar=document.querySelector(".slide-toggle__bar");headerToggle.classList.remove("header-logo__toggle--nojs"),navMain.classList.remove("main-nav--nojs"),navMain.classList.add("main-nav--closed"),headerToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),headerToggle.classList.remove("header-logo__toggle--burger"),headerToggle.classList.add("header-logo__toggle--close")):(navMain.classList.add("main-nav--closed"),headerToggle.classList.remove("header-logo__toggle--close"),headerToggle.classList.add("header-logo__toggle--burger"))})),beforeButton.addEventListener("click",(function(){beforeImage.classList.contains("before-after__image--hide")&&(beforeImage.classList.remove("before-after__image--hide"),afterImage.classList.add("before-after__image--hide")),togleBar.classList.contains("slide-toggle__bar--after")&&(togleBar.classList.remove("slide-toggle__bar--after"),togleBar.classList.add("slide-toggle__bar--before"))})),afterButton.addEventListener("click",(function(){afterImage.classList.contains("before-after__image--hide")&&(afterImage.classList.remove("before-after__image--hide"),beforeImage.classList.add("before-after__image--hide")),togleBar.classList.contains("slide-toggle__bar--before")&&(togleBar.classList.remove("slide-toggle__bar--before"),togleBar.classList.add("slide-toggle__bar--after"))}));