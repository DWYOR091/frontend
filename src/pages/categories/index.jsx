import { Container } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";

export default function Categories() {
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb textSecond={`categories`} />
      </Container>
    </>
  );
}
