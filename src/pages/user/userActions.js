// File whihc is responsible to dispatch action  for updating state 
// uses the actions actions given by slice 

import { toast } from "react-toastify";
import { userLogin } from "../../axios/userAxiosHelper"
import { setIsAuthenticated, setIsAuthenticating, setUser } from "./userSlice.js";

// UI ------------------ [] ---------------- API
// Responsible for updating our global state

// loging action 

export const loginUserAction = (userObj) => async (dispatch) =>{

    dispatch(setIsAuthenticating(true))

    const result = await userLogin(userObj);


    if(result.status === "error"){
        dispatch(setIsAuthenticating(false))
        toast.error("Invalid Login Credentials")
        return;
    }

    dispatch(setUser(result.data))
    dispatch(setIsAuthenticated(true))

    toast.success(result.message)



}
