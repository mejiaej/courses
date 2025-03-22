import { useState } from "react";
import { Button } from "@mui/material";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import DeleteIcon from "@mui/icons-material/Delete";

export interface DeleteButtonModalProps {
  handleDelete: () => void;
  message: string;
}

const DeleteButtonModal = ({
  handleDelete,
  message,
}: DeleteButtonModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={openModal}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <ConfirmModal
        isOpen={isModalOpen}
        title="WARNING"
        message={message}
        onClose={closeModal}
        onClick={handleDelete}
      />
    </>
  );
};

export default DeleteButtonModal;
