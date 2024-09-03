import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import SAlert from "../../components/Alert";
import { config } from "../../configs";
import SForm from "./Form";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user_login } from "../../redux/auth/authSlice";

export default function Signin() {
  // const [email,setEmail] = useState('')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = localStorage.getItem("auth");
  if (token) return <Navigate to={`/dashboard`} />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        form
      );
      console.log(res);
      dispatch(
        user_login({ token: res.data.data.token, role: res.data.data.role })
      );

      setIsLoading(false);

      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: error.response.data.msg,
        type: "danger",
      });
    }
  };

  return (
    <Container>
      {alert.status && (
        <SAlert
          variant={alert.type}
          style={{ width: "50%" }}
          className={`mx-auto mt-5 text-center`}
          message={alert.message}
        />
      )}
      <Card style={{ width: "50%" }} className="m-auto mt-4">
        <Card.Body>
          <Card.Title className="text-center fs-3">Form Login</Card.Title>
          <SForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            form={form}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
