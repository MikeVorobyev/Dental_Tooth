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
});

// Создаем контроллеры без кнопок
const swiperController1 = new Swiper('.reviews__swiper_controller-1', {
    loop: true,
    // Убираем навигацию у контроллеров
    allowTouchMove: false,
    simulateTouch: false
});

const swiperController2 = new Swiper('.reviews__swiper_controller-2', {
    loop: true,
    allowTouchMove: false,
    simulateTouch: false
});

// Связываем слайдеры для синхронизации слайдов
reviewsSwiper.controller.control = [swiperController1, swiperController2];

// ======= Вешаем обработчики на кнопки =======
document.querySelector('.reviews__swiper_controller-1 .swiper-button-left').addEventListener('click', () => {
    console.log('← ВАША кнопка "назад"');
    reviewsSwiper.slidePrev();
});

document.querySelector('.reviews__swiper_controller-2 .swiper-button-right').addEventListener('click', () => {
    console.log('→ ВАША кнопка "вперед"');
    reviewsSwiper.slideNext();
});
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

