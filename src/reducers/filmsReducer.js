import {
    FETCH_STARTED,
    FETCH_FINISHED,
    SINGLE_FETCH_FINISHED
} from '../actions'

export const filmsInitialState = {
    films: { results: [] }
}

export const filmsReducer = (state, action) => {
    if(action.type === FETCH_STARTED) {
        return {
            ...state,
        }
    }
    else if(action.type === FETCH_FINISHED){
        return {
            ...state,
            films: action.films
        }
    }
    else if(action.type === SINGLE_FETCH_FINISHED){
        return {
            ...state,
            singleFilm: action.singleFilm
        }
    }
    else {
        return
    }
}