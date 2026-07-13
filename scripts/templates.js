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
        <div class="meal_wrapper" id="${meal.id}">${mealsHTML}</div>
    </section>
    `;
};

function getMealTemplate(meal) {
    return `
        <img src="${meal.img}" alt="${meal.meal_name} Foto">
        <h3 class="meal_name">${meal.meal_name}</h3>
        <p><span>Zutaten:</span> ${meal.ingredients}</p>
        <div class="cta_wrapper"><p><span>Preis:</span> € ${meal.price.toFixed(2)}</p>
        <button type="submit" onclick="pushToShoppingCart('${meal.meal_name}', ${meal.price}, '${meal.id}')">Zum Warenkorb</button></div>
    `;
};

let ShoppingCartArray = [];

function getShoppingCartTemplate(mealName, mealPrice, mealId) {
    let ShoppingCartHTML = "";
    let ShoppingCart = document.getElementById("shopping_cart");
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        ShoppingCartHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
    }

    return `
    <h2>Dein Warenkorb</h2>
    <div id="shopping_cart_wrapper">${ShoppingCartHTML}</div>
    `;
};

function getShoppingCartMealTemplate(mealName, mealPrice, mealId) {
    return `
    <div class="cart_meal_wrapper" id="${mealId}">
        <h3 class="meal_name">${mealName}</h3>
        <div class="price_wrapper"><button type="submit">+</button><button type="submit">-</button>
        <p><span>Preis:</span> € ${mealPrice.toFixed(2)}</p>
    </div>
    `;
};

// add function das preis addiert statt neues element erzeugt.