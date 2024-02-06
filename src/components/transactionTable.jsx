import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ShowModel } from './customeModal';
import { Button, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactionAction } from '../pages/transaction/transactionAction';
import { setShowModel } from '../pages/transaction/transactionSlice';
import "../App.css"

// eslint-disable-next-line react/prop-types
export const TransactionTable = ({userId}) => {

  

    const [clickTransaction, setClickTransaction] = useState()
    const {transaction, model} = useSelector(state => state.transaction)
    const {user} = useSelector(state=> state.user)
  

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTransactionAction(userId))
    }, [dispatch, userId])

    



    const handelOnClick = (id) =>{

        const onlyOneTransaction = transaction.filter(item => item._id === id)
        setClickTransaction(onlyOneTransaction)
        dispatch(setShowModel(true))
        return
        
        
    }

    const totalAmount = () =>{

      // let income = 0;
      // let expense = 0;
      
      const income = transaction.filter(item => item.type === "income").map((item)=> item.amount).reduce((acc,item) => acc + item , 0)
      const expense = transaction.filter(item=> item.type === 'expense').map(item => item.amount).reduce((acc, item)=> acc+item, 0)
      let total = income - expense
      console.log(total);

      if(total.toString().includes("-")){
        return "-" + `${total}`.replace("-", "$")
      } else{
        return "$" + total
      }
    }

    

  return (
    <>
   
   <Row className='pt-5'>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            transaction.map((transactions, index)=>{

                const {date, title,type, amount, _id } = transactions
                return(
                    <>

            <tr key={index}>
          <td>{index + 1}</td>
          <td>{new Date(date).toLocaleDateString()}</td>
          <td>{title}</td>
          {
            type === "income" ? 
            <td style={{background: 'green'}}> {type}</td>
            :
            <td style={{background: 'red'}}> {type}</td>
          }
          {
            type === "income" ?
            <td>${amount}</td>
            :
            <td>-${amount}</td>
          }
          <td>
            <Button onClick={() => handelOnClick(_id)}>
                Edit/Delete
            </Button>
            
          </td>
   
    
        </tr>
                    
                    </>
                )
            })
        }
       
        
      </tbody>
      {
                model === true && <ShowModel clickTransaction={clickTransaction} />
      }
    </Table>
   </Row>

   <Row className='pt-5'>
    <h6>Your total account balance is <span>
      {totalAmount()}
      
      
      </span></h6>
   </Row>

   </>
  );
}

