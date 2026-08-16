let menu = [
    // ---------- Salads ----------
    {
        id: "salad-01",
        mealName: "Caesar Salat",
        ingredients: "Römersalat, Hähnchenbrust, Parmesan, Croutons, Caesar Dressing",
        price: 8.50,
        category: { name: "Salate", id: "salad" },
        img: "assets/img/s-caesar.jpeg"
    },
    {
        id: "salad-02",
        mealName: "Griechischer Salat",
        ingredients: "Tomaten, Gurken, Paprika, Oliven, Feta, rote Zwiebeln, Olivenöl",
        price: 7.50,
        category: { name: "Salate", id: "salad" },
        img: "assets/img/s-griechisch.jpeg"
    },
    {
        id: "salad-03",
        mealName: "Rucola Salat mit Parmesan",
        ingredients: "Rucola, Parmesan, Pinienkerne, Kirschtomaten, Balsamico",
        price: 7.90,
        category: { name: "Salate", id: "salad" },
        img: "assets/img/s-rucola-parmiggiano.jpeg"
    },
    {
        id: "salad-04",
        mealName: "Hirtensalat",
        ingredients: "Tomaten, Gurken, Paprika, Zwiebeln, Schafskäse, Oliven",
        price: 7.20,
        category: { name: "Salate", id: "salad" },
        img: "assets/img/s-hirten.jpeg"
    },

    // ---------- Soups ----------
    {
        id: "soup-01",
        mealName: "Gulaschsuppe",
        ingredients: "Rindfleisch, Zwiebeln, Paprika, Kartoffeln, Paprikapulver, Rinderbrühe",
        price: 6.50,
        category: { name: "Suppen", id: "soup" },
        img: "assets/img/su-gulasch.jpeg"
    },
    {
        id: "soup-02",
        mealName: "Frittatensuppe",
        ingredients: "Rinderbrühe, Palatschinken (in Streifen), Schnittlauch",
        price: 4.90,
        category: { name: "Suppen", id: "soup" },
        img: "assets/img/su-frittaten.jpeg"
    },
    {
        id: "soup-03",
        mealName: "Linsensuppe",
        ingredients: "Linsen, Karotten, Sellerie, Zwiebeln, Speck, Lorbeer",
        price: 5.50,
        category: { name: "Suppen", id: "soup" },
        img: "assets/img/su-linsen.jpeg"
    },
    {
        id: "soup-04",
        mealName: "Mercimek Çorbası (Türkische Linsensuppe)",
        ingredients: "Rote Linsen, Zwiebeln, Karotten, Kartoffeln, Kreuzkümmel, Zitrone",
        price: 5.20,
        category: { name: "Suppen", id: "soup" },
        img: "assets/img/su-corbasi.jpeg"
    },

    // ---------- Pizza ----------
    {
        id: "pizza-01",
        mealName: "Pizza Margherita",
        ingredients: "Tomatensauce, Mozzarella, Basilikum, Olivenöl",
        price: 8.50,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-margheritta.jpeg"
    },
    {
        id: "pizza-02",
        mealName: "Pizza Salami",
        ingredients: "Tomatensauce, Mozzarella, Salami",
        price: 9.50,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-salami.jpeg"
    },
    {
        id: "pizza-03",
        mealName: "Pizza Prosciutto Funghi",
        ingredients: "Tomatensauce, Mozzarella, Schinken, Champignons",
        price: 10.50,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-prosciutto-e-funghi.jpeg"
    },
    {
        id: "pizza-04",
        mealName: "Pizza Quattro Formaggi",
        ingredients: "Tomatensauce, Mozzarella, Gorgonzola, Parmesan, Emmentaler",
        price: 10.90,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-quattro-formaggi.jpeg"
    },
    {
        id: "pizza-05",
        mealName: "Pizza Vegetariana",
        ingredients: "Tomatensauce, Mozzarella, Zucchini, Paprika, Zwiebeln, Champignons, Oliven",
        price: 9.90,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-vegetariana.jpeg"
    },
    {
        id: "pizza-06",
        mealName: "Pizza Diavola",
        ingredients: "Tomatensauce, Mozzarella, scharfe Salami, Peperoncini, Chiliöl",
        price: 10.20,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-diavola.jpeg"
    },
    {
        id: "pizza-07",
        mealName: "Pizza Hawaii",
        ingredients: "Tomatensauce, Mozzarella, Schinken, Ananas",
        price: 9.50,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-hawaii.jpeg"
    },
    {
        id: "pizza-08",
        mealName: "Pizza Capricciosa",
        ingredients: "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Oliven",
        price: 10.90,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-capricciosa.jpeg"
    },
    {
        id: "pizza-09",
        mealName: "Pizza Tonno",
        ingredients: "Tomatensauce, Mozzarella, Thunfisch, rote Zwiebeln, Oliven",
        price: 10.50,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-tonno.jpeg"
    },
    {
        id: "pizza-10",
        mealName: "Pizza Calzone",
        ingredients: "Gefüllter Pizzateig, Tomatensauce, Mozzarella, Schinken, Ricotta",
        price: 10.90,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-calzone.jpeg"
    },
    {
        id: "pizza-11",
        mealName: "Pizza Rucola e Speck",
        ingredients: "Tomatensauce, Mozzarella, Rucola, Speck, Parmesan, Kirschtomaten",
        price: 11.20,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-ruccola-e-speck.jpeg"
    },
    {
        id: "pizza-12",
        mealName: "Pizza Frutti di Mare",
        ingredients: "Tomatensauce, Mozzarella, Meeresfrüchte, Knoblauch, Petersilie",
        price: 12.50,
        category: { name: "Pizzen", id: "pizza" },
        img: "assets/img/p-frutti-di-mare.jpeg"
    },

    // ---------- Austrian Cousine ----------
    {
        id: "at-01",
        mealName: "Wiener Schnitzel",
        ingredients: "Kalbfleisch, Semmelbrösel, Ei, Mehl, Zitrone, Petersilienkartoffeln",
        price: 16.90,
        category: { name: "Österreichische Küche", id: "austrian" },
        img: "assets/img/oe-wiener-schnietzi.jpeg"
    },
    {
        id: "at-02",
        mealName: "Tafelspitz",
        ingredients: "Rindfleisch, Suppengemüse, Kren, Schnittlauchsauce, Bratkartoffeln",
        price: 17.50,
        category: { name: "Österreichische Küche", id: "austrian" },
        img: "assets/img/oe-tafelspitz.jpeg"
    },
    {
        id: "at-03",
        mealName: "Kaiserschmarrn",
        ingredients: "Mehl, Eier, Milch, Zucker, Rosinen, Staubzucker, Zwetschkenröster",
        price: 8.90,
        category: { name: "Österreichische Küche", id: "austrian" },
        img: "assets/img/oe-kaiserschmarrn.jpeg"
    },
    {
        id: "at-04",
        mealName: "Backhendl",
        ingredients: "Hähnchenkeule, Semmelbrösel, Ei, Mehl, Petersilienkartoffeln",
        price: 14.90,
        category: { name: "Österreichische Küche", id: "austrian" },
        img: "assets/img/oe-backhendl.jpeg"
    },

    // ---------- Turkish Cousine ----------
    {
        id: "turkish-01",
        mealName: "Adana Kebap",
        ingredients: "Hackfleisch vom Lamm, Paprika, Zwiebeln, Reis, gegrillte Tomaten",
        price: 14.90,
        category: { name: "Türkische Küche", id: "turkish" },
        img: "assets/img/t-adana-kebap.jpeg"
    },
    {
        id: "turkish-02",
        mealName: "Lahmacun",
        ingredients: "Dünner Teig, Hackfleisch, Zwiebeln, Paprika, Petersilie, Zitrone",
        price: 6.90,
        category: { name: "Türkische Küche", id: "turkish" },
        img: "assets/img/t-lahmacun.jpeg"
    },
    {
        id: "turkish-03",
        mealName: "Köfte",
        ingredients: "Hackfleisch, Zwiebeln, Semmelbrösel, Gewürze, Joghurt, Reis",
        price: 13.50,
        category: { name: "Türkische Küche", id: "turkish" },
        img: "assets/img/t-koefte.jpeg"
    },
    {
        id: "turkish-04",
        mealName: "Iskender Kebap",
        ingredients: "Dönerfleisch, Fladenbrot, Tomatensauce, Joghurt, geschmolzene Butter",
        price: 15.50,
        category: { name: "Türkische Küche", id: "turkish" },
        img: "assets/img/t-iskender-kebap.jpeg"
    },
    {
        id: "turkish-05",
        mealName: "Karışık Izgara (Gemischter Grillteller)",
        ingredients: "Adana Kebap, Hähnchenspieß, Köfte, gegrillte Paprika, Reis",
        price: 17.90,
        category: { name: "Türkische Küche", id: "turkish" },
        img: "assets/img/t-karisik-izgara.jpeg"
    },
    {
        id: "turkish-06",
        mealName: "Sigara Böreği",
        ingredients: "Filoteig, Schafskäse, Petersilie, Sonnenblumenöl",
        price: 6.50,
        category: { name: "Türkische Küche", id: "turkish" },
        img: "assets/img/t-sigara-boregi.jpeg"
    },

    // ---------- Desserts ----------
    {
        id: "dessert-01",
        mealName: "Apfelstrudel",
        ingredients: "Strudelteig, Äpfel, Zimt, Rosinen, Walnüsse, Vanillesauce",
        price: 5.90,
        category: { name: "Desserts", id: "dessert" },
        img: "assets/img/d-apfelstrudel.jpeg"
    },
    {
        id: "dessert-02",
        mealName: "Baklava",
        ingredients: "Filoteig, Walnüsse, Pistazien, Butter, Zuckersirup",
        price: 5.50,
        category: { name: "Desserts", id: "dessert" },
        img: "assets/img/d-baklava.jpeg"
    },
    {
        id: "dessert-03",
        mealName: "Panna Cotta",
        ingredients: "Sahne, Zucker, Vanille, Gelatine, Beerensauce",
        price: 5.90,
        category: { name: "Desserts", id: "dessert" },
        img: "assets/img/d-panna-cotta.jpg"
    },

    // ---------- Drinks ----------
    {
        id: "drink-01",
        mealName: "Apfelsaft gespritzt",
        ingredients: "Apfelsaft, Mineralwasser",
        price: 3.20,
        category: { name: "Getränke", id: "drink" },
        img: "assets/img/g-apfelsaft.jpg"
    },
    {
        id: "drink-02",
        mealName: "Ayran",
        ingredients: "Joghurt, Wasser, Salz",
        price: 2.90,
        category: { name: "Getränke", id: "drink" },
        img: "assets/img/g-ayran.jpg"
    },
    {
        id: "drink-03",
        mealName: "Cola 0,33l",
        ingredients: "Cola",
        price: 3.10,
        category: { name: "Getränke", id: "drink" },
        img: "assets/img/g-cola.jpg"
    },
    {
        id: "drink-04",
        mealName: "Mineralwasser 0,33l",
        ingredients: "Kohlensäurehaltiges Mineralwasser",
        price: 2.70,
        category: { name: "Getränke", id: "drink" },
        img: "assets/img/g-wasser.jpg"
    },
    {
        id: "drink-05",
        mealName: "Türkischer Tee",
        ingredients: "Schwarzer Tee, Zucker",
        price: 2.50,
        category: { name: "Getränke", id: "drink" },
        img: "assets/img/g-tee.jpg"
    },

    // ---------- Kids Menu ----------
    {
        id: "kids-01",
        mealName: "Kinder Schnitzel mit Pommes",
        ingredients: "Hähnchenschnitzel, Semmelbrösel, Ei, Mehl, Pommes frites",
        price: 7.90,
        category: { name: "Kindermenü", id: "kids" },
        img: "assets/img/k-schnietzi2.jpg"
    },
    {
        id: "kids-02",
        mealName: "Kinder Spaghetti mit Tomatensauce",
        ingredients: "Spaghetti, Tomatensauce, Parmesan",
        price: 6.50,
        category: { name: "Kindermenü", id: "kids" },
        img: "assets/img/k-spaghetti2.jpg"
    }
];