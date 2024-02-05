import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) =>{

    const {isAuthenticated} = useSelector(state=> state.user)

    return isAuthenticated ? children : <Navigate to="/"/> 
}