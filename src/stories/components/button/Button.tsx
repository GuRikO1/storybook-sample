import "./button.css";

interface ButtonProps {
  type?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  size = "medium",
  label = "Button",
  disabled = false,
  onClick = () => {},
  ...props
}: ButtonProps) => {
  let classes = ["button", `button-${type}`, `button-${size}`];
  if (disabled) {
    classes.push("button-disabled");
  }
  return (
    <button className={classes.join(" ")} {...props}>
      {label}
    </button>
  );
};

export { Button };
export type { ButtonProps };

