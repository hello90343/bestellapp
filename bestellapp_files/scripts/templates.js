function aDSHtml(keyDishes, priceChange, i){
    return ` 
                     <section class="aDSMeal">
                     <article class="aDSMealLeft">
                     <h3>${keyDishes.name}</h3>
                     <p><span style="font-weight: 100;">${keyDishes.description}</span></p>
                     <p><span style="color: rgb(235, 152, 0); font-weight:600;">${priceChange}${keyDishes.currency}</span></p>
                     </article>
                     <button onclick="addMore(${i})" class="aDSMealRight aDSSelection${i}">&#65291;</button>
                     </section>
                     `;
}å

function aDSHtmlOne (keyDishes, j){
    return `
                <li class="aDSMoney">
                    <h3>${keyDishes.name}</h3>
                    <div class="aDSBottom">
                    <div class="aDSAmount">
                    <button onclick="removeMore(${j})">&minus;</button>
                    ${keyDishes.amount}x 
                    <button onclick="addMore(${j})">&plus;</button>
                    </div>
                    <div class="aDSMoneyTwo">
                    ${keyDishes.price.toFixed(2).replace(".", ",")} ${keyDishes.currency}
                    </div>
                    <div onclick="deleteItem(${j})" class="aDSTrash">
                    &#128465; 
                    </div>
                    </div>
                </li>
            `;
}