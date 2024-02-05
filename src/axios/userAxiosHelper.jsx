import axios from "axios";

const baseURL = import.meta.env.PROD ? "https://transactionapi-95ys.onrender.com" : "http://localhost:8000";
const userPath = "/api/user"

// signup 

export const userRegistration = (userObj) =>{

    const response = axios.post(baseURL + userPath, userObj)    
                        .then(res => res.data)
                        .catch(error => console.log(error))

    return response;

}


// login 

export const userLogin = (userObj) =>{

    const response = axios.post(baseURL + userPath + "/login", userObj)    
                        .then(res => res.data)
                        .catch(error => console.log(error))

    return response;


}