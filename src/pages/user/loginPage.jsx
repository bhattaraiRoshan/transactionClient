import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container, Stack} from "react-bootstrap";
import { LoginForm } from '../../components/loginForm';
import { Link } from 'react-router-dom';

export const LoginPage = () =>{
    return(
        <Container>

        <Row className='d-flex align-items-center justify-content-center vh-100'>

    <Col>
        <Stack className='shadow-lg border rounded p-4'>
            <h1>Welcome Back</h1>
            <p>Manage your income and expenses</p>
            <p>Track your Finance</p>
        </Stack>
    </Col>
    <Col>
    <Stack className='shadow-lg border rounded p-4'>
    <h1>Login</h1>
    <LoginForm/>

    <p>Don&apos;t have account ? <Link to="/signup">Sing Up</Link></p>

    </Stack>


        
    </Col>

  </Row>
  </Container>


    )
}