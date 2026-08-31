import React, {createContext,useContext,useReducer} from 'react';

//Prepares the Data Layer
export const StateContext =createContext();


//Wrap Our App and Provide the Data Layer
export const StateProvider = ({reducer, 
    initialState, 
    children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//  Pull Information From The Data Layer
export const useStateValue = () => useContext(StateContext);