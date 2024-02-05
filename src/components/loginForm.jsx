
import { Form } from "react-bootstrap";
import { CustomInput } from "./customInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../pages/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';


const initialFormData = {
  
    email : "",
    password:"",
  
}


export const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const { email, password} = formData;

    const handelOnChange = (e) =>{

        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name] : value,

        })

    }

    const dispatch = useDispatch()
    const {isAuthenticated, isAuthenticating} = useSelector(state => state.user)
    const navigate = useNavigate()

    
    const handelonSubmit = async (e) =>{
        e.preventDefault();

       

        // distpace action 

        dispatch( loginUserAction(formData))





        // const result = await userLogin(formData);
        
        // if(result.status === "error"){
        //    return toast.error("Invalid Login Credentials!!")
        // }

        // setFormData(initialFormData)

        // success

        

        





    }

    if(isAuthenticated){

        navigate("/transaction")

    }

    

    return(
        <Form onSubmit={(e)=>handelonSubmit(e)}>

          

            <CustomInput
            label= "Email"
            inputAttributes={{
                type: "email",
                placeholder: "Enter your email",
                name: "email",
                required: true,
                value: email,
            }}
            handelOnChange = {handelOnChange}
            />


            <CustomInput
            label= "Password"
            inputAttributes={{
                type: "password",
                placeholder: "Enter your password",
                name: "password",
                required: true,
                value: password,
            }}
            handelOnChange = {handelOnChange}
            />

           {

            isAuthenticating ?  <Spinner animation="border" /> : <button type="submit">Login</button>
           }

            
            

        </Form>
    )
}