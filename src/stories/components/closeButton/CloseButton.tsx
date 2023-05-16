import "./close-button.css";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({
  onClick = () => {},
}: CloseButtonProps) => {
  return <div className="close-button">×</div>;
};

export default CloseButton;
