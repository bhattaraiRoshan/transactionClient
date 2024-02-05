// Slice file build using redux-tootlkit

import { createSlice } from "@reduxjs/toolkit"

//1. Initial State
//2. Redusers

const initialState = {
    user: null,
    isAuthenticating: false,
    isAuthenticated: false,
}


const userSlice = createSlice({

    name: "user",
    initialState,
    reducers:{
        setUser: (state, {payload}) =>{
            state.user = payload;
        }, 
        setIsAuthenticating: (state, {payload}) =>{
            state.isAuthenticating = payload;
        },
        setIsAuthenticated: (state, {payload}) =>{
            state.isAuthenticated = payload;
        }
    }

})

const {reducer: userReducer, actions} = userSlice;

export const {setUser, setIsAuthenticated, setIsAuthenticating} = actions;

export default userReducer;