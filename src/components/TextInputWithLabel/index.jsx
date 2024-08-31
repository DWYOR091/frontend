import { Form } from "react-bootstrap";

export default function TextInputWithLabel(props) {
  const { label, type, name, value, placeholder, onChange } = props;
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
}
