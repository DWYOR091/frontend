import React, { useState } from "react";
import SNavbar from "../../components/Navbar";
import SBreadcrumb from "../../components/Breadcrumb";
import { Container } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import axios from "axios";
import { config } from "../../configs";
import { useNavigate } from "react-router-dom";

export default function CreateCategories() {
  const [form, setForm] = useState({
    name: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await axios.post(`${config.api_host_dev}/cms/categories`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/categories");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb
          urlSecound={`/categories`}
          textSecond={`Categories`}
          textThird={`create`}
        />
        <TextInputWithLabel
          label="Name"
          type="text"
          placeholder="Masukan name categories"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <SButton variant="success" loading={isLoading} action={handleSubmit}>
          Simpan
        </SButton>
      </Container>
    </>
  );
}
