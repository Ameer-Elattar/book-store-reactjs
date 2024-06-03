import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
export function CustomNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            {/* <NavLink className="nav-link" to="/counter">
              counter
            </NavLink> */}
            <NavLink className="nav-link" to="/books">
              Books
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
