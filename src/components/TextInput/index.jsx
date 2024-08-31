import Form from "react-bootstrap/Form";
export default function TextInput(props) {
  const { type, name, placeholder, value, onChange } = props;
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
