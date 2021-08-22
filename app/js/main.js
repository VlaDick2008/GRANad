$(function(){

  const historySwiper = new Swiper('.section-history-slider', {
    speed: 400,
    spaceBetween: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: { 
      crossFade: true 
    },
    breakpoints: {
      575: {
        spaceBetween: 700,
        allowTouchMove: true,
      },
      1299: {
        allowTouchMove: false,
      }
    }

  });

  $('#header-link-team').on('click', function(a){
    $('html,body').stop().animate({ scrollTop: $('#section-team').offset().top }, 1000);
    e.preventDefault();
  });
  $('#header-link-history').on('click', function(b){
    $('html,body').stop().animate({ scrollTop: $('#section-history').offset().top }, 1000);
    e.preventDefault();
  });
  $('#header-link-join').on('click', function(c){
    $('html,body').stop().animate({ scrollTop: $('#section-join').offset().top }, 1000);
    e.preventDefault();
  });



  const iconMenu = document.querySelector(".section-header__burger");
  const iconIco1 = document.querySelector(".section-header__burger-ico1");
  const iconIco2 = document.querySelector(".section-header__burger-ico2");
  const iconNav = document.querySelector(".section-header__nav");
  if (iconMenu) {
    iconMenu.addEventListener("click", function (icon1) {
      iconIco2.classList.toggle("section-header__burger-ico2--active");
      iconNav.classList.toggle("section-header__nav--active");
      iconIco1.style.animationName="none";
    });
  };



  
});