import { createContext, useContext, useReducer } from "react";

const RatingStore = createContext()
RatingStore.displayName = "RatingStore"

export const useRatingStore = () => useContext(RatingStore)

export const RatingStoreProvider = ({ children, initialState, reducer }) => {

    const [globalState, dispatch] = useReducer(reducer, initialState)

    return (
        <RatingStore.Provider value={[globalState, dispatch]}>
            { children }
        </RatingStore.Provider>
    )
}