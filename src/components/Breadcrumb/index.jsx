import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SBreadcrumb({ urlSecound, textSecond, textThird }) {
  const navigate = useNavigate();
  return (
    <Breadcrumb className="my-2">
      {!textSecond ? (
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item onClick={() => navigate("/dashboard")}>
          Home
        </Breadcrumb.Item>
      )}

      {textThird && (
        <Breadcrumb.Item onClick={() => navigate(urlSecound)}>
          {textSecond}
        </Breadcrumb.Item>
      )}

      {!textThird ? (
        <Breadcrumb.Item active>{textSecond}</Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item active>{textThird}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
