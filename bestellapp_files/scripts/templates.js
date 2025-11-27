function renderMenuItem(dishItem, priceChange, i) {

    if (dishItem.amount > 0) {
        return `
            <li class="cartItem">
                <h3>${dishItem.name}</h3>

                <div class="cartItemBottom">
                    <div class="cartItemAmount">
                        <button onclick="decreaseItemAmount(${i})">&minus;</button>
                        ${dishItem.amount}x 
                        <button onclick="increaseItemAmount(${i})">&plus;</button>
                    </div>

                    <div class="cartItemPrice">
                        ${(dishItem.price * dishItem.amount).toFixed(2).replace(".", ",")} ${dishItem.currency}
                    </div>

                    <div onclick="removeItem(${i})" class="cartItemDelete">
                        &#128465;
                    </div>
                </div>
            </li>
        `;
    }

    return `
        <section class="menuItem">
            <article class="menuItemInfo">
                <h3>${dishItem.name}</h3>
                <p><span style="font-weight: 100;">${dishItem.description}</span></p>
                <p><span style="color: rgb(235, 152, 0); font-weight:600;">
                    ${priceChange}${dishItem.currency}
                </span></p>
            </article>

            <button onclick="increaseItemAmount(${i})" class="menuItemAddBtn">&#65291;</button>
        </section>
    `;
}

function renderCartSummary(sumText, deliveryText, totalText) {
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

            <button onclick="submitOrder()" id="buttonBestellen">Bestellen</button>
        </div>
    `;
}

function renderOrderCompleteMessage() {
    return `
        <p>Danke für deine Bestellung.</p>
        <br>
        <p>Lust auf mehr ?</p>
        <br>
        <p>Schaue auf die linke Seite, dann wirst du fündig</p>
    `;
}