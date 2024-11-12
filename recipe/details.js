const apiKey = '12b984761df443068fe3e5ee48471ad5'
const params = new URLSearchParams(window.location.search);
const id = params.get('id')
console.log(id)
const recipe = {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 10,
    "gaps": "no",
    "preparationMinutes": null,
    "cookingMinutes": null,
    "aggregateLikes": 471,
    "healthScore": 60,
    "creditsText": "blogspot.com",
    "sourceName": "blogspot.com",
    "pricePerServing": 106.02,
    "extendedIngredients": [
        {
            "id": 16018,
            "aisle": "Canned and Jarred",
            "image": "black-beans.jpg",
            "consistency": "SOLID",
            "name": "black beans",
            "nameClean": "canned black beans",
            "original": "1 15-ounce can black beans, not drained",
            "originalName": "black beans, not drained",
            "amount": 15,
            "unit": "ounce",
            "meta": [
                "drained",
                "canned"
            ],
            "measures": {
                "us": {
                    "amount": 15,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 425.243,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10011693,
            "aisle": "Canned and Jarred",
            "image": "tomatoes-canned.png",
            "consistency": "SOLID",
            "name": "canned tomatoes",
            "nameClean": "canned tomatoes",
            "original": "1 10-ounce can Rotel tomatoes with diced green chilies, not drained",
            "originalName": "Rotel tomatoes with diced green chilies, not drained",
            "amount": 10,
            "unit": "ounce",
            "meta": [
                "diced",
                "with  green chilies, not drained",
                "canned"
            ],
            "measures": {
                "us": {
                    "amount": 10,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 283.495,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 2009,
            "aisle": "Spices and Seasonings",
            "image": "chili-powder.jpg",
            "consistency": "SOLID",
            "name": "chili powder",
            "nameClean": "chili powder",
            "original": "2 tsp chili powder",
            "originalName": "chili powder",
            "amount": 2,
            "unit": "tsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1002014,
            "aisle": "Spices and Seasonings",
            "image": "ground-cumin.jpg",
            "consistency": "SOLID",
            "name": "cumin",
            "nameClean": "cumin",
            "original": "1/2 tsp cumin",
            "originalName": "cumin",
            "amount": 0.5,
            "unit": "tsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "ground pepper",
            "nameClean": "black pepper",
            "original": "1/4 tsp ground black pepper",
            "originalName": "ground black pepper",
            "amount": 0.25,
            "unit": "tsp",
            "meta": [
                "black"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 6168,
            "aisle": "Condiments",
            "image": "hot-sauce-or-tabasco.png",
            "consistency": "LIQUID",
            "name": "optional: of hot sauce",
            "nameClean": "hot sauce",
            "original": "optional: 4-5 dashes of hot sauce",
            "originalName": "optional: of hot sauce",
            "amount": 4,
            "unit": "dashes",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 4,
                    "unitShort": "dashes",
                    "unitLong": "dashes"
                },
                "metric": {
                    "amount": 4,
                    "unitShort": "dashes",
                    "unitLong": "dashes"
                }
            }
        },
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "LIQUID",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "1 tsp olive oil",
            "originalName": "olive oil",
            "amount": 1,
            "unit": "tsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "SOLID",
            "name": "onion",
            "nameClean": "onion",
            "original": "1/4 cup onion, chopped",
            "originalName": "onion, chopped",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 40,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 20444,
            "aisle": "Pasta and Rice",
            "image": "uncooked-white-rice.png",
            "consistency": "SOLID",
            "name": "rice",
            "nameClean": "rice",
            "original": "1/2 cup uncooked rice",
            "originalName": "uncooked rice",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "uncooked"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 92.5,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 14412,
            "aisle": "Beverages",
            "image": "water.png",
            "consistency": "LIQUID",
            "name": "water",
            "nameClean": "water",
            "original": "3 Tbsp water",
            "originalName": "water",
            "amount": 3,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 3,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 3,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        }
    ],
    "id": 716627,
    "title": "Easy Homemade Rice and Beans",
    "readyInMinutes": 35,
    "servings": 2,
    "sourceUrl": "http://cooking2perfection.blogspot.com/2012/11/easy-homemade-rice-and-beans.html",
    "image": "https://img.spoonacular.com/recipes/716627-556x370.jpg",
    "imageType": "jpg",
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 445.69,
                "unit": "kcal",
                "percentOfDailyNeeds": 22.28
            },
            {
                "name": "Fat",
                "amount": 4.09,
                "unit": "g",
                "percentOfDailyNeeds": 6.3
            },
            {
                "name": "Saturated Fat",
                "amount": 0.7,
                "unit": "g",
                "percentOfDailyNeeds": 4.35
            },
            {
                "name": "Carbohydrates",
                "amount": 86.11,
                "unit": "g",
                "percentOfDailyNeeds": 28.7
            },
            {
                "name": "Net Carbohydrates",
                "amount": 66.75,
                "unit": "g",
                "percentOfDailyNeeds": 24.27
            },
            {
                "name": "Sugar",
                "amount": 7.35,
                "unit": "g",
                "percentOfDailyNeeds": 8.17
            },
            {
                "name": "Cholesterol",
                "amount": 0,
                "unit": "mg",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Sodium",
                "amount": 1058.31,
                "unit": "mg",
                "percentOfDailyNeeds": 46.01
            },
            {
                "name": "Alcohol",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 100
            },
            {
                "name": "Alcohol %",
                "amount": 0,
                "unit": "%",
                "percentOfDailyNeeds": 100
            },
            {
                "name": "Protein",
                "amount": 19.14,
                "unit": "g",
                "percentOfDailyNeeds": 38.29
            },
            {
                "name": "Fiber",
                "amount": 19.36,
                "unit": "g",
                "percentOfDailyNeeds": 77.45
            },
            {
                "name": "Manganese",
                "amount": 1.38,
                "unit": "mg",
                "percentOfDailyNeeds": 68.92
            },
            {
                "name": "Copper",
                "amount": 0.82,
                "unit": "mg",
                "percentOfDailyNeeds": 40.77
            },
            {
                "name": "Iron",
                "amount": 7.13,
                "unit": "mg",
                "percentOfDailyNeeds": 39.62
            },
            {
                "name": "Folate",
                "amount": 156.49,
                "unit": "µg",
                "percentOfDailyNeeds": 39.12
            },
            {
                "name": "Potassium",
                "amount": 1217.8,
                "unit": "mg",
                "percentOfDailyNeeds": 34.79
            },
            {
                "name": "Phosphorus",
                "amount": 344.99,
                "unit": "mg",
                "percentOfDailyNeeds": 34.5
            },
            {
                "name": "Magnesium",
                "amount": 122.85,
                "unit": "mg",
                "percentOfDailyNeeds": 30.71
            },
            {
                "name": "Vitamin B1",
                "amount": 0.46,
                "unit": "mg",
                "percentOfDailyNeeds": 30.39
            },
            {
                "name": "Vitamin C",
                "amount": 20.47,
                "unit": "mg",
                "percentOfDailyNeeds": 24.81
            },
            {
                "name": "Vitamin B6",
                "amount": 0.49,
                "unit": "mg",
                "percentOfDailyNeeds": 24.46
            },
            {
                "name": "Vitamin B2",
                "amount": 0.38,
                "unit": "mg",
                "percentOfDailyNeeds": 22.62
            },
            {
                "name": "Vitamin A",
                "amount": 1122.25,
                "unit": "IU",
                "percentOfDailyNeeds": 22.45
            },
            {
                "name": "Vitamin E",
                "amount": 3.2,
                "unit": "mg",
                "percentOfDailyNeeds": 21.33
            },
            {
                "name": "Vitamin B3",
                "amount": 4.15,
                "unit": "mg",
                "percentOfDailyNeeds": 20.77
            },
            {
                "name": "Selenium",
                "amount": 11.29,
                "unit": "µg",
                "percentOfDailyNeeds": 16.12
            },
            {
                "name": "Calcium",
                "amount": 155.55,
                "unit": "mg",
                "percentOfDailyNeeds": 15.55
            },
            {
                "name": "Zinc",
                "amount": 2.21,
                "unit": "mg",
                "percentOfDailyNeeds": 14.76
            },
            {
                "name": "Vitamin B5",
                "amount": 1.31,
                "unit": "mg",
                "percentOfDailyNeeds": 13.07
            },
            {
                "name": "Vitamin K",
                "amount": 12.29,
                "unit": "µg",
                "percentOfDailyNeeds": 11.7
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 81.59,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 25.61,
                "unit": ""
            },
            {
                "name": "Inflammation Score",
                "amount": -9,
                "unit": ""
            },
            {
                "name": "Nutrition Score",
                "amount": 26.25695626632027,
                "unit": "%"
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Petunidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Delphinidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Malvidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Pelargonidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Peonidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Catechin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epicatechin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epicatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Theaflavin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Thearubigins",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Eriodictyol",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Hesperetin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Naringenin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Apigenin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Luteolin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Isorhamnetin",
                "amount": 1,
                "unit": "mg"
            },
            {
                "name": "Kaempferol",
                "amount": 0.13,
                "unit": "mg"
            },
            {
                "name": "Myricetin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Quercetin",
                "amount": 4.06,
                "unit": "mg"
            },
            {
                "name": "Theaflavin-3,3'-digallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3'-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Gallocatechin",
                "amount": 0,
                "unit": "mg"
            }
        ],
        "ingredients": [
            {
                "id": 16018,
                "name": "black beans",
                "amount": 7.5,
                "unit": "ounce",
                "nutrients": [
                    {
                        "name": "Vitamin B1",
                        "amount": 0.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.27,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.62,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 74.42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 2.76,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 229.63,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 1.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 20.54,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 129.7,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Copper",
                        "amount": 0.41,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 4.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 74.42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.39,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 12.82,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 14.67,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.26,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 816.47,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 35.21,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 1.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 8.5,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 5.74,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 654.87,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 193.49,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    }
                ]
            },
            {
                "id": 10011693,
                "name": "canned tomatoes",
                "amount": 5,
                "unit": "ounce",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 18.29,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.4,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 48.19,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.85,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 45.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 1.73,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 7.64,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 18.43,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 7.51,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0.26,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 1.84,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 28.35,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 7237.63,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.39,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.26,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 2.32,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 2.69,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 187.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 1.77,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 10.33,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.21,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 6.24,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 304.76,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 13.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 415.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 45.36,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 2009,
                "name": "chili powder",
                "amount": 1,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 1.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.39,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 8.91,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.55,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 8.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.31,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.4,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.76,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 2.85,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0.47,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 4.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.57,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 0.36,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.94,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 44.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.09,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 1.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 1.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.19,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 800.55,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 52.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 7.61,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 1002014,
                "name": "cumin",
                "amount": 0.25,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 0.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.11,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 4.66,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.03,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 2.49,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.03,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 1.83,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 0.09,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.84,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 6.35,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 8.94,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 1.88,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 1002030,
                "name": "ground pepper",
                "amount": 0.13,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 1.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.4,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.04,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.41,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.43,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 1.37,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 3.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 0.63,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 6168,
                "name": "optional: of hot sauce",
                "amount": 2,
                "unit": "dashes",
                "nutrients": [
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 5.29,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.32,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.29,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 0.02,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    }
                ]
            },
            {
                "id": 4053,
                "name": "olive oil",
                "amount": 0.5,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.24,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 2.25,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 1.35,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.64,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.31,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 19.89,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 11282,
                "name": "onion",
                "amount": 0.13,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 1.22,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 4.6,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.1,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 5.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 1.53,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 3.8,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.08,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.22,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Protein",
                        "amount": 0.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 1.87,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.85,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.4,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 1.48,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 29.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 8,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 20444,
                "name": "rice",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Choline",
                        "amount": 2.68,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.39
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.08,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Fat",
                        "amount": 0.31,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Calcium",
                        "amount": 12.95,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Selenium",
                        "amount": 6.98,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.12
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 53.19,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.74,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.77
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 36.38,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folate",
                        "amount": 3.7,
                        "unit": "µg",
                        "percentOfDailyNeeds": 39.12
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 11.7
                    },
                    {
                        "name": "Copper",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Iron",
                        "amount": 0.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Magnesium",
                        "amount": 11.56,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.47,
                        "unit": "mg",
                        "percentOfDailyNeeds": 13.07
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Protein",
                        "amount": 3.3,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.6,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 2.31,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 36.98,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.46
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.17
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.08,
                        "unit": "g",
                        "percentOfDailyNeeds": 4.35
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 22.45
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.81
                    },
                    {
                        "name": "Potassium",
                        "amount": 53.19,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 168.81,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 14412,
                "name": "water",
                "amount": 1.5,
                "unit": "Tbsp",
                "nutrients": [
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 77.45
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 6.3
                    },
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 38.29
                    },
                    {
                        "name": "Sodium",
                        "amount": 1.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.01
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.68,
                        "unit": "mg",
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.5
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 24.27
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 28.7
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.76
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 40.77
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.22,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.71
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.62
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.92
                    },
                    {
                        "name": "Fluoride",
                        "amount": 5.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 34.79
                    },
                    {
                        "name": "Calories",
                        "amount": 0,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 22.28
                    }
                ]
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 16.72,
            "percentFat": 8.05,
            "percentCarbs": 75.23
        },
        "weightPerServing": {
            "amount": 449,
            "unit": "g"
        }
    },
    "summary": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
    ],
    "occasions": [],
    "instructions": "<p>Heat the olive oil in a large pot over medium heat. Add onions and saute until soft, or for about 5 minutes. Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.* Serve with salsa, cheese, and sour cream.</p>",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Heat the olive oil in a large pot over medium heat.",
                    "ingredients": [
                        {
                            "id": 4053,
                            "name": "olive oil",
                            "localizedName": "olive oil",
                            "image": "olive-oil.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add onions and saute until soft, or for about 5 minutes.",
                    "ingredients": [
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 5,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 3,
                    "step": "Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.*",
                    "ingredients": [
                        {
                            "id": 20444,
                            "name": "rice",
                            "localizedName": "rice",
                            "image": "uncooked-white-rice.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 20,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "Serve with salsa, cheese, and sour cream.",
                    "ingredients": [
                        {
                            "id": 1056,
                            "name": "sour cream",
                            "localizedName": "sour cream",
                            "image": "sour-cream.jpg"
                        },
                        {
                            "id": 1041009,
                            "name": "cheese",
                            "localizedName": "cheese",
                            "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
                        },
                        {
                            "id": 6164,
                            "name": "salsa",
                            "localizedName": "salsa",
                            "image": "salsa.png"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularScore": 98.61764526367188,
    "spoonacularSourceUrl": "https://spoonacular.com/easy-homemade-rice-and-beans-716627"
}
async function getRecipe() {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=` + apiKey)
        if(!response.ok) {
            alert('Error')
        }
        const recipe = await response.json()
        console.log(recipe)
        const detailsName = document.querySelector('p#detailsName')
        const detailsTime = document.querySelector('p#detailsTime')
        const detailsDesc = document.querySelector('.details-desc')
        detailsName.innerHTML = recipe.title
        detailsTime.innerHTML = recipe.readyInMinutes + ' min'
        detailsDesc.innerHTML = recipe.summary
        const ingredientsList = document.querySelector('ul#ingredients')
        recipe.extendedIngredients.forEach(ing => {
            const ingredient = document.createElement('li')
            ingredient.innerHTML = ing.amount + ' ' + ing.unit + ' of ' + ing.name
            ingredientsList.appendChild(ingredient)
        })
        const steps = document.querySelector('ul#steps')
        recipe.analyzedInstructions[0].steps.forEach(step => {
            const stepItem = document.createElement('li')
            stepItem.innerHTML = `
                <p>Step ${step.number}:</p>
                ${step.step}
            `
            steps.appendChild(stepItem)
        })
        const nutritionList = document.querySelector('ul#nutrition')
        const calories = recipe.nutrition.nutrients[0]

        const fat = recipe.nutrition.nutrients[1]

        const carbs = recipe.nutrition.nutrients[3]

        const protein = recipe.nutrition.nutrients[10]

        nutritionList.innerHTML = `
            <li>
                <span>Calories: </span>${calories.amount} ${calories.unit}
            </li>
            <li>
                <span>Protein: </span>${protein.amount} ${protein.unit}
            </li>
            <li>
                <span>Fat: </span>${fat.amount} ${fat.unit}
            </li>
            <li>
                <span>Carbs: </span>${carbs.amount} ${carbs.unit}
            </li>
        `
        const detailsImage = document.querySelector('.details-img')
        detailsImage.src = recipe.image
    }
    catch(error) {
        console.log(error)
    }
}
const cross = document.querySelector('.details-cross')
cross.addEventListener('click', (e) => {
    window.location.href = 'index.html'
})

const star = document.querySelector('.details-star')
star.addEventListener('click', (e) => {
    
})