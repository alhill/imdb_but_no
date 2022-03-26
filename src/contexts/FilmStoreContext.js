import { createContext, useContext } from "react";
import useThunkReducer from "react-hook-thunk-reducer";

const FilmStore = createContext()
FilmStore.displayName = "FilmStore"

export const useFilmStore = () => useContext(FilmStore)

export const FilmStoreProvider = ({ children, initialState, reducer }) => {

    const [globalState, dispatch] = useThunkReducer(reducer, initialState)

    return (
        <FilmStore.Provider value={[globalState, dispatch]}>
            { children }
        </FilmStore.Provider>
    )
}