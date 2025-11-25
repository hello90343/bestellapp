const allDishesSection = document.getElementById("allDishesSection");
const stickyMain = document.getElementById("stickyMain");
const stickyMainDiv = document.getElementById("stickyMainDiv");

function init(){
    renderPizza()
}


function renderPizza() {
    allDishesSection.innerHTML = "";
    allDishesSection.innerHTML += `
                                   <img id="aDSImg" src="./assets/imgs/allDishesImg.png" alt="Hauptgerichte">
                                   `;

    for(let i = 0; i < dishes.length; i++) {
        let keyDishes = dishes[i];
        let priceChange = keyDishes.price.toFixed(2).replace(".", ",");
        let html = aDSHtml(keyDishes, priceChange, i);
                     allDishesSection.innerHTML += html;
    }
}


function addShoppingCart() {
    stickyMainDiv.innerHTML = "";

    let html = `<ul>`;

    for (let j = 0; j < dishes.length; j++) {
        let keyDishes = dishes[j];
        if (keyDishes.amount > 0) {
            html += aDSHtmlOne(keyDishes, j);
        }
    }

    html += `</ul>`;

    let sumNumber = subtotal(); 
    let sumText = sumNumber.toFixed(2).replace(".", ",");

    let delivery = deliveryCosts(); 
    let deliveryText = delivery.toFixed(2).replace(".", ",");

    let total = sumNumber + delivery; 
    let totalText = total.toFixed(2).replace(".", ",");

    html += `
        <div>
            <p>Zwischensumme</p>
            <p>${sumText} €</p>
        </div>
        <div>
            <p>Lieferkosten</p>
            <p>${deliveryText} €</p>
        </div>
        <div>
            <p>Gesamtkosten</p>
            <p>${totalText} €</p>
        </div>
    `;

    html += `
              <button onclick="orderFood()" id="buttonBestellen">Bestellen</button>
              `;

    stickyMainDiv.innerHTML = html;
}

function addMore(i) {
    dishes[i].amount++;
    addShoppingCart();  
}

function removeMore(i){
    dishes[i].amount--;
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

function deliveryCosts(){
    let fixSum = 5.00;
    return fixSum;
}

function orderFood() {
    for(let k = 0; k < dishes.length; k++){
        let keyDishes = dishes[k];
        keyDishes.amount = 0;
    }
    stickyMainDiv.innerHTML = "";
    alert("Vielen Dank für deine Bestellung!");
}


