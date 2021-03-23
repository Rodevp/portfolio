//import './app.css';

const CLASS_MENU = 'hamburguer-menu-animation-view';

const menuItems = document.getElementsByClassName('header__list-item');
const checkbox = document.getElementById('pitcher');
const header = document.getElementById('header');
const hamburguerLineaMenu = document.getElementsByClassName('activator-menu-linea');
const headerList = document.getElementById('header__list');


checkbox.addEventListener('click', e => {
    if (!headerList.classList.contains(CLASS_MENU) && checkbox.checked) {
        headerList.classList.add(CLASS_MENU);
    }
    if (headerList.classList.contains(CLASS_MENU) && !checkbox.checked) {
        headerList.classList.remove(CLASS_MENU);
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