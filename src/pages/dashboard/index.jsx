// dashboardLoader.js
import { Container, Nav, Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadcrumb from "../../components/Breadcrumb";
import Navlink from "../../components/Navlink";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={`/signin`} />;
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Semina</Navbar.Brand>
          <Nav className="me-auto">
            <Navlink href={``} nameLink={`Home`} />
            <Navlink href={``} nameLink={`Categories`} />
            <Navlink href={``} nameLink={`Home`} />
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <SBreadcrumb />
      </Container>
    </>
  );
}
