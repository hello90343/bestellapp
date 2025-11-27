// =======================
// DOM ELEMENTE
// =======================
const menuSection = document.getElementById("menuSection");
const cartSidebarContent = document.getElementById("cartSidebarContent");
const cartModalContent = document.getElementById("cartModalContent");
const cartModal = document.getElementById("cartModal");

// =======================
// INITIALISIERUNG
// =======================
function init() {
    renderMenu();
    updateMobileCartCount();
}

// =======================
// MENU RENDERING
// =======================
function renderMenu() {
    menuSection.innerHTML = `
        <img id="menuHeaderImage" src="./assets/imgs/allDishesImg.png" alt="Hauptgerichte">
    `;

    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        let price = item.price.toFixed(2).replace(".", ",");
        menuSection.innerHTML += templateMenuItem(item, price, i);
    }
}

// =======================
// WARENKORB RENDERING
// =======================
function renderCart() {
    cartSidebarContent.innerHTML = "";
    cartModalContent.innerHTML = "";

    let itemsHtml = collectCartItemsHtml();

    if (itemsHtml === "") {
        renderEmptyCart();
        updateMobileCartCount();
        return;
    }

    let cartTexts = calculateCartTexts();
    let summaryHtml = templateCartSummary(cartTexts.sum, cartTexts.delivery, cartTexts.total);
    let fullHtml = templateFullCartHtml(templateCartItemsList(itemsHtml), summaryHtml);

    cartSidebarContent.innerHTML = fullHtml;
    cartModalContent.innerHTML = fullHtml;

    updateMobileCartCount();
}

function collectCartItemsHtml() {
    let html = "";

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].amount > 0) {
            html += templateMenuItemInCart(menuItems[i], i);
        }
    }
    return html;
}

function renderEmptyCart() {
    let emptyHtml = templateCartItemsList("") + templateEmptyCart();

    cartSidebarContent.innerHTML = emptyHtml;
    cartModalContent.innerHTML = emptyHtml;
}

// =======================
// BERECHNUNGEN
// =======================
function calculateCartTexts() {
    let sum = calculateSubtotal().toFixed(2).replace(".", ",");
    let delivery = calculateDeliveryFee().toFixed(2).replace(".", ",");
    let total = (calculateSubtotal() + calculateDeliveryFee())
        .toFixed(2)
        .replace(".", ",");

    return { sum, delivery, total };
}

function calculateSubtotal() {
    let sum = 0;
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].amount > 0) {
            sum += menuItems[i].amount * menuItems[i].price;
        }
    }
    return sum;
}

function calculateDeliveryFee() {
    return 5.00;
}

// =======================
// ITEM FUNKTIONEN
// =======================
function increaseItemAmount(i) {
    menuItems[i].amount++;
    renderCart();
}

function decreaseItemAmount(i) {
    menuItems[i].amount--;
    if (menuItems[i].amount < 0) menuItems[i].amount = 0;
    renderCart();
}

function removeItem(i) {
    menuItems[i].amount = 0;
    renderCart();
}

// =======================
// MOBILER WARENKORB-ZÄHLER
// =======================
function updateMobileCartCount() {
    let totalCount = 0;

    for (let i = 0; i < menuItems.length; i++) {
        totalCount += menuItems[i].amount;
    }

    document.getElementById("mobileCartCount").textContent = totalCount;
}

// =======================
// BESTELLUNG ABSCHICKEN
// =======================
function submitOrder() {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].amount = 0;
    }

    cartSidebarContent.innerHTML = templateOrderCompleteMessage();
    cartModalContent.innerHTML = "";

    if (cartModal.open) cartModal.close();

    updateMobileCartCount();
    alert("Vielen Dank für deine Bestellung!");
}

// =======================
// MODAL STEUERUNG
// =======================
function openMobileCart() {
    cartModal.showModal();
    renderCart();
}

function closeCartModal() {
    cartModal.close();
}