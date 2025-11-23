const allDishesSection = document.getElementById("allDishesSection");

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
        let html = aDSHtml(keyDishes, priceChange);
                     allDishesSection.innerHTML += html;
    }
}