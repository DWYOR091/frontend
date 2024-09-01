import Navlink from "../Navlink";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function SNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Semina</Navbar.Brand>
        <Nav className="me-auto">
          <Navlink href={`/dashboard`} nameLink={`Home`} />
          <Navlink href={`/categories`} nameLink={`Categories`} />
          <Navlink href={``} nameLink={`Home`} />
        </Nav>
      </Container>
    </Navbar>
  );
}
