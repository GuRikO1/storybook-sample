import "./buttons.css";
import { Button, ButtonProps } from "../button/Button";

interface ButtonsProps {
  size?: "small" | "medium" | "large";
  buttons: ButtonProps[];
}

const exampleButtons: ButtonProps[] = [
  {
    type: "primary",
    label: "Button",
  },
  {
    type: "secondary",
    label: "Button",
  },
  {
    type: "danger",
    label: "Button",
  },
];

const Buttons = ({
  size = "medium",
  buttons = exampleButtons,
  ...props
}: ButtonsProps) => {
  return (
    <div className={["buttons", `buttons-${size}`].join(" ")}>
      {buttons.map((button) => {
        return (
          <Button
            type={button.type}
            size={size}
            label={button.label}
            disabled={button.disabled}
            {...props}
          />
        );
      })}
    </div>
  );
};

export { Buttons, exampleButtons };
export type { ButtonsProps };
