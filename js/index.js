const hamburgerMenuWrapperIcon = document.querySelector('.hamburger-menu__wrapper_icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');



hamburgerMenuWrapperIcon.addEventListener('click', () => {
    hamburgerMenuWrapperIcon.classList.toggle('hamburger-menu__wrapper_icon--active');
    mobileMenu.classList.toggle('mobile-menu--active');
    body.classList.toggle('no_scroll');
})

// ------------ REVIEWS SWIPER START -------------
const reviewsSwiper = new Swiper('.reviews__swiper', {
    loop: true,
    navigation: {
      nextEl: '.reviews__swiper .swiper-button-next',
      prevEl: '.reviews__swiper .swiper-button-prev',
    }
  });

  const swiperController1 = new Swiper('.reviews__swiper_controller-1', {
    loop: true,
    navigation: {
      nextEl: '.reviews__swiper_controller-1 .swiper-button-next',
      prevEl: '.reviews__swiper_controller-1 .swiper-button-prev',
    }
  });

  const swiperController2 = new Swiper('.reviews__swiper_controller-2', {
    loop: true,
    navigation: {
      nextEl: '.reviews__swiper_controller-2 .swiper-button-next',
      prevEl: '.reviews__swiper_controller-2 .swiper-button-prev',
    }
  });
  
reviewsSwiper.controller.control = swiperController1;
swiperController1.controller.control = reviewsSwiper;
reviewsSwiper.controller.control = swiperController2;
swiperController2.controller.control = reviewsSwiper;
// ------------- REVIEWS SWIPER END --------------


/* ===========   magnific-popup START   ======= */    /* Тут используется JQuery */
$(document).ready(function() {
  $('.header__bottom_btn').magnificPopup({
    type:'inline',
    removalDelay: 700, /* Так мы указываем плавность анимации появления окна popup */
    callbacks: {
			beforeOpen: function() {
			   this.st.mainClass = this.st.el.attr('data-effect'); /* Создаем обращение к дата-атрибуту 'data-effect', через который будет  */
			}                                                      /* осуществляться связь эффекта с кнопкой при нажатии на  */
		},                                                       /* которую буде т происходить эффект появлениЯ окна popup */
  });
});
/* ===========   magnific-popup END   ======= */

