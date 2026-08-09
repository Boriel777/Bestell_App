function categoryAlreadyListed(categoryId, categoriesList) {
    for (let i = 0; i < categoriesList.length; i++) {
        if (categoriesList[i].id === categoryId) {
            return true;
        }
    };
    return false;
};

function getUniqueCategories() {
    let uniqueCategories = [];
    for (let i = 0; i < menu.length; i++) {
        if (!categoryAlreadyListed(menu[i].category.id, uniqueCategories)) {
            uniqueCategories.push(menu[i].category);
        };    
    };
    return uniqueCategories;
};

let categoryArray = getUniqueCategories();

function getMealsForCategory(categoryId) {
    let mealsInCategory = [];
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].category.id === categoryId) {
            mealsInCategory.push(menu[i]);
        }
    };
    return mealsInCategory;
};

function addMenuHTML() {
    let contentRef = document.getElementById('Menu_wrapper');
    contentRef.innerHTML = "";

    for (let i = 0; i < categoryArray.length; i++) {
        let currentCategory = categoryArray[i];
        let mealsInCategory = getMealsForCategory(currentCategory.id);
        contentRef.innerHTML += getMenuTemplate(currentCategory, mealsInCategory);
    };
    syncCtaButtons();
};