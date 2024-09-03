// dashboardLoader.js
import { Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import SBreadcrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";
import SButton from "../../components/Button";
import { useDispatch } from "react-redux";
import { user_logout } from "../../redux/auth/authSlice";

export default function Dashboard() {
  const token = localStorage.getItem("auth");

  if (!token) {
    return <Navigate to="/signin" />;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(user_logout());
    navigate("/signin");
  };
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb />
        <SButton action={handleLogout}>LOGOUT</SButton>
      </Container>
    </>
  );
}
