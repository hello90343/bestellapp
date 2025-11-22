function clickHamburgerMenu(){
    const menu = document.getElementById("stickyMain");

    if(menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}