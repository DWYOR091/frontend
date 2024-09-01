import { Alert } from "react-bootstrap";

export default function SAlert(props) {
  const { variant, className, message, style } = props;
  return (
    <Alert variant={variant} className={className} style={style}>
      {message}
    </Alert>
  );
}
