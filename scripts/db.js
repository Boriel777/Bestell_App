// Menü Array

let Menu = [
  // ---------- Salate ----------
  {
    id: "salat-01",
    meal_name: "Caesar Salat",
    ingredients: "Römersalat, Hähnchenbrust, Parmesan, Croutons, Caesar Dressing",
    price: 8.90,
    category: "Salate"
  },
  {
    id: "salat-02",
    meal_name: "Griechischer Salat",
    ingredients: "Tomaten, Gurken, Paprika, Oliven, Feta, rote Zwiebeln, Olivenöl",
    price: 7.50,
    category: "Salate"
  },
  {
    id: "salat-03",
    meal_name: "Rucola Salat mit Parmesan",
    ingredients: "Rucola, Parmesan, Pinienkerne, Kirschtomaten, Balsamico",
    price: 7.90,
    category: "Salate"
  },
  {
    id: "salat-04",
    meal_name: "Hirtensalat",
    ingredients: "Tomaten, Gurken, Paprika, Zwiebeln, Schafskäse, Oliven",
    price: 7.20,
    category: "Salate"
  },

  // ---------- Suppen ----------
  {
    id: "suppe-01",
    meal_name: "Gulaschsuppe",
    ingredients: "Rindfleisch, Zwiebeln, Paprika, Kartoffeln, Paprikapulver, Rinderbrühe",
    price: 6.50,
    category: "Suppen"
  },
  {
    id: "suppe-02",
    meal_name: "Frittatensuppe",
    ingredients: "Rinderbrühe, Palatschinken (in Streifen), Schnittlauch",
    price: 4.90,
    category: "Suppen"
  },
  {
    id: "suppe-03",
    meal_name: "Linsensuppe",
    ingredients: "Linsen, Karotten, Sellerie, Zwiebeln, Speck, Lorbeer",
    price: 5.50,
    category: "Suppen"
  },
  {
    id: "suppe-04",
    meal_name: "Mercimek Çorbası (Türkische Linsensuppe)",
    ingredients: "Rote Linsen, Zwiebeln, Karotten, Kartoffeln, Kreuzkümmel, Zitrone",
    price: 5.20,
    category: "Suppen"
  },

  // ---------- Pizzen ----------
  {
    id: "pizza-01",
    meal_name: "Pizza Margherita",
    ingredients: "Tomatensauce, Mozzarella, Basilikum, Olivenöl",
    price: 8.50,
    category: "Pizzen"
  },
  {
    id: "pizza-02",
    meal_name: "Pizza Salami",
    ingredients: "Tomatensauce, Mozzarella, Salami",
    price: 9.50,
    category: "Pizzen"
  },
  {
    id: "pizza-03",
    meal_name: "Pizza Prosciutto Funghi",
    ingredients: "Tomatensauce, Mozzarella, Schinken, Champignons",
    price: 10.50,
    category: "Pizzen"
  },
  {
    id: "pizza-04",
    meal_name: "Pizza Quattro Formaggi",
    ingredients: "Tomatensauce, Mozzarella, Gorgonzola, Parmesan, Emmentaler",
    price: 10.90,
    category: "Pizzen"
  },
  {
    id: "pizza-05",
    meal_name: "Pizza Vegetaria",
    ingredients: "Tomatensauce, Mozzarella, Zucchini, Paprika, Zwiebeln, Champignons, Oliven",
    price: 9.90,
    category: "Pizzen"
  },
  {
    id: "pizza-06",
    meal_name: "Pizza Diavola",
    ingredients: "Tomatensauce, Mozzarella, scharfe Salami, Peperoncini, Chiliöl",
    price: 10.20,
    category: "Pizzen"
  },
  {
    id: "pizza-07",
    meal_name: "Pizza Hawaii",
    ingredients: "Tomatensauce, Mozzarella, Schinken, Ananas",
    price: 9.50,
    category: "Pizzen"
  },
  {
    id: "pizza-08",
    meal_name: "Pizza Capricciosa",
    ingredients: "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Oliven",
    price: 10.90,
    category: "Pizzen"
  },
  {
    id: "pizza-09",
    meal_name: "Pizza Tonno",
    ingredients: "Tomatensauce, Mozzarella, Thunfisch, rote Zwiebeln, Oliven",
    price: 10.50,
    category: "Pizzen"
  },
  {
    id: "pizza-10",
    meal_name: "Pizza Calzone",
    ingredients: "Gefüllter Pizzateig, Tomatensauce, Mozzarella, Schinken, Ricotta",
    price: 10.90,
    category: "Pizzen"
  },
  {
    id: "pizza-11",
    meal_name: "Pizza Rucola e Speck",
    ingredients: "Tomatensauce, Mozzarella, Rucola, Speck, Parmesan, Kirschtomaten",
    price: 11.20,
    category: "Pizzen"
  },
  {
    id: "pizza-12",
    meal_name: "Pizza Frutti di Mare",
    ingredients: "Tomatensauce, Mozzarella, Meeresfrüchte, Knoblauch, Petersilie",
    price: 12.50,
    category: "Pizzen"
  },

  // ---------- Österreichische Küche ----------
  {
    id: "at-01",
    meal_name: "Wiener Schnitzel",
    ingredients: "Kalbfleisch, Semmelbrösel, Ei, Mehl, Zitrone, Petersilienkartoffeln",
    price: 16.90,
    category: "Österreichische Küche"
  },
  {
    id: "at-02",
    meal_name: "Tafelspitz",
    ingredients: "Rindfleisch, Suppengemüse, Kren, Schnittlauchsauce, Bratkartoffeln",
    price: 17.50,
    category: "Österreichische Küche"
  },
  {
    id: "at-03",
    meal_name: "Kaiserschmarrn",
    ingredients: "Mehl, Eier, Milch, Zucker, Rosinen, Staubzucker, Zwetschkenröster",
    price: 8.90,
    category: "Österreichische Küche"
  },
  {
    id: "at-04",
    meal_name: "Backhendl",
    ingredients: "Hähnchenkeule, Semmelbrösel, Ei, Mehl, Petersilienkartoffeln",
    price: 14.90,
    category: "Österreichische Küche"
  },

  // ---------- Türkische Küche ----------
  {
    id: "tuerkisch-01",
    meal_name: "Adana Kebap",
    ingredients: "Hackfleisch vom Lamm, Paprika, Zwiebeln, Reis, gegrillte Tomaten",
    price: 14.90,
    category: "Türkische Küche"
  },
  {
    id: "tuerkisch-02",
    meal_name: "Lahmacun",
    ingredients: "Dünner Teig, Hackfleisch, Zwiebeln, Paprika, Petersilie, Zitrone",
    price: 6.90,
    category: "Türkische Küche"
  },
  {
    id: "tuerkisch-03",
    meal_name: "Köfte",
    ingredients: "Hackfleisch, Zwiebeln, Semmelbrösel, Gewürze, Joghurt, Reis",
    price: 13.50,
    category: "Türkische Küche"
  },
  {
    id: "tuerkisch-04",
    meal_name: "Iskender Kebap",
    ingredients: "Dönerfleisch, Fladenbrot, Tomatensauce, Joghurt, geschmolzene Butter",
    price: 15.50,
    category: "Türkische Küche"
  },
  {
    id: "tuerkisch-05",
    meal_name: "Karışık Izgara (Gemischter Grillteller)",
    ingredients: "Adana Kebap, Hähnchenspieß, Köfte, gegrillte Paprika, Reis",
    price: 17.90,
    category: "Türkische Küche"
  },
  {
    id: "tuerkisch-06",
    meal_name: "Sigara Böreği",
    ingredients: "Filoteig, Schafskäse, Petersilie, Sonnenblumenöl",
    price: 6.50,
    category: "Türkische Küche"
  },

  // ---------- Desserts ----------
  {
    id: "dessert-01",
    meal_name: "Apfelstrudel",
    ingredients: "Strudelteig, Äpfel, Zimt, Rosinen, Walnüsse, Vanillesauce",
    price: 5.90,
    category: "Desserts"
  },
  {
    id: "dessert-02",
    meal_name: "Baklava",
    ingredients: "Filoteig, Walnüsse, Pistazien, Butter, Zuckersirup",
    price: 5.50,
    category: "Desserts"
  },
  {
    id: "dessert-03",
    meal_name: "Panna Cotta",
    ingredients: "Sahne, Zucker, Vanille, Gelatine, Beerensauce",
    price: 5.90,
    category: "Desserts"
  },

  // ---------- Getränke ----------
  {
    id: "getraenk-01",
    meal_name: "Apfelsaft gespritzt",
    ingredients: "Apfelsaft, Mineralwasser",
    price: 3.20,
    category: "Getränke"
  },
  {
    id: "getraenk-02",
    meal_name: "Ayran",
    ingredients: "Joghurt, Wasser, Salz",
    price: 2.90,
    category: "Getränke"
  },
  {
    id: "getraenk-03",
    meal_name: "Cola 0,33l",
    ingredients: "Cola",
    price: 3.10,
    category: "Getränke"
  },
  {
    id: "getraenk-04",
    meal_name: "Mineralwasser 0,33l",
    ingredients: "Kohlensäurehaltiges Mineralwasser",
    price: 2.70,
    category: "Getränke"
  },
  {
    id: "getraenk-05",
    meal_name: "Türkischer Tee",
    ingredients: "Schwarzer Tee, Zucker",
    price: 2.50,
    category: "Getränke"
  },

  // ---------- Kindermenü ----------
  {
    id: "kids-01",
    meal_name: "Kinder Schnitzel mit Pommes",
    ingredients: "Hähnchenschnitzel, Semmelbrösel, Ei, Mehl, Pommes frites",
    price: 7.90,
    category: "Kindermenü"
  },
  {
    id: "kids-02",
    meal_name: "Kinder Spaghetti mit Tomatensauce",
    ingredients: "Spaghetti, Tomatensauce, Parmesan",
    price: 6.50,
    category: "Kindermenü"
  }
];

// Weitere Arrays