import logo from "../logo.svg"
import { Navbar, Container, Nav } from "solid-bootstrap";
export default function MainMenu(props) 
  {
    return ( 
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img alt="logo.svg" src={logo} width="30" height="30"/>
              <span class="mx-2">NUU-102IEA0016-Exercise-U0924043</span>
            </Navbar.Brand>
          </Container>
          <Nav className="me-auto">
            <Nav.Link href="/        ">Home    </Nav.Link>
            <Nav.Link href="/Dog     ">Dog     </Nav.Link>
            <Nav.Link href="/Features">Features</Nav.Link>
            <Nav.Link href="/AboutUs ">AboutUs </Nav.Link>
          </Nav>
        </Navbar>
      );
  }