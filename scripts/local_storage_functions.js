// Local Storage Manipulation

//save functions
function saveToLocalStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartArray));
}

function getFromLocalStorage() {
    let stringyCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (stringyCart === null) { }
    else { shoppingCartArray = stringyCart; };
};

function syncCtaButtons() {
    for (let i = 0; i < menu.length; i++) {
        updateMealCtaBtn(menu[i].id);
    }
};

function syncCartDisplay() {
    for (let i = 0; i < shoppingCartArray.length; i++) {
        updateShoppingCartDisplay(shoppingCartArray[i].id);
    }
};