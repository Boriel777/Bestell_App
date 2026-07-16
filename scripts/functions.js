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
    syncCtaButtons();
};

// Warenkorb Funktionen:

function addShoppingCartHTML(mealName, mealPrice, mealId) {
    let contentRef = document.getElementById('shopping_cart');
    contentRef.innerHTML = "";

    for (let i = 0; i < Menu.length; i++) {
        let mealName = Menu[i].meal_name;
        let mealPrice = Menu[i].price;
        let mealId = Menu[i].id;
    }
    contentRef.innerHTML = getShoppingCartTemplate(mealName, mealPrice, mealId);
    syncCartDisplay();
};

function pushToShoppingCart(mealName, mealPrice, mealId) {
    let contentRef = document.getElementById('shopping_cart_wrapper')
    let alreadyThere = false;
    let existingMeal = null;

    for (let j = 0; j < ShoppingCartArray.length; j++) {
        if (ShoppingCartArray[j].id === mealId) {
            alreadyThere = true;
            existingMeal = ShoppingCartArray[j];
            break;
        }
    };
    if (!alreadyThere) {
        ShoppingCartArray.push({
            id: mealId,
            title: mealName,
            price: mealPrice,
            amount:1,
        });
        contentRef.innerHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
    } else {
        existingMeal.amount +=1;
        updateShoppingCartDisplay(mealId);
    };
    updateMealCtaBtn(mealId);
    saveToLocalStorage();
    return ShoppingCartArray;
};

function updateShoppingCartDisplay(mealId) {
    let meal = null;
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        if (ShoppingCartArray[i].id === mealId) {
            meal = ShoppingCartArray[i];
            break;
        }
    }
    let amountRef = document.getElementById(`${mealId}-amount`);
    let priceRef = document.getElementById(`${mealId}-price`);
    let minusRef = document.getElementById(`${mealId}-minus`);

    amountRef.textContent = meal.amount;
    priceRef.textContent = `€ ${(meal.price * meal.amount).toFixed(2)}`;

     if (meal.amount <= 1) {
        minusRef.classList.add("hidden");
    } else {
        minusRef.classList.remove("hidden");
    }
};

function changeAmount(mealId, delta) {
    let meal = null;
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        if (ShoppingCartArray[i].id === mealId) {
            meal = ShoppingCartArray[i];
            break;
        }        
    }

    if (meal.amount + delta < 1) {
        return;
    }

    meal.amount += delta;
    updateShoppingCartDisplay(mealId);
    updateMealCtaBtn(mealId);
    saveToLocalStorage();
};

function removeFromCart(mealId) {
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        if (ShoppingCartArray[i].id === mealId) {
            ShoppingCartArray.splice(i, 1);
            break;
        }
    }

    let cardRef = document.getElementById(mealId);
    cardRef.remove();
    updateMealCtaBtn(mealId);
    saveToLocalStorage();
};

// UX Schmuck:

// Button change on Meal in Basket

function updateMealCtaBtn(mealId) {
    let meal = null;
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        if (ShoppingCartArray[i].id === mealId) {
            meal = ShoppingCartArray[i];
            break;            
        }
    };
    let ctaRef = document.getElementById(`to_basket_cta-${mealId}`);

    if (meal) {
        ctaRef.textContent = `Im Warenkorb (${meal.amount})`;
        ctaRef.classList.add("meal_added");
    } else {
        ctaRef.textContent = "In den Warenkorb";
        ctaRef.classList.remove("meal_added");
    };
};



// Warenkorb Funktionalität:

// - bei erstem click soll Zum Warenkorb sich in einem + button verwandeln und ein - button soll sich daneben zeigen.
// - Müllkorb in der Gerichtkarte ? optional
// - Das ganze soll in localStorage gespeichert werden