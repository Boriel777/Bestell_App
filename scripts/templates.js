function zuAscii(text) {
    return text
        .toLowerCase()
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/\s+/g, "-");
}



function getMenuTemplate(category, meal) {
    let mealsHTML = "";
    let id = zuAscii(category);
    for (let meal_i = 0; meal_i < meal.length; meal_i++) {
        mealsHTML += getMealTemplate(meal[meal_i]);
    }

    return `
    <section id="cat-${id}">
        <h2 id="title-${id}">${category}</h2>
        <div class="meal_wrapper">${mealsHTML}</div>
    </section>
    `;
};

function getMealTemplate(meal) {
    return `
        <img src="${meal.img}" alt="${meal.meal_name} Foto">
        <h3 class="meal_name">${meal.meal_name}</h3>
        <p><span>Zutaten:</span> ${meal.ingredients}</p>
        <div class="cta_wrapper"><p><span>Preis:</span> € ${meal.price.toFixed(2)}</p>
            <button type="submit" id="to_basket_cta-${meal.id}" onclick="pushToShoppingCart('${meal.meal_name}', ${meal.price}, '${meal.id}')">
                In den Warenkorb
            </button>
        </div>
    `;
};

let ShoppingCartArray = [];

function getShoppingCartTemplate() {
    if (ShoppingCartArray.length === 0) {
        return `
        <h2>Dein Warenkorb</h2>
        <p>Dein Warenkorb ist leer.</p>
        <img src="assets/icons/shopping_cart.svg" alt="Leerer Warenkorb">
        `;
    }

    let ShoppingCartHTML = "";
    let subtotal = 0;

    for (let i = 0; i < ShoppingCartArray.length; i++) {
        let mealName = ShoppingCartArray[i].title;
        let mealPrice = ShoppingCartArray[i].price;
        let mealId = ShoppingCartArray[i].id;
        let mealAmount = ShoppingCartArray[i].amount;

        subtotal += mealPrice * mealAmount;
        ShoppingCartHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
    }
    
    let deliveryFee = 5;
    let total = subtotal + deliveryFee;

    return `
    <h2>Dein Warenkorb</h2>
    <div id="shopping_cart_wrapper">${ShoppingCartHTML}</div>
    <div id="check_sum">${getShoppingCartSumTemplate(subtotal, deliveryFee, total)}</div>
    <button onclick="placeOrder()">Jetzt Bestellen</button>
    `;
};

function getShoppingCartMealTemplate(mealName, mealPrice, mealId) {
    return `
    <div class="cart_meal_wrapper" id="${mealId}">
        <h3 class="meal_name">${mealName}</h3>
        <button type="submit" id="${mealId}-delete" onclick="removeFromCart('${mealId}')"><img src="assets/icons/delete.svg"></button>
        <div class="price_wrapper">
            <button type="submit" onclick="changeAmount('${mealId}', 1)">+</button>
            <p id="${mealId}-amount">1</p>
            <button id="${mealId}-minus" class="hidden" type="submit" onclick="changeAmount('${mealId}', -1)">-</button>
            <p id="${mealId}-price"><span>Preis:</span> € ${mealPrice.toFixed(2)}</p>
        </div>
    </div>
    `;
};

function getShoppingCartSumTemplate(subtotal, deliveryFee, total) {
    return `
        <div class="cart_sum">
            <span>Zwischensumme:</span><p>€ ${subtotal.toFixed(2)}</p>
            <span>Lieferkosten:</span><p>€ ${deliveryFee.toFixed(2)}</p>
        </div><hr><div class="cart_sum">
        <span>Gesamtbetrag:</span><p>€ ${total.toFixed(2)}</p>
        </div>
    `;
};