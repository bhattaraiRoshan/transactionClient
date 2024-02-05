import { Form } from "react-bootstrap";
import { CustomInput } from "./customInput";
import { useState } from "react";
import { userRegistration } from "../axios/userAxiosHelper";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

const initialFormData = {
    name: "",
    email : "",
    password:"",
    confirm_password: "",
}

export const SignupForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const {name, email, password, confirm_password} = formData;

    const handelOnChange = (e) =>{

        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name] : value,

        })

    }

    const navigate = useNavigate();

    const handelonSubmit = async (e) =>{
        e.preventDefault();

        const result = await userRegistration(formData);
        console.log(result);

        if(result.status === "error"){
          return  toast.error(result.message)
        }

       // success

       toast.success(result.message)
       navigate("/")






    }

    

    return(
        <Form onSubmit={(e)=>handelonSubmit(e)}>

            <CustomInput
            label= "Name"
            inputAttributes={{
                type: "text",
                placeholder: "Enter your full name",
                name: "name",
                required: true,
                value: name,
            }}
            handelOnChange = {handelOnChange}
            />

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

            <CustomInput
            label= "Confirm Password"
            inputAttributes={{
                type: "password",
                placeholder: "Confirm a Password",
                name: "confirm_password",
                required: true,
                value:confirm_password,
            }}
            handelOnChange = {handelOnChange}
            />

            <button type="submit">Sign up</button>
            

        </Form>
    )
}