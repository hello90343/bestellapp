function aDSHtml(keyDishes, priceChange){
    return ` 
                     <section class="aDSMeal">
                     <article class="aDSMealLeft">
                     <h3>${keyDishes.name}</h3>
                     <p><span style="font-weight: 100;">${keyDishes.description}</span></p>
                     <p><span style="color: rgb(235, 152, 0); font-weight:600;">${priceChange}${keyDishes.currency}</span></p>
                     </article>
                     <button onclick="addShoppingCart()" class="aDSMealRight">&#65291;</button>
                     </section>
                     `;
}