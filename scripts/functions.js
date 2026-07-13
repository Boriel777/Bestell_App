// add Gerichte in HTML

const categories = [...new Set(Menu.map(meal => meal.category))];
let categoryArray = Array.from(categories);

function addMenuHTML() {
    let contentRef = document.getElementById('Menu_wrapper');
    contentRef.innerHTML = "";

    for (let i = 0; i < categoryArray.length; i++) {
        let currentCategory = categoryArray[i];
        let mealsInCategory = [];
        for (let meal_i = 0; meal_i < Menu.length; meal_i++) {
            if (Menu[meal_i].category === currentCategory) {
                mealsInCategory.push(Menu[meal_i]);
            };
        }
        contentRef.innerHTML += getMenuTemplate(currentCategory, mealsInCategory);
    };
};

// add Gerichte in Warenkorb

function addShoppingCartHTML() {
    let contentRef = document.getElementById('shopping_cart');
    contentRef.innerHTML = "";

    for (let i = 0; i < Menu.length; i++) {
        let mealName = Menu[i].meal_name;
        let mealPrice = Menu[i].price;  
        let mealId = Menu[i].id;       
    }
    contentRef.innerHTML = getShoppingCartTemplate()
};

function pushToShoppingCart(mealName, mealPrice, mealId) {
    let contentRef = document.getElementById('shopping_cart_wrapper')
    contentRef.innerHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
};

// Warenkorb Funktionalität:
// onclick "Zum Warenkorb" Gericht soll im Dein Warenkorb erscheinen mit Template "getBasketMealTemplate(meal)"
// - bei erneutem click soll es menge der Gerichten zählen, kein neues Element erzeugen!
// - bei erstem click soll Zum Warenkorb sich in einem + button verwandeln und ein - button soll sich daneben zeigen.
// - Preis soll sich in dem Warenkorb addieren, bzw, weniger werden bei -
// - im Warenkorb sollte immer ein Müllkorb dabei sein mit die function remove Dish
// - Müllkorb in der Gerichtkarte ? optional
// - Das ganze soll in localStorage gespeichert werden