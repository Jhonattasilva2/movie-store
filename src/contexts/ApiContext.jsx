import { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext()

export function ApiContextProvider({ children }) {
    const [cardMovies, setCardMovies] = useState([])

    const API_URL =
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const SEARCH_API =
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setCardMovies(data.results)
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
        <ApiContext.Provider value={{ cardMovies, SearchMovies }}>
            {children}
        </ApiContext.Provider>
    )
}
