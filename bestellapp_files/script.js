const menuSection = document.getElementById("menuSection");
const cartSidebar = document.getElementById("cartSidebar");
const cartSidebarContent = document.getElementById("cartSidebarContent");
const cartModal = document.getElementById("cartModal");
const cartModalContent = document.getElementById("cartModalContent");

function init() {
    renderMenu();
}

function renderMenu() {
    menuSection.innerHTML = "";
    menuSection.innerHTML += `
        <img id="menuHeaderImage" src="./assets/imgs/allDishesImg.png" alt="Hauptgerichte">
    `;

    for (let i = 0; i < menuItems.length; i++) {
        let dishItem = menuItems[i];
        let priceChange = dishItem.price.toFixed(2).replace(".", ",");
        let html = renderMenuItem(dishItem, priceChange, i);
        menuSection.innerHTML += html;
    }
}

function renderCart() {
    cartSidebarContent.innerHTML = "";
    cartModalContent.innerHTML = "";

    let html = `<ul class="cartList">`;
    let hasItems = false;

    for (let j = 0; j < menuItems.length; j++) {
        let dishItem = menuItems[j];

        if (dishItem.amount > 0) {
            hasItems = true;
            html += renderMenuItem(dishItem, null, j);
        }
    }

    html += `</ul>`;

    if (!hasItems) {
        html += `
            <div>
                <p>Dein Warenkorb ist leer.</p>
            </div>
        `;

        cartSidebarContent.innerHTML = html;
        cartModalContent.innerHTML = html;
        return;
    }

    let sumNumber = calculateSubtotal();
    let sumText = sumNumber.toFixed(2).replace(".", ",");

    let delivery = calculateDeliveryFee();
    let deliveryText = delivery.toFixed(2).replace(".", ",");

    let total = sumNumber + delivery;
    let totalText = total.toFixed(2).replace(".", ",");

    html += renderCartSummary(sumText, deliveryText, totalText);

    cartSidebarContent.innerHTML = html;
    cartModalContent.innerHTML = html;
}

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

function calculateSubtotal() {
    let sum = 0;

    for (let i = 0; i < menuItems.length; i++) {
        let dishItem = menuItems[i];

        if (dishItem.amount > 0) {
            sum += dishItem.amount * dishItem.price;
        }
    }
    return sum;
}

function calculateDeliveryFee() {
    return 5.00;
}

function submitOrder() {
    for (let k = 0; k < menuItems.length; k++) {
        menuItems[k].amount = 0;
    }

    cartSidebarContent.innerHTML = renderOrderCompleteMessage();

    cartModalContent.innerHTML = "";

    if (cartModal.open) {
        cartModal.close();
    }

    alert("Vielen Dank für deine Bestellung!");
}

function openMobileCart() {
    cartModalContent.innerHTML = "";
    cartModal.showModal();
    renderCart();
}

function closeCartModal() {
    cartModal.close();
}