import { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext()

export function ApiContextProvider({ children }) {
    const [cardMovies, setCardMovies] = useState([])
    const [genres, setGenres] = useState([])
    
    const API_URL =
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const SEARCH_API =
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

    const API_GENRES =
        'https://api.themoviedb.org/3/genre/movie/list?api_key=93d7b02037671a1fa467ef1718012062&language=en-US'

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setCardMovies(data.results)
            })

            fetch(API_GENRES)
            .then((genre) => genre.json())
            .then((result) => {
                const genres = result.genres.reduce((genres, gen) => {
                    const { id, name } = gen
                    genres[id] = name
                    return genres
                }, [])
                setGenres(genres)
            })
    }, [])

    const SearchMovies = (e) => {
        e.preventDefault()

        fetch(SEARCH_API + e.target.elements.filme.value)
            .then((res) => res.json())
            .then((data) => {
                setCardMovies(data.results)
            })

        e.target.elements.filme.value = ''
    }

    return (
        <ApiContext.Provider value={{ cardMovies, genres, SearchMovies}}>
            {children}
        </ApiContext.Provider>
    )
}
