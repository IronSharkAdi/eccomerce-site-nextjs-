import { createContext , useReducer ,  } from 'react'


export const Store = createContext();
const initialState ={
    darkMode : false
}

function reducer