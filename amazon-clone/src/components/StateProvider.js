import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext(); // Prepares data layer

//wraps app and provides data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);
