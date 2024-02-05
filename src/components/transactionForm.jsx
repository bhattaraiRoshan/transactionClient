import { Form, Row, Col, Button, Spinner  } from "react-bootstrap"
import { CustomInput } from "./customInput"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTransactionAction } from "../pages/transaction/transactionAction"


const initiFormDate = {
    title: "",
    type: "expense",
    date: null,
    amount: null,
}

// eslint-disable-next-line react/prop-types
export const TransactionForm = ({user}) =>{

    const {creating} = useSelector(state => state.transaction)


    // console.log(user._id);
    

    const [formData, setFormDate] = useState(initiFormDate)

    const{title, type, date, amount} = formData;

    const handelOnChange = (e) =>{

        const {name, value} = e.target;
        

        setFormDate({
            ...formData,
            [name] : value,

        })

    }



    const distpace = useDispatch()
    // const {user} = useSelector(state => state.user)



    const handelonSubmit = (e) =>{
        e.preventDefault();
        setFormDate({
            ...formData,
            // eslint-disable-next-line react/prop-types
            userId: user?._id
        })
        // eslint-disable-next-line react/prop-types
        distpace(createTransactionAction(formData, user._id))


        // create form data login 

    }

    // console.log(formData);




    return(
        <Form onSubmit={(e) => handelonSubmit(e)}>
            <Row>
                <Col>

                <CustomInput
                label="Title"
                
                inputAttributes={{
                    type: "text",
                    placeholder: "Enter your title",
                    name: "title",
                    required: true,
                    value: title,
                }}
                handelOnChange= {handelOnChange}
                
                />
                
                </Col>
                <Col>

                <Form.Group>
                <Form.Label className="fw-bold">Type</Form.Label>
                <Form.Select name="type" value= {type} onChange= {(e)=>handelOnChange(e)}>
                    <option value="expense">Expense</option>
                     <option value="income">Income</option>
                </Form.Select>
                </Form.Group>
                </Col>
                <CustomInput
                
                label="Date"
               
                inputAttributes={{
                    type: "date",
                    name: "date",
                    required: true,
                    value: date,
                }}

                handelOnChange= {handelOnChange}

                
                />
                <Col>

                <CustomInput
                label="Amount"
                

                inputAttributes={{
                    type: "number",
                    placeholder: "Enter transaction amount",
                    name:"amount",
                    required: true,
                    value: amount,
                }}
                handelOnChange= {handelOnChange}
                
                />
                </Col>
                <Row>
                    {
                        creating ? <Spinner animation="border"/> : <Button type="submit">Add Transaction</Button>
                    }
                </Row>
            </Row>
        </Form>
    )
}