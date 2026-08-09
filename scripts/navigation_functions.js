// Hamburger menu

function toggleHamburgerMenu() {
    let btnRef = document.getElementById('hamburger_btn');
    let navRef = document.getElementById('hamburger_nav_list');

    if (btnRef.classList.contains("open")) {
        btnRef.classList.remove("open");
        btnRef.setAttribute("aria-expanded", "false");
        navRef.classList.add("hidden");
        navRef.classList.remove("is_open");
    } else {
        btnRef.classList.add("open");
        btnRef.setAttribute("aria-expanded", "true");
        navRef.classList.remove("hidden");
        navRef.classList.add("is_open");
    };
};

function renderNavPoints() {
    document.querySelector("#hamburger_nav_list").innerHTML = buildHamburgerNav(categoryArray);
};

// Filter Function

function renderFilterButtons() {
    document.querySelector("#categories_nav").innerHTML = buildFilterButtons(categoryArray);
};

function filterMenu(categoryId) {
    let sections = document.querySelectorAll("section[id^='cat-']");
    let targetId = "cat-" + categoryId;

    for (let i = 0; i < sections.length; i++) {
        if (categoryId === "alle") {
            sections[i].classList.remove("hidden");
        } else if (sections[i].id === targetId) {
                sections[i].classList.remove("hidden");
        } else {
                sections[i].classList.add("hidden");
        }    
    }
};