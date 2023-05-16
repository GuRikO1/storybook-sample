import "./modal.css";
import CloseButton from "../closeButton/CloseButton";
import { Buttons, ButtonsProps } from "../buttons/Buttons";

interface ModalContents {
  message: string;
  buttons: ButtonsProps;
}

const answerButtons: ButtonsProps =  {
  size: "medium",
  buttons: [
    {
      type: "secondary",
      label: "No",
    },
    {
      type: "primary",
      label: "Yes",
    },
  ]
};

const Modal = ({
  message = "Do you have any questions?",
  buttons = answerButtons,
  ...props
}: ModalContents) => {
  return (
    <div className="modal-inner">
      <div className="modal-header">
        <CloseButton
          onClick={() => {}}
        />
      </div>
      <div className="modal-contents">
        <div className="modal-message">
          {message}
        </div>
        <div className="modal-footer">
          <Buttons
            size={buttons.size}
            buttons={buttons.buttons}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export { Modal, answerButtons };
