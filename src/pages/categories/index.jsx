import { Container, Spinner, Table } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../configs";
import SButton from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getAllCategories = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setIsLoading(false);
      setDatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb textSecond={`Categories`} />
        <SButton
          className="mb-2"
          action={() => navigate("/categories/create")}
          size="sm"
        >
          New Categories
        </SButton>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>No</td>
              <td>Name Categories</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} className="text-center">
                  <Spinner animation="grow" />
                </td>
              </tr>
            ) : (
              datas.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>Button</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
