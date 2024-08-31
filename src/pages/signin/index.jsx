import { useState } from "react";
import { Card, Form, Container } from "react-bootstrap";
import SButton from "../../components/Button";
import TextWithInputLabel from "../../components/TextInputWithLabel";
import axios from "axios";
impo;

export default function Signin() {
  // const [email,setEmail] = useState('')
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(res);
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };
  return (
    <Container>
      {error ? (
        <Alert variant={`danger`} className="mt-5">
          {error}
        </Alert>
      ) : (
        ""
      )}
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center fs-3">Form Login</Card.Title>
          <Form>
            <TextWithInputLabel
              label="Email"
              type="email"
              placeholder="Masukan email!"
              name="email"
              onChange={handleChange}
            />
            <TextWithInputLabel
              label="Password"
              type="password"
              placeholder="Masukan password!"
              name="password"
              onChange={handleChange}
            />

            <SButton action={handleSubmit}>Signin</SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
