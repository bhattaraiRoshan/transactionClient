/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CustomInput } from './customInput';
import { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { deleteTransaction, updateUserData } from '../pages/transaction/transactionAction';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModel } from '../pages/transaction/transactionSlice';


// const initialValue = {
//     title: "",
//     type: "expenses",
//     amount: null,

// }

export const  ShowModel = (props) => {
  

    // eslint-disable-next-line react/prop-types
    const {clickTransaction} = props
    const { model} = useSelector(state => state.transaction)
   
    // const { title, type, amount} = clickTransaction[0];
    // console.log(clickTransaction);

    

    const [updatedDate, setUpdatedDate] = useState(clickTransaction[0])

    const{title, type, amount} = updatedDate;
    const {user} = useSelector(state => state.user)
    const {updating, deleting} = useSelector(state => state.transaction)



   

    



    const handelOnChange = (e) =>{

        const {name, value} = e.target;
        setUpdatedDate({
            ...updatedDate,
            [name] : value
        })

    }


    const dispatch = useDispatch()

    const handelOnUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateUserData(updatedDate, clickTransaction[0]?.userId))
    }

    const handelOnDelete = (e) =>{

        e.preventDefault()

        dispatch(deleteTransaction(clickTransaction[0]?._id, user?._id))

        
    }

   

    const handelOnClick = () =>{
      dispatch(setShowModel(false))

    }
   




  return (
    <Modal
    show={model}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={false}
   
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Update your Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomInput 
        label="Title"
        inputAttributes={{
            type: "title",
            name: "title",
            required: true,
            value: title,
        }}

        handelOnChange = {handelOnChange}


        
        
        />
        <Form.Group>
                <Form.Label className="fw-bold">Type</Form.Label>
                <Form.Select name="type" value= {type} onChange={(e) => handelOnChange(e)} >
                    <option value="expense">Expense</option>
                     <option value="income">Income</option>
                </Form.Select>
                </Form.Group>
        

        
        
        
        <CustomInput 
        label="Amount"
        inputAttributes={{
            type: "number",
            name: "amount",
            required: true,
            value: amount,
        }}
        handelOnChange = {handelOnChange}
        
        />
      </Modal.Body>
      <Modal.Footer>
        {
          updating ? <Spinner animation="border" /> : <Button variant='success' onClick={(e) => handelOnUpdate(e)} >Update</Button>
        }
        {
          deleting ? <Spinner animation='border'/> : <Button  variant='danger' onClick={(e) => handelOnDelete(e)} >Delete</Button>
        }
        <Button onClick={() => handelOnClick()} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



