//Hamburger menu

function addNavPoints() {
    let navPoints = [];
    for (let i = 0; i < Menu.length; i++) {
        let actualKategory = Menu[i].category;
        let alreadyThere = false;

        for (let j = 0; j < navPoints.length; j++) {
            if (navPoints[j].title === actualKategory) {
                alreadyThere = true;
                break;
            }
        }

        if (!alreadyThere) {
            navPoints.push({
                title: actualKategory,
                id: zuAscii(actualKategory)
            });
        }
    };
    return navPoints;
};

function buildHamburgerNav(navPoints) {
    let navPointHTML = "";
    for (let i = 0; i < navPoints.length; i++) {
        navPointHTML += `
        <li><a href="#title-${navPoints[i].id}">${navPoints[i].title}</a></li>
        `;
    };
    return navPointHTML;
};

function renderNavPoints() {
  let navPoints = addNavPoints(Menu);
  document.querySelector("#menu_navigation").innerHTML = buildHamburgerNav(navPoints);
};

//Filter Function

function buildFilterButtons(navPoints) {
    let filterHTML = `<button class="filter-btn" onclick="filterMenu('alle')">Alle</button>`;
    for (let i = 0; i < navPoints.length; i++) {
        filterHTML += `
        <button class="filter-btn" onclick="filterMenu('${navPoints[i].title}')">${navPoints[i].title}</button>
        `;
    }
    return filterHTML;
};

function renderFilterButtons() {
    let navPoints = addNavPoints();
    document.querySelector("#categories_nav").innerHTML = buildFilterButtons(navPoints);
};

function filterMenu(category) {
    let sections = document.querySelectorAll("section[id^='cat-']");

    for (let i = 0; i < sections.length; i++) {
        if (category === "alle") {
            sections[i].classList.remove("hidden");
        } else {
            let targetId = "cat-" + zuAscii(category);
            if (sections[i].id === targetId) {
                sections[i].classList.remove("hidden");
            } else {
                sections[i].classList.add("hidden");
            }
        }        
    }
};

