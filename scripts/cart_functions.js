let shoppingCartArray = [];

function findCartMeal(mealId) {
    for (let i = 0; i < shoppingCartArray.length; i++) {
        if (shoppingCartArray[i].id === mealId) {
            return shoppingCartArray[i];
        }
    };
    return null;
};

function calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < shoppingCartArray.length; i++) {
        subtotal += shoppingCartArray[i].price * shoppingCartArray[i].amount;
    };
    return subtotal;
};

function buildShoppingCartHTML() {
    let shoppingCartHTML = "";
    for (let i = 0; i < shoppingCartArray.length; i++) {
        let mealName = shoppingCartArray[i].title;
        let mealPrice = shoppingCartArray[i].price;
        let mealId = shoppingCartArray[i].id;
        shoppingCartHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
    };
    return shoppingCartHTML;
};

function addShoppingCartHTML() {
    let contentRef = document.getElementById('shopping_cart');

    if (shoppingCartArray.length === 0) {
        contentRef.innerHTML = getEmptyCartTemplate();
    } else {
        let shoppingCartHTML = buildShoppingCartHTML();
        let subtotal = calculateSubtotal();
        let deliveryFee = 5;
        let total = subtotal + deliveryFee;
        contentRef.innerHTML = getShoppingCartTemplate(shoppingCartHTML, subtotal, deliveryFee, total);
    };
    syncCartDisplay();
};

function updateCartDom(wasEmpty, existingMeal, mealName, mealPrice, mealId) {
    if (wasEmpty) {
        addShoppingCartHTML();
    } else if (!existingMeal) {
        let contentRef = document.getElementById('shopping_cart_wrapper');
        contentRef.innerHTML += getShoppingCartMealTemplate(mealName, mealPrice, mealId);
    };
};

function pushToShoppingCart(mealName, mealPrice, mealId) {
    let wasEmpty = shoppingCartArray.length === 0;
    let existingMeal = findCartMeal(mealId);

    if (existingMeal) {
        existingMeal.amount += 1;
    } else {
        shoppingCartArray.push({ id: mealId, title: mealName, price: mealPrice, amount: 1 });
    };

    updateCartDom(wasEmpty, existingMeal, mealName, mealPrice, mealId);
    refreshCart(mealId);
    return shoppingCartArray;
};


function updateShoppingCartDisplay(mealId) {
    let meal = findCartMeal(mealId);
    let amountRef = document.getElementById(`${mealId}-amount`);
    let priceRef = document.getElementById(`${mealId}-price`);
    let minusRef = document.getElementById(`${mealId}-minus`);

    amountRef.textContent = meal.amount;
    priceRef.textContent = `€ ${(meal.price * meal.amount).toFixed(2)}`;

    if (meal.amount <= 1) {
        minusRef.classList.add("invisible");
    } else {
        minusRef.classList.remove("invisible");
    }
};

function changeAmount(mealId, delta) {
    let meal = findCartMeal(mealId);

    if (meal.amount + delta < 1) {
        return;
    }

    meal.amount += delta;
    refreshCart(mealId);
};

function removeFromCart(mealId) {
    for (let i = 0; i < shoppingCartArray.length; i++) {
        if (shoppingCartArray[i].id === mealId) {
            shoppingCartArray.splice(i, 1);
            break;
        }
    }
    updateCart();
};

function updateMealCtaBtn(mealId) {
    let meal = findCartMeal(mealId);
    let ctaRef = document.getElementById(`to-basket-cta-${mealId}`);

    if (meal) {
        ctaRef.textContent = `Im Warenkorb (${meal.amount})`;
        ctaRef.classList.add("meal_added");
    } else {
        ctaRef.textContent = "In den Warenkorb";
        ctaRef.classList.remove("meal_added");
    };
};

function updateCheckSum() {
    let subtotal = calculateSubtotal();
    let deliveryFee;

    if (shoppingCartArray.length === 0) {
        deliveryFee = 0;
    } else {
        deliveryFee = 5;
    };

    let total = subtotal + deliveryFee;
    let checkSumRef = document.getElementById("check_sum");
    checkSumRef.innerHTML = getShoppingCartSumTemplate(subtotal, deliveryFee, total);

};

function updateCartCounter() {
    let totalItems = 0;
    for (let i = 0; i < shoppingCartArray.length; i++) {
        totalItems += shoppingCartArray[i].amount;
    };
    let cartTriggerRef = document.getElementById('cart_trigger');
    cartTriggerRef.setAttribute('data-count', totalItems);
};

function refreshCart(mealId) {
    updateShoppingCartDisplay(mealId);
    updateMealCtaBtn(mealId);
    updateCheckSum();
    updateCartCounter();
    saveToLocalStorage();
};

function clearCart() {
    shoppingCartArray = [];
    updateCart();
};

function updateCart() {
    saveToLocalStorage();
    addShoppingCartHTML();
    syncCtaButtons();
    updateCartCounter();
};

function placeOrder() {
    openModal();
    closeCartModal();
    clearCart();
};