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
            html += aDSHtmlOne(keyDishes, j)
        }
    }

    html += `</ul>`; 
    stickyMainDiv.innerHTML = html;
}

function addMore(i) {
    dishes[i].amount++;
    addShoppingCart(i);  
}

function removeMore(i){
    dishes[i].amount--;
    addShoppingCart(i);
}

function deleteItem(i) {
    dishes[i].amount = 0;
    addShoppingCart(i);
}


