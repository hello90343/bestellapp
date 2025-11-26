const allDishesSection = document.getElementById("allDishesSection");
const stickyMain = document.getElementById("stickyMain");
const stickyMainDiv = document.getElementById("stickyMainDiv");
const dialog = document.getElementById("dialog");
const dialogContent = document.getElementById("dialogContent");

function init() {
    renderPizza();
}

function renderPizza() {
    allDishesSection.innerHTML = "";
    allDishesSection.innerHTML += `
        <img id="aDSImg" src="./assets/imgs/allDishesImg.png" alt="Hauptgerichte">
    `;

    for (let i = 0; i < dishes.length; i++) {
        let keyDishes = dishes[i];
        let priceChange = keyDishes.price.toFixed(2).replace(".", ",");
        let html = aDSHtmlOne(keyDishes, priceChange, i);
        allDishesSection.innerHTML += html;
    }
}

function addShoppingCart() {
    stickyMainDiv.innerHTML = "";
    dialogContent.innerHTML = "";

    let html = `<ul class="cartList">`;
    let hasItems = false;


    for (let j = 0; j < dishes.length; j++) {
        let keyDishes = dishes[j];

        if (keyDishes.amount > 0) {
            hasItems = true;
            html += aDSHtmlOne(keyDishes, null, j);
        }
    }

    html += `</ul>`;

    if (!hasItems) {
        html += `
            <div>
                <p>Dein Warenkorb ist leer.</p>
            </div>
        `;

        stickyMainDiv.innerHTML = html;
        dialogContent.innerHTML = html;
        return; 
    }


    let sumNumber = subtotal();
    let sumText = sumNumber.toFixed(2).replace(".", ",");

    let delivery = deliveryCosts();
    let deliveryText = delivery.toFixed(2).replace(".", ",");

    let total = sumNumber + delivery;
    let totalText = total.toFixed(2).replace(".", ",");


    html += htmlThree(sumText, deliveryText, totalText);

    stickyMainDiv.innerHTML = html;
    dialogContent.innerHTML = html;
}

function addMore(i) {
    dishes[i].amount++;
    addShoppingCart();
}

function removeMore(i) {
    dishes[i].amount--;
    if (dishes[i].amount < 0) dishes[i].amount = 0;
    addShoppingCart();
}

function deleteItem(i) {
    dishes[i].amount = 0;
    addShoppingCart();
}

function subtotal() {
    let sum = 0;

    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i];

        if (dish.amount > 0) {
            sum += dish.amount * dish.price;
        }
    }
    return sum;
}

function deliveryCosts() {
    return 5.00;
}

function orderFood() {

    for (let k = 0; k < dishes.length; k++) {
        dishes[k].amount = 0;
    }

    stickyMainDiv.innerHTML = hmtlFour();

    dialogContent.innerHTML = "";


    if (dialog.open) {
        dialog.close();
    }

    alert("Vielen Dank für deine Bestellung!");

}

function clickHamburgerMenuRespo() {
    dialogContent.innerHTML = "";   
    dialog.showModal();
    addShoppingCart();
}

function closeDialog(){
    dialog.close();
}

