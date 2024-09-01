import { Button } from "react-bootstrap";

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
      {loading ? "loading..." : children}
    </Button>
  );
};

export default SButton;
