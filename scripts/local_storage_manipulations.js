// Local Storage Manipulation

//save functions
function saveToLocalStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(ShoppingCartArray));
}

function getFromLocalStorage() {
    let stringyCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (stringyCart === null) {}
    else {ShoppingCartArray = stringyCart;};
};

function syncCtaButtons() {
    for (let i = 0; i < Menu.length; i++) {
        updateMealCtaBtn(Menu[i].id);        
    }
};

function syncCartDisplay() {
    for (let i = 0; i < ShoppingCartArray.length; i++) {
        updateShoppingCartDisplay(ShoppingCartArray[i].id);        
    }
};