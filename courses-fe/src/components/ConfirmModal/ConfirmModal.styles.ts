import styled from "@emotion/styled";
import { Box, Button, Card } from "@mui/material";

export const StyledModalCard = styled(Card)`
  width: 450px;
  height: 220px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 10px;
`;

export const StyledButton = styled(Button)`
  width: 160px;
`;

export const StyledBoxContainer = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBoxButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;
