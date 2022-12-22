var menuIcon = document.getElementById("menu-icon")
menuIcon.addEventListener("click", openMenu)

function openMenu(event) {
    var navMenu = document.getElementById("navigation-menu")
    navMenu.classList.toggle("active")
    console.log(navMenu.classList)
}