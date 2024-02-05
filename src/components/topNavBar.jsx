import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// eslint-disable-next-line react/prop-types
const TopNavbar = ({userName})=> {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Transaction History</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{userName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;