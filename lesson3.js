const menuEl = document.getElementById('menu_el');
const menuBar = document.getElementById('menu_bar');
const menuEx = document.getElementById('menu_ex');
let widthx = window.innerWidth;
function showMenu() {
    if (menuEl.classList.contains('hidden')) {
        menuEl.classList.remove('hidden');
    } else {
        menuEl.classList.add('hidden');
    }
    if (menuBar.classList.contains('block')) {
        menuBar.classList.remove('block');

    } else {
        menuBar.classList.add('hidden');
        menuEx.setAttribute('class', 'md:hidden block px-4');
    }
}

function showMenubar() {
    if (menuEx.classList.contains('block') && menuBar.classList.contains('hidden')) {
        menuEx.classList.remove('block');
        menuBar.classList.remove('hidden');
        menuEl.classList.add('hidden');
        menuEx.classList.add('hidden');
    }


}

menuEx.addEventListener('click', showMenubar, false);
menuBar.addEventListener('click', showMenu, false);