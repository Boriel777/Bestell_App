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

    if (ShoppingCartArray.length === 0) {
        contentRef.classList.add("hidden");
        contentRef.innerHTML = getShoppingCartTemplate();
    } else {
        contentRef.classList.remove("hidden");
        contentRef.innerHTML = getShoppingCartTemplate();
    }

    syncCartDisplay();
};

function pushToShoppingCart(mealName, mealPrice, mealId) {
    let alreadyThere = false;
    let existingMeal = null;
    let wasEmpty = ShoppingCartArray.length === 0;

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
            amount: 1,
        });
    } else {
        existingMeal.amount += 1;
    };

    if (wasEmpty) {
        addShoppingCartHTML();
    } else if (!alreadyThere) {
        let contentRef = document.getElementById('shopping_cart_wrapper')
        contentRef.innerHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
    };

    refreshCart(mealId);
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
    refreshCart(mealId);
};

function removeFromCart(mealId) {
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        if (ShoppingCartArray[i].id === mealId) {
            ShoppingCartArray.splice(i, 1);
            break;
        }
    }

    saveToLocalStorage();
    addShoppingCartHTML();
    syncCtaButtons();
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

function updateCheckSum() {
    let subtotal = 0;

    for (let i = 0; i < ShoppingCartArray.length; i++) {
        subtotal += ShoppingCartArray[i].price * ShoppingCartArray[i].amount;
    };

    let deliveryFee;
    if (ShoppingCartArray.length === 0) {
        deliveryFee = 0;
    } else {
        deliveryFee = 5;
    };

    let total = subtotal + deliveryFee;

    let checkSumRef = document.getElementById("check_sum");
    checkSumRef.innerHTML = getShoppingCartSumTemplate(subtotal, deliveryFee, total);

};

function refreshCart(mealId) {
    updateShoppingCartDisplay(mealId);
    updateMealCtaBtn(mealId);
    updateCheckSum();
    saveToLocalStorage();
};

function placeOrder() {
    openModal();
    clearCart();
};

function clearCart() {
    ShoppingCartArray = [];
    saveToLocalStorage();
    addShoppingCartHTML();
    syncCtaButtons();
};

function openModal() {
    let modalRef = document.getElementById("order_modal");
    modalRef.classList.remove("hidden");
};

function closeModal() {
    let modalRef = document.getElementById("order_modal");
    modalRef.classList.add("hidden");
};

function openCartModal() {
    let cartRef = document.getElementById('shopping_cart');
    let modalRef = document.getElementById('cart_modal');
    let closeRef = document.getElementById('cart_modal_close_btn')

    modalRef.appendChild(cartRef);
    modalRef.classList.remove("hidden");
    cartRef.classList.remove("hidden");

    modalRef.onclick = closeCartModal;
    cartRef.onclick = function(event) {
        event.stopPropagation();
    }
    closeRef.onclick = closeCartModal;
    closeRef.focus();
    document.body.classList.add("modal_open");
};

function closeCartModal() {
    let cartRef = document.getElementById('shopping_cart');
    let asideRef = document.querySelector('section.menu');

    asideRef.appendChild(cartRef);
    document.getElementById('cart_modal').classList.add("hidden");
    document.body.classList.remove("modal_open");
};