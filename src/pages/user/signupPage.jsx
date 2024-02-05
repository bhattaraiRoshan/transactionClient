import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container, Stack} from "react-bootstrap";
import { SignupForm } from '../../components/signupForm';
import { Link } from 'react-router-dom';

export const SignupPage = () =>{

   return(
    <Container>

    <Row className='d-flex align-items-center justify-content-center vh-100'>

    <Col>
        <Stack className='shadow-lg border rounded p-4'>
            <h1>Join Our App!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track your Finance</p>
        </Stack>
    </Col>
    <Col>
    <Stack className='shadow-lg border rounded p-4'>
    <h1>Sign Up</h1>

    <SignupForm/>

    <p>Already have accout ? <Link to="/">Login</Link></p>

    </Stack>


        
    </Col>

  </Row>
  </Container>
   )
}

