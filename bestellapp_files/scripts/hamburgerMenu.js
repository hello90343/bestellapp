function toggleSidebarCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    const headerToggle = document.getElementById("menuToggleHeader");

    if (cartSidebar.style.display === "flex") {
        cartSidebar.style.display = "none";
    } else {
        cartSidebar.style.display = "flex";
    }
}