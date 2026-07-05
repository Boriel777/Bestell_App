const categories = [...new Set(Menu.map(meal => meal.category))];
let categoryArray = Array.from(categories);

function addMenuHTML() {
    let contentRef = document.getElementById('Menu_wrapper')
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
