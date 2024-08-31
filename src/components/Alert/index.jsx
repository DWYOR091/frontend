import { Alert } from "react-bootstrap";

export default function SAlert(props) {
  const { variant, className, children } = props;
  return (
    <Alert variant={variant} className={className}>
      {children}
    </Alert>
  );
}
