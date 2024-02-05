import { Form } from "react-bootstrap";

export const CustomInput = (props) =>{

    // eslint-disable-next-line react/prop-types
    const {label , inputAttributes, handelOnChange} = props;
    
    return(

        <Form.Group className="mb-3">
            <Form.Label className="fw-bold">{label}</Form.Label>
            <Form.Control {...inputAttributes} onChange={(e)=> handelOnChange(e)} />

        </Form.Group>


        
    )
}