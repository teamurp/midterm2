const apiKey = 'e37c7a10d3acaf009ccdeab1c55aac40'

const detailsTitle = document.querySelector('.details-title')
const detailsRating = document.querySelector('.details-rating')
const detailsTime = document.querySelector('.details-time')
const detailsDate = document.querySelector('.details-date')
const detailsSynopsis = document.querySelector('.details-synopsis')
const detailsPoster = document.querySelector('.details-poster')
const moviesGrid = document.querySelector('.movies-grid')

const castList = document.querySelector('.cast ul')
const crewList = document.querySelector('.crew ul')

const searchSection = document.querySelector('.search')
const detailsSection = document.querySelector('.details')
const watchlistSection = document.querySelector('.watchlist')
const moviesSection = document.querySelector('.movies')

const moviesLink = document.querySelector('.movies-link')
const watchLink = document.querySelector('.watch-link')

const searchBar = document.querySelector('#searchBar')

let movieId = 0

const searchSort = document.querySelector('#search-sort')
let url

async function getMovies() {
    try {
        switch(searchSort.value) {
            case 'Popularity':
                url = `https://api.themoviedb.org/3/movie/popular?api_key=` + apiKey
                break;
            case 'Rating':
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=` + apiKey
                break;
            case 'Upcoming':
                url = `https://api.themoviedb.org/3/movie/upcoming?api_key=` + apiKey
                break;
        }
        const response = await fetch(url)
        if(!response.ok) {
            alert('Error')
        }
        const movies = await response.json()
        console.log(movies)

        moviesGrid.innerHTML = ''
        for(let i=0; i<18; i++) {
            const movieCard = document.createElement('div')
            movieCard.classList.add('movie-card')
            movieCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${movies.results[i].poster_path}" alt="" class="movie-img">
                <div class="movie-text">
                    <div class="movie-title">
                        ${movies.results[i].original_title}
                    </div>
                    <div class="movie-date">
                        ${movies.results[i].release_date}
                    </div>
                </div>
            `
            moviesGrid.appendChild(movieCard)
            movieCard.addEventListener('click', (e) => {
                detailsSection.style.display = 'block'
                searchSection.style.display = 'none'
                moviesSection.style.display = 'none'
                movieId = movies.results[i].id
                getDetails()
            })
        }
    } catch (error) {
        console.log(error)
    }
}
getMovies()

async function getDetails() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=` + apiKey)
        if(!response.ok) {
            alert('Error')
        }
        const movie = await response.json()
        console.log(movie)

        detailsTitle.innerHTML = movie.original_title
        detailsRating.innerHTML = `Rating: ${movie.vote_average} / 10`
        detailsTime.innerHTML = `Time: ${Math.floor(movie.runtime/60)}h ${movie.runtime%60}min`
        detailsDate.innerHTML = `Release date: ${movie.release_date}`
        detailsSynopsis.innerHTML = `<h1>Synopsis:</h1><p>${movie.overview}</p>`
        detailsPoster.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path

        const response2 = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=` + apiKey)
        if(!response2.ok) {
            alert('Error')
        }
        const movieCast = await response2.json()
        console.log(movieCast)

        castList.innerHTML = ''
        crewList.innerHTML = ''

        for(let i = 0; i < 7; i++) {
            const castItem = document.createElement('li')
            castItem.innerHTML = `${movieCast.cast[i].name} as ${movieCast.cast[i].character}`
            castList.appendChild(castItem)

            const crewItem = document.createElement('li')
            crewItem.innerHTML = `${movieCast.crew[i].name} as ${movieCast.crew[i].job}`
            crewList.appendChild(crewItem)
        }

    } catch (error) {
        console.log(error)
    }
}

moviesLink.addEventListener('click', (e) => {
    getMovies()
    moviesSection.style.display = 'block'
    searchSection.style.display = 'block'
    detailsSection.style.display = 'none'
    // watchlistSection.style.display = 'none'
})

async function searchMovies() {
    try {
        switch(searchSort.value) {
            case('Popularity'):
                url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&sort_by=popularity.desc'
                break;
            case('Rating'):
                url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&sort_by=vote_average.desc'
                break;
            case('Upcoming'):
                url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&sort_by=release_date.desc'
                break;
        }
        const response = await fetch(url + `&query=${searchBar.value}`)
        if(!response.ok) {
            alert('Error')
        }
        if(searchBar.value === '') {
            alert('Please enter a movie name')
            return
        }
        const movies = await response.json()
        console.log(movies)
        moviesGrid.innerHTML = ''
        movies.results.forEach(movie => {
            const movieCard = document.createElement('div')
            movieCard.classList.add('movie-card')
            movieCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="" class="movie-img">
                <div class="movie-text">
                    <div class="movie-title">
                        ${movie.original_title}
                    </div>
                    <div class="movie-date">
                        ${movie.release_date}
                    </div>
                </div>
            `
            moviesGrid.appendChild(movieCard)
            movieCard.addEventListener('click', (e) => {
                detailsSection.style.display = 'block'
                searchSection.style.display = 'none'
                moviesSection.style.display = 'none'
                movieId = movie.id
                getDetails()
            })
        })
    } catch (error) {
        console.log(error)
    }
}