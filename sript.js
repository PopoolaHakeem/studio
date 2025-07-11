var MenuButton = document.querySelector('#menu-icon');
var CancelButton = document.querySelector('#cancel-icon');
var navlist = document.querySelector('#navbar-list')

MenuButton.onclick = function() {
    MenuButton.style.display = 'none'
    CancelButton.style.display = 'block'
    navlist.style.display = 'block'
}