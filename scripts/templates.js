function zuAscii(text) {
    return text
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/Ä/g, "Ae")
        .replace(/Ö/g, "Oe")
        .replace(/Ü/g, "Ue");
};

function getMenuTemplate(category, meal) {
    let mealsHTML = "";
    for (let meal_i = 0; meal_i < meal.length; meal_i++) {
        mealsHTML += getMealTemplate(meal[meal_i]);
    }
    let id = zuAscii(category.toLowerCase());
    return `
    <section id="cat-${category}">
        <h2 id="title-${id}">${category}</h2>
        <div>${mealsHTML}</div>
    </section>
    `;
};

function getMealTemplate(meal) {
    return `
    <div class="meal_wrapper" id="${meal.id}">
        <h3 class="meal_name">${meal.meal_name}</h3>
        <p><span>Zutaten:</span> ${meal.ingredients}</p>
        <p><span>Preis:</span> € ${meal.price}</p>
    </div>
    `;
};