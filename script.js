const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav__stuff-box');
const btnPrimary = document.querySelector('.btn--primary');
const cta = document.querySelector('.cta');
const background = document.querySelector('.background');
const dropDownMenuName = document.querySelector('.dropdown-menu-name-box');

burger.addEventListener('click', () => {
    nav.classList.toggle('slideIn');
    background.classList.toggle('add-bg');
    dropDownMenuName.classList.toggle('appear-menu-name');
    // btnPrimary.classList.toggle('btn--primary-position-fix');
    // if(nav.classList.contains('slideIn')) {
    //     cta.style.display = 'none'
    // } else {

    //     setTimeout(() => {
    //         cta.style.display = 'block'
    //     }, 300)
        
    // }
})