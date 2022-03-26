
import {
    ADD_RATING,
    EDIT_RATING,
    DELETE_RATING,
} from '../actions'

export const ratingsInitialState = {
    userRatings: []
}

export const ratingsReducer = (state, action) => {
    if(action.type === ADD_RATING) {
        return {
            ...state,
            userRatings: [
                ...state.userRatings,
                action.rating
            ]
        }
    }
    else if(action.type === EDIT_RATING) {
        const filteredRatings = state.userRatings.filter(rat => rat.id !== action.rating.id)
        return {
            ...state,
            userRatings: [
                ...filteredRatings,
                action.rating
            ]
        }
    }
    else if(action.type === DELETE_RATING) {
        const userRatings = state.userRatings.filter(rat => rat.id !== action.rating.id)
        return { 
            ...state,
            userRatings 
        }
    }
    else {
        return
    }
}