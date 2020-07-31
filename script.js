const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav__stuff-box');
const btnPrimary = document.querySelector('.btn--primary');
const cta = document.querySelector('.cta');
const background = document.querySelector('.background');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');
const listLink = document.querySelectorAll('.dropdown .list-link');
const dropDownMenuName = document.querySelector('.dropdown-menu-name-box span') 
const dropDownMenuBox = document.querySelector('.dropdown-menu-name-box') 


const removeHover = () => {
    if(window.innerWidth <= 1000) {
        dropdownMenu.forEach((menu) => {
            menu.classList.remove('addHover');
        })
    }
}

const addHover = () => {
    dropdownMenu.forEach((menu) => {
        menu.classList.add('addHover');
    })
}

const removeSlideIn = () => {
    dropdownMenu.forEach((menu) => {
        menu.classList.remove('slideIn');
    })
}

burger.addEventListener('click', () => {
    nav.classList.toggle('slideIn');
    burger.classList.toggle('delete');
    background.classList.toggle('add-bg');
})

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
        listLink.forEach((link) => {
            if(dropdown.contains(link)) {
                dropDownMenuName.textContent = link.textContent
                dropDownMenuBox.classList.add('removeOpacity')
            }
        })

        if(window.innerWidth <= 1000) {
            dropdownMenu.forEach((menu) => {
                if(dropdown.contains(menu)) {
                    menu.classList.add('slideIn');
                }
            })
            
        }
    })
})

dropDownMenuBox.addEventListener('click', () => {
    removeSlideIn();
    dropDownMenuBox.classList.remove('removeOpacity')
})



removeHover()

window.addEventListener('resize', () => {
    if(window.innerWidth <= 1000) {
        removeHover()
        if(nav.classList.contains('slideIn')) {
            background.classList.add('add-bg');
        }
    }

    if(window.innerWidth > 1000) {
        addHover();
        if(nav.classList.contains('slideIn')) {
            background.classList.remove('add-bg');
        }
    }
})



