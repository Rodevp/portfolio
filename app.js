const CLASS_MENU = 'hamburguer-menu-animation';

const menu = document.getElementById('menu');
const menuItems = document.getElementsByClassName('header__list-item');
const checkbox = document.getElementById('pitcher');

function mappingItemasClassAddOrRemove(arr) {
    const arrItems = [...arr];
    arrItems.forEach(item => {
        if(!item.classList.contains('header__list--item-view-animation')
            && checkbox.checked
        ) {
            item.classList.add('header__list--item-view-animation');
        }
        if (item.classList.contains('header__list--item-view-animation')
            && !checkbox.checked
        ) {
            item.classList.remove('header__list--item-view-animation');
        }
    });
}

checkbox.addEventListener('click', e => {
    if ( checkbox.checked && !menu.classList.contains(CLASS_MENU) ) {
        menu.classList.add(CLASS_MENU);
        mappingItemasClassAddOrRemove(menuItems);
    };
    if ( !checkbox.checked && menu.classList.contains(CLASS_MENU) ) {
        menu.classList.remove(CLASS_MENU);
        mappingItemasClassAddOrRemove(menuItems);
    }
});