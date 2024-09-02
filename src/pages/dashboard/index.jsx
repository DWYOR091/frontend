// dashboardLoader.js
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadcrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={`/signin`} />;
  }
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb />
      </Container>
    </>
  );
}
