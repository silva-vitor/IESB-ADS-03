const { default: axios } = require("axios")

const apiMovie = axios.create({
    baseURL: ' https://api.themoviedb.org/3',
    params: {
        language: 'pt-BR',
    } ,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM5ODk1MzZlODRkZjhmNGU5YTAxZjYxMjFkMDA5NiIsIm5iZiI6MTcyNTgwMTMyOS4zMTE0NTcsInN1YiI6IjY2ZDBmODE1OWRjNzNhODdhMmIwNGM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wOw6LQq2qSxMg9G8zqssHI_MaqMCYyG5YEMxiL3K7GA'
        // +process.env.NEXT_PUBLIC_API

    }
})

export default apiMovie


