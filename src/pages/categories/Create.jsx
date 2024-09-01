import React from "react";
import SNavbar from "../../components/Navbar";
import SBreadcrumb from "../../components/Breadcrumb";
import { Container } from "react-bootstrap";

export default function CreateCategories() {
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb
          urlSecound={`/categories`}
          textSecond={`Categories`}
          textThird={`create`}
        />
      </Container>
    </>
  );
}
