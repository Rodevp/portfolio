
const CLASS_MENU = 'hamburguer-menu-animation';

const menu = document.getElementById('menu');
const menuItems = document.getElementsByClassName('header__list-item');
const checkbox = document.getElementById('pitcher');
const menuHeader = document.querySelector('.header__list');
const header = document.getElementById('header');
const hamburguerLineaMenu = document.getElementsByClassName('activator-menu-linea');
const modal = document.getElementById('modal');
const btnCloseModal = document.getElementById('close_modal');

setTimeout(() => {
    modal.classList.add('modal__animation');
}, 1000)

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('modal__animation');
});

checkbox.addEventListener('click', e => {
    if ( checkbox.checked && !menu.classList.contains(CLASS_MENU) ) {
        menu.classList.add(CLASS_MENU);
    };
    if ( !checkbox.checked && menu.classList.contains(CLASS_MENU) ) {
        menu.classList.remove(CLASS_MENU);
    }
  
});

function mappingHmaburguerMenu(items, screenSize) {
    const itemsHtml = [...items];
    itemsHtml.forEach( item => {
        if (screenSize > 0) {
            item.style.backgroundColor = "white";
        }
        if (screenSize === 0) {
            item.style.backgroundColor = "black";
        }

    });
}

window.onscroll = (e) => {
    mappingHmaburguerMenu(hamburguerLineaMenu, header.offsetTop);
    if (header.offsetTop > 0) {
        header.classList.add('change__header_scroll');
    } else {
        header.classList.remove('change__header_scroll');
    }
}   