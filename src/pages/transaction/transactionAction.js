import { toast } from "react-toastify";
import { createTransaction, deleteOneTransaction, getAllTransaction, updateOneUserData } from "../../axios/transactionsAxiosHelper.jsx";
import { setTransactions, setCreating, setUpdating, setDeleting, setShowModel } from "./transactionSlice.js";


export const createTransactionAction = (transObj, userId) => async (dispatch) =>{
  

    dispatch(setCreating(true))


    const result = await createTransaction(transObj, userId);

    dispatch(setCreating(false))

    if(result.status === "error"){
        dispatch(setCreating(false))
        toast.error(result.message)
        return

    }



    const transactions = await getAllTransaction(userId);

    if(transactions.status === "Success"){
        toast.success("Transaction Created!!")
        dispatch(setTransactions(transactions.data))
        dispatch(setCreating(false))

    }






}




export const updateUserData = (formObj, userId) => async (dispatch) =>{
 
    dispatch(setUpdating(true))
    const result = await updateOneUserData(formObj, userId)
    
    if(result.status === "error"){
        dispatch(setUpdating(false))
        toast.error(result.message)
        return
        
    }
    
    const transactions = await getAllTransaction(userId);
   

    if(transactions.status === "Success"){
        toast.success("Transaction Updated Successfully")
        dispatch(setTransactions(transactions.data))
        dispatch(setUpdating(false))
        dispatch(setShowModel(false))

    }


}


// delete 

export const deleteTransaction = (id,userId) => async (dispatch) =>{

    dispatch(setDeleting(true))

    const result = await deleteOneTransaction(id,userId);

    if(result.status === "error"){
        dispatch(setDeleting(false))
        toast.error(result.message)
        return
        
    }

    dispatch(getAllTransactionAction(userId))

    toast.success(result.message)
    dispatch(setDeleting(false))
    dispatch(setShowModel(false))

    // const transactions = await getAllTransaction(userId);
   

    // if(transactions.status === "sucess"){
    //     dispatch(setTransactions(transactions.data))

    // }


}


export const getAllTransactionAction = (userId) => async (dispatch) =>{

    const result = await getAllTransaction(userId);

  

    if(result.status === "Success"){
        dispatch(setTransactions(result.data))
    }
}