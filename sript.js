var MenuButton = document.querySelector('.menu-icon');
var CancelButton = document.querySelector('.cancel-icon');
var navlist = document.querySelector('.navbar-list')

MenuButton.onclick = function() {
    MenuButton.style.display = 'none'
    CancelButton.style.display = 'block'
    navlist.style.display = 'block'
}
CancelButton.onclick = function() {
    MenuButton.style.display = 'block'
    CancelButton.style.display = 'none'
    navlist.style.display = 'none'
}