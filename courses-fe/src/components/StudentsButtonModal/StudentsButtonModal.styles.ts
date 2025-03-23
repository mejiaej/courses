import styled from "@emotion/styled";
import { Box, Button, Card } from "@mui/material";

export const StyledModalCard = styled(Card)`
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 400px;
  padding: 15px 30px;
  background-color: #fbfcfe;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledBoxButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const StyledButton = styled(Button)`
  width: 160px;
`;
