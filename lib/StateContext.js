'use client';
import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const initialState = {
  Product: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        Product: action.Product,
      };
    case 'GET_PRODUCT':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
