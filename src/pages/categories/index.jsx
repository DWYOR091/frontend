import { Container, Nav, Navbar } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import Navlink from "../../components/Navlink";

export default function Categories() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Semina</Navbar.Brand>
          <Nav className="me-auto">
            <Navlink href={``} nameLink={`Home`} />
            <Navlink href={`/categories`} nameLink={`Categories`} />
            <Navlink href={``} nameLink={`Home`} />
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <SBreadcrumb textSecond={`categories`} textThird={"hoho"} />
      </Container>
    </>
  );
}
