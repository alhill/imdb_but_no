export const ADD_RATING = "ADD_RATING"
export const EDIT_RATING = "EDIT_RATING"
export const DELETE_RATING = "DELETE_RATING"
export const FETCH_STARTED = "FETCH_STARTED"
export const FETCH_FINISHED = "FETCH_FINISHED"
export const SINGLE_FETCH_FINISHED = "SINGLE_FETCH_FINISHED"

const apiKey = process.env.REACT_APP_API_KEY

export const addRating = (rating) => ({
    type: ADD_RATING,
    rating
})
export const editRating = (rating) => ({
    type: EDIT_RATING,
    rating
})
export const deleteRating = (rating) => ({
    type: DELETE_RATING,
    rating
})

export const fetchFilms = (search) => {
    return async dispatch => {
        const uri = search ?
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}` :
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        const resp = await fetch(uri)
        const films = await resp.json()
        dispatch(loadFilms(films))
    }
}

export const loadFilms = (films) => {
    return ({
        type: FETCH_FINISHED,
        films
    })
}

export const fetchSingleFilm = (id) => {
    return async dispatch => {
        const uri = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        const resp = await fetch(uri)
        const singleFilm = await resp.json()
        dispatch(loadSingleFilm(singleFilm))
    }
}

export const loadSingleFilm = (singleFilm) => {
    return ({
        type: SINGLE_FETCH_FINISHED,
        singleFilm
    })
}