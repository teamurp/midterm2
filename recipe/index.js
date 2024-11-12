const apiKey = '12b984761df443068fe3e5ee48471ad5'

const cross = document.querySelector('.details-cross')
const recipeCards = document.querySelectorAll('.recipe-card')
const recipesGrid = document.querySelector('.recipes-grid')
const star = document.querySelector('.details-star')
const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.main-button')
const mainSection = document.querySelector('.main')
const recipesSection = document.querySelector('.recipes')
const detailsSection = document.querySelector('.details')
const favSection = document.querySelector('.favorites')
const favGrid = document.querySelector('.favorites-grid')

let id = 0
let image = ''
let title = ''
let time = 0
let favorites = []
let url

searchButton.addEventListener('click', (e) => {
    detailsSection.style.display = 'none'
    recipesSection.style.display = 'block'
})

async function getRecipes() {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=` + apiKey)
        if(!response.ok) {
            alert('Error')
        }
        const recipes = await response.json()
        console.log(recipes)

        recipes.results.forEach(recipe => {
            const recipeCard = document.createElement('div')
            recipeCard.classList.add('recipe-card')
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="" class="recipe-img">
                <div class="recipe-text">
                    <div class="recipe-name">
                        ${recipe.title}
                    </div>
                    <div class="recipe-time">
                        <img src="../assets/clock.svg" alt="">
                        <p>${recipe.readyInMinutes} min</p>
                    </div>
                    <div class="recipe-desc">
                        ${recipe.summary}
                    </div>
                </div>
            `
            recipesGrid.appendChild(recipeCard)
            recipeCard.addEventListener('click', (e) => {
                id = recipe.id
                detailsSection.style.display = 'block'
                getRecipe()
                recipesSection.style.display = 'none'
                mainSection.style.display = 'none'
            })
        })
    }
    catch(error) {
        console.log(error)
    }
}
getRecipes()

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

        if(favorites.findIndex(fav => fav.id === id) == -1) {
            star.src = "../assets/star-empty-black.svg"
        } else {
            star.src = "../assets/star-full.svg"
        }
    }
    catch(error) {
        console.log(error)
    }
}
cross.addEventListener('click', (e) => {
    detailsSection.style.display = 'none'
    recipesSection.style.display = 'block'
    mainSection.style.display = 'block'
})

star.addEventListener('click', (e) => {
    if(favorites.findIndex(fav => fav.id === id) != -1) {
        star.src = "../assets/star-empty-black.svg"
        favorites.splice(favorites.findIndex(fav => fav.id === id), 1)
    } else {
        const favorite = {
            id: id,
            title: title,
            image: image,
            time: time
        }
        favorites.push(favorite)
        star.src = "../assets/star-full.svg"
    }
    console.log(favorites)
})

// const favLink = document.querySelector('#favLink')
// favLink.addEventListener('click', (e) => {
//     mainSection.style.display = 'none'
//     recipesSection.style.display = 'none'
//     detailsSection.style.display = 'none'
//     favSection.style.display = 'block'
//     getFavorites()
// })

const recipesLink = document.querySelector('#recipesLink')
recipesLink.addEventListener('click', (e) => {
    mainSection.style.display = 'block'
    recipesSection.style.display = 'block'
    detailsSection.style.display = 'none'
    favSection.style.display = 'none'
})

// async function getFavorites() {
//     favorites.forEach(fav => {
//         const favCard = document.createElement('div')
//         favCard.classList.add('fav-card')
//         const favStar = document.createElement('img')
//         favStar.classList.add('fav-star')
//         favStar.title = 'Remove from favorites'
//         favStar.src = '../assets/star-full.svg'
//         favCard.appendChild(favStar)
//         const favImg = document.createElement('img')
//         favImg.classList.add('fav-img')
//         favImg.src = fav.image
//         favCard.appendChild(favImg)
//         const favText = document.createElement('div')
//         favText.classList.add('fav-text')
//         favCard.appendChild(favText)
//         const favName = document.createElement('div')
//         favName.classList.add('fav-name')
//         favName.innerHTML = fav.title
//         favText.appendChild(favName)
//         const favTime = document.createElement('div')
//         favTime.classList.add('fav-time')
//         favTime.innerHTML = `
//             <img src="../assets/clock.svg" alt="">
//             <p>${fav.time}</p>
//         `
//         favText.appendChild(favTime)
//         const favDesc = document.createElement('div')
//         favDesc.classList.add('fav-desc')
//         favText.appendChild(favDesc)

//         // favCard.innerHTML = `
//         //     <img src="../assets/star-full.svg" alt="" class="fav-star" title="Add to favorites">
//         //     <img src="${fav.image}" alt="" class="fav-img">
//         //     <div class="fav-text">
//         //         <div class="fav-name">
//         //             ${fav.title}
//         //         </div>
//         //         <div class="fav-time">
//         //             <img src="../assets/clock.svg" alt="">
//         //             <p>${fav.time}</p>
//         //         </div>
//         //         <div class="fav-desc">
//         //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, vitae.
//         //         </div>
//         //     </div>
//         // `
//         favGrid.appendChild(favCard)
//     })
// }
async function searchRecipes() {
    try {
        url = 'https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=' + apiKey + '&query=' + searchInput.value
        const response = await fetch(url)
        if(!response.ok) {
            console.log('Error')
        }
        const recipes = await response.json()
        console.log(recipes)
        recipesGrid.innerHTML = ''
        recipes.results.forEach(recipe => {
            const recipeCard = document.createElement('div')
            recipeCard.classList.add('recipe-card')
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="" class="recipe-img">
                <div class="recipe-text">
                    <div class="recipe-name">
                        ${recipe.title}
                    </div>
                    <div class="recipe-time">
                        <img src="../assets/clock.svg" alt="">
                        <p>${recipe.readyInMinutes} min</p>
                    </div>
                    <div class="recipe-desc">
                        ${recipe.summary}
                    </div>
                </div>
            `
            recipesGrid.appendChild(recipeCard)
            recipeCard.addEventListener('click', (e) => {
                id = recipe.id
                title = recipe.title
                image = recipe.image
                time = recipe.readyInMinutes
                detailsSection.style.display = 'block'
                getRecipe()
                recipesSection.style.display = 'none'
                mainSection.style.display = 'none'
            })
        })
    } catch(error) {
        console.log(error)
    }
}