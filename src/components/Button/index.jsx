import { Button, Spinner } from "react-bootstrap";

const SButton = (props) => {
  const {
    children = "button",
    variant = "primary",
    size,
    action,
    loading,
    disabled,
    className,
  } = props;
  return (
    <Button
      variant={variant}
      onClick={action}
      size={size}
      className={className}
      disabled={disabled}
    >
      {loading ? (
        <div>
          <Spinner animation="border" size="sm" /> Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SButton;
