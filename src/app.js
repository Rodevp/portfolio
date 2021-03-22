//import './app.css';

const CLASS_MENU = 'hamburguer-menu-animation';

const menu = document.getElementById('menu');
const menuItems = document.getElementsByClassName('header__list-item');
const checkbox = document.getElementById('pitcher');
const menuHeader = document.querySelector('.header__list');
const header = document.getElementById('header');
const hamburguerLineaMenu = document.getElementsByClassName('activator-menu-linea');


function mappingItemasClassAddOrRemove(arr, nameClassForItem, containClass){
    const arrItems = [...arr];
    arrItems.forEach(item => {
        if(!item.classList.contains(containClass)
            && checkbox.checked
        ) {
            item.classList.add(nameClassForItem);
        }
        if (item.classList.contains(containClass)
            && !checkbox.checked
        ) {
            item.classList.remove(nameClassForItem);
        }
    });
}

checkbox.addEventListener('click', e => {
    if ( checkbox.checked && !menu.classList.contains(CLASS_MENU) ) {
        menu.classList.add(CLASS_MENU);
    };
    if ( !checkbox.checked && menu.classList.contains(CLASS_MENU) ) {
        menu.classList.remove(CLASS_MENU);
    }
    if ( checkbox.checked ) menuHeader.style.display = "block";
    if ( !checkbox.checked ) menuHeader.style.display = "none";
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