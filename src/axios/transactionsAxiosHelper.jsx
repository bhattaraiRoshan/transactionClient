import axios from "axios";

const baseURL = "http://localhost:8000";
const transactionPath = "/api/transaction"


export const createTransaction = (tranObj, userId) =>{
    

    const response =  axios.post(baseURL + transactionPath, tranObj ,  
        {headers:{
            authorization: userId
    }})    
                        .then(res => res.data)
                        .catch(error => console.log(error))

    return response;

}


export const getAllTransaction = (userId) =>{
  

    const response = axios.get(baseURL + transactionPath, 
    {headers:{
        authorization: userId
    }})
                             .then(res => res.data)
                            .catch(error => console.log(error))


    return response;
}


export const updateOneUserData = (formObj, userId) =>{

    const response = axios.patch(baseURL + transactionPath, formObj, 
        {
            headers:{
                authorization: userId
            }})
                                     .then(res => res.data)
                                    .catch(error => console.log(error))
        
        
            return response;

    
}


export const deleteOneTransaction = (id,userId) =>{
   

    const response = axios.delete(baseURL + transactionPath,
        {
            headers:{
                authorization: userId
            }, 
        data:{
            id
        }})
                                     .then(res => res.data)
                                    .catch(error => console.log(error))
        
        
            return response;

    
}