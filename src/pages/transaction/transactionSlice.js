import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    transaction: [],
    creating: false,
    updating:false,
    deleting:false,
    model: false,

}

const transactionSlice = createSlice({

    name:"transaction",
    initialState,
    reducers:{
        setTransactions:(state, {payload})=>{
            state.transaction = payload
        },
        setCreating :(state, {payload}) =>{
            state.creating = payload
        },
        setUpdating:(state, {payload}) =>{
            state.updating = payload
        },
        setDeleting:(state, {payload}) =>{
            state.deleting = payload
        },
        setShowModel:(state, {payload}) =>{
            state.model = payload;
        }
    }
})

const {reducer: transactionReducer, actions} = transactionSlice;

// const {reducers: transactionReducer, actions} = transactionSlice;
export const {setTransactions, setCreating, setUpdating, setDeleting, setShowModel} = actions;
export default transactionReducer;