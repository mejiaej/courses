import { Modal, Typography } from "@mui/material";
import {
  StyledBoxButtonContainer,
  StyledBoxContainer,
  StyledButton,
  StyledModalCard,
} from "./ConfirmModal.styles";
import { ConfirmModalProps } from "./ConfirmModal.types";

const ConfirmModal = ({
  isOpen = false,
  title,
  message,
  onClose,
  onClick,
}: ConfirmModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <StyledModalCard>
        <StyledBoxContainer>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography gutterBottom>{message}</Typography>
          <StyledBoxButtonContainer>
            <StyledButton
              variant="contained"
              type="button"
              onClick={onClose}
              color="primary"
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="contained"
              type="button"
              onClick={(e) => {
                onClick(e);
                onClose();
              }}
              color="error"
            >
              Delete
            </StyledButton>
          </StyledBoxButtonContainer>
        </StyledBoxContainer>
      </StyledModalCard>
    </Modal>
  );
};

export default ConfirmModal;
