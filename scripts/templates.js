function getMenuTemplate(category, mealsHTML) {
    return `
    <section id="cat-${category.id}">
        <div class="cat_title"><h2 id="title-${category.id}">${category.name}</h2><img src="assets/icons/${category.id}_icon.png" alt="${category.name} icon"></div>
        <div class="meals_wrapper">${mealsHTML}</div>
    </section>
    `;
};

function getMealTemplate(meal) {
    return `
    <div class="meal_wrapper">
        <img src="${meal.img}" alt="${meal.mealName} Foto">
        <div class="meal_text_wrapper">
            <h3 class="mealName">${meal.mealName}</h3>
            <p><span>Zutaten:</span> ${meal.ingredients}</p>
        </div>
        <div class="cta_wrapper">
            <p><span>Preis:</span> € ${meal.price.toFixed(2)}</p>
            <button type="submit" id="to-basket-cta-${meal.id}" onclick="pushToShoppingCart('${meal.mealName}', ${meal.price}, '${meal.id}')">
                In den Warenkorb
            </button>
        </div>
    </div>
    `;
};

function getEmptyCartTemplate() {
    return `
        <button id="cart_modal_close_btn" aria-label="Warenkorb schließen">&times;</button>
        <h2>Dein Warenkorb</h2>
        <p>Dein Warenkorb ist leer. </br> Bestelle was leckeres.</p>
        <img class="empty_cart_img" src="assets/icons/shopping_cart.svg" alt="Leerer Warenkorb">
        `;
};

function getShoppingCartTemplate(shoppingCartHTML, subtotal, deliveryFee, total) {
    return `
    <button id="cart_modal_close_btn" aria-label="Warenkorb schließen">&times;</button>
    <h2>Dein Warenkorb</h2>
    <div id="shopping_cart_wrapper">${shoppingCartHTML}</div>
    <div id="check_sum">${getShoppingCartSumTemplate(subtotal, deliveryFee, total)}</div>
    <button class="order_cta_btn" onclick="placeOrder()">Jetzt Bestellen</button>
    `;
};

function getShoppingCartMealTemplate(mealName, mealPrice, mealId) {
    return `
    <div class="cart_meal_wrapper" id="${mealId}">
        <h3 class="mealName">${mealName}</h3>
        <button type="submit" id="${mealId}-delete" onclick="removeFromCart('${mealId}')"><img src="assets/icons/delete.svg"></button>
        <div class="price_wrapper">
            <button id="${mealId}-minus" class="invisible" type="submit" onclick="changeAmount('${mealId}', -1)">-</button>
            <p id="${mealId}-amount">1</p>
            <button type="submit" onclick="changeAmount('${mealId}', 1)">+</button>
            <p class="meal_price" id="${mealId}-price"><span>Preis:</span> € ${mealPrice.toFixed(2)}</p>
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

function getHamburgerNavItemTemplate(categoryId, categoryName) {
    return `<li><button onclick="filterMenu('${categoryId}'); toggleHamburgerMenu();">${categoryName}</button></li>`;
};

function buildHamburgerNav(navPointsHTML) {
    return `<li><button onclick="filterMenu('alle'); toggleHamburgerMenu();">Alle</button></li>${navPointsHTML}`;
};

function getFilterButtonTemplate(categoryId, categoryName) {
    return  `<button class="filter-btn" onclick="filterMenu('${categoryId}')">${categoryName}</button>`;
};

function buildFilterButtons(filterButtonsHTML) {
    return `<button class="filter-btn" onclick="filterMenu('alle')">Alle</button>${filterButtonsHTML}`;
};