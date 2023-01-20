import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');

// -- Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobile_menu);
  }
  else {
    enableBodyScroll(mobile_menu);
  }
})

// - Закрытие по клику на пункт меню
nav_list.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'a') return;

  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (mobile_menu.classList.contains('main-nav__nav-menu--mobile--active')) {
    enableBodyScroll(mobile_menu);
  }
};

// --- Закрытие спойлерных блоков при открытии нового
let spoilers = document.querySelectorAll('.faq__check-hidden');

spoilers.forEach((element) => {
  element.addEventListener('click', (e) => {
    for (let i = 0; i < spoilers.length; i++) {
      if (spoilers[i] !== e.target) {
        spoilers[i].checked = false;
      }
    }
  })
})

// Модальное окно с подтверждением оплаты
window.addEventListener('load', () => {
  if (document.getElementById('form1') === null || document.getElementById('form1') === null) {
    return;
  }
  else {
    let form1 = document.getElementById('form1');
    let form2 = document.getElementById('form2');
    let modal = document.getElementById('modal');
    let modal_close = document.getElementById('modal_close');

    form1.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.add('modal--active');
      disableBodyScroll(modal);
    })

    form2.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.add('modal--active');
      disableBodyScroll(modal);
    })

    modal_close.addEventListener('click', () => {
      modal.classList.remove('modal--active');
      enableBodyScroll(modal);
    })

    modal.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        modal.classList.remove('modal--active');
        enableBodyScroll(modal);
      }
    })
  }
});