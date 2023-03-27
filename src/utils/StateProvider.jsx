//import state managment hooks for our state provider
import { createContext, useContext, useReducer } from "react";

//create state constants
export const StateContext = createContext();

export const StateProvider = ({
    initialState,
    reducer,
    children
}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateProvider = () => useContext(StateContext);