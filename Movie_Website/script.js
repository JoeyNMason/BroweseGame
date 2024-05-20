// API
const API_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=7dd6c03e5e7d0fb3221c169a791111da&page=1' //trending movies on home page
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280' // images
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7dd6c03e5e7d0fb3221c169a791111da&query="' //search bar

// bringing in the card ids
const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const quote = document.getElementById("tagline")
const date = document.getElementById("date")

//bringing in the animations
const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

// getting search bar
const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

// getting intial movies
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

//show movies
function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, overview, release_date, tagline} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `     
        <div class="card-container">

            <div class="card">

                <div class="card-header animated-bg" id="header"><img src="${IMG_PATH + poster_path}" alt="${title}"/></div>

                    <div class="card-content">
                        <h3 class="card-title animated-bg animated-bg-text" id="title">${title}</h3>
                            <p class="card-excerpt" id="card-excerpt">${overview};
                                <span class="animated-bg animated-bg-text">&nbsp;</span> 
                                <span class="animated-bg animated-bg-text">&nbsp;</span> 
                                <span class="animated-bg animated-bg-text">&nbsp;</span> 
                            </p>
                    <div class="author">
                        <div class="profile-img animated-bg"  id="profile_img">&nbsp;</div>
                        <div class="author-info">
                            <strong class="animated-bg animated-bg-text" id="tagline">${tagline}</strong>
                            <small class="animated-bg animated-bg-text" id="date">${release_date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    main.appendChild(movieEl)
    })

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}

setTimeout(getData, 1250)


animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))

// search bar functionality
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else{
        window.location.reload
    }
})