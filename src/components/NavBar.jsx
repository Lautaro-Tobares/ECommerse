import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return  ( 
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">B'Oreal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link to="/category/homme" as={NavLink}>Homme</Nav.Link>
            <Nav.Link to="/category/fem" as={NavLink}>Fem</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
   </>
);
 };