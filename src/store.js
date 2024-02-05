import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./pages/user/userSlice.js";
import transactionReducer from "./pages/transaction/transactionSlice.js";


const store = configureStore({

    reducer:{

        user: userReducer,
        transaction: transactionReducer,
        

    },

   
})

export default store;