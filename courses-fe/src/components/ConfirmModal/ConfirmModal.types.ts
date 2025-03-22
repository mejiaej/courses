export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
