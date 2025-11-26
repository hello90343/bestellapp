
function aDSHtmlOne(keyDishes, priceChange, i) {

    if (keyDishes.amount > 0) {
        return `
            <li class="aDSMoney">
                <h3>${keyDishes.name}</h3>

                <div class="aDSBottom">
                    <div class="aDSAmount">
                        <button onclick="removeMore(${i})">&minus;</button>
                        ${keyDishes.amount}x 
                        <button onclick="addMore(${i})">&plus;</button>
                    </div>

                    <div class="aDSMoneyTwo">
                        ${(keyDishes.price * keyDishes.amount).toFixed(2).replace(".", ",")} ${keyDishes.currency}
                    </div>

                    <div onclick="deleteItem(${i})" class="aDSTrash">
                        &#128465;
                    </div>
                </div>
            </li>
        `;
    }


    return `
        <section class="aDSMeal">
            <article class="aDSMealLeft">
                <h3>${keyDishes.name}</h3>
                <p><span style="font-weight: 100;">${keyDishes.description}</span></p>
                <p><span style="color: rgb(235, 152, 0); font-weight:600;">
                    ${priceChange}${keyDishes.currency}
                </span></p>
            </article>

            <button onclick="addMore(${i})" class="aDSMealRight">&#65291;</button>
        </section>
    `;
}

function htmlThree(sumText, deliveryText, totalText){
    return `
        <br>
        <div class="cartSum">
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

            <button onclick="orderFood()" id="buttonBestellen">Bestellen</button>
        </div>
    `;
}

function hmtlFour(){
    return `
                               <p>Danke für deine Bestellung.</p>
                               <br>
                               <p>Lust auf mehr ?</p>
                               <br>
                               <p>Schaue auf die linke Seite, dann wirst du fündig</p>
                               `;
}