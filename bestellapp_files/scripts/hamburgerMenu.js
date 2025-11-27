function clickHamburgerMenu(){
    const menu = document.getElementById("stickyMain");
    const sticky = document.getElementById ("hamburgerMenuHeader");

    if(menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}


