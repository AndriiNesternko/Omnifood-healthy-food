const headerEl = document.querySelector('.header');
const mobileBtnEl = document.querySelector('.header__mobile-btn');

mobileBtnEl.addEventListener('click', function(){
    headerEl.classList.toggle('open');
    // document.body.classList.toggle('lock');
})