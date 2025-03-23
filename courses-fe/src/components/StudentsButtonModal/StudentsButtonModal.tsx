import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal as MuiModal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  StyledBoxButtonContainer,
  StyledButton,
  StyledModalCard,
} from "./StudentsButtonModal.styles";
import { useState } from "react";
import { StudentsButtonModalProps } from "./StudentsButtonModal.types";

const StudentsButtonModal = ({
  onStudentSelected,
  students,
  currentStudents,
}: StudentsButtonModalProps) => {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const value = event?.target?.value;
    setSelectedStudent(value);
  };

  const handleSave = () => {
    onStudentSelected(parseInt(selectedStudent));
    setSelectedStudent("");
    setOpen(false);
  };

  const availableStudents = students.filter(
    (student) => !currentStudents?.some((currentStudent) => currentStudent.id === student.id)
  );

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={() => setOpen(true)} sx={{ color: "blue" }}>
          <AddIcon />
        </IconButton>
      </Box>
      <MuiModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalCard>
          <Typography variant="h6" component="h2">
            Available Students
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormControl fullWidth sx={{ marginTop: 4 }}>
              <InputLabel id="student-label">Select a student</InputLabel>
              <Select
                value={selectedStudent}
                fullWidth
                label="Select a student"
                onChange={handleChange}
              >
                {availableStudents.map((student) => (
                  <MenuItem key={student.id} value={student.id}>
                    {`${student.name} ${student.lastName}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <StyledBoxButtonContainer>
            <StyledButton
              variant="contained"
              type="button"
              onClick={handleSave}
              color="secondary"
              disabled={!selectedStudent}
            >
              Add
            </StyledButton>
            <StyledButton
              variant="contained"
              type="button"
              onClick={() => setOpen(false)}
              color="primary"
            >
              Cancel
            </StyledButton>
          </StyledBoxButtonContainer>
        </StyledModalCard>
      </MuiModal>
    </>
  );
};

export default StudentsButtonModal;
