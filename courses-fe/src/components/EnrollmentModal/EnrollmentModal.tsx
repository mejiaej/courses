import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal as MuiModal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import {
  StyledBoxButtonContainer,
  StyledButton,
  StyledModalCard,
} from "./EnrollmentModal.styles";
import { useState } from "react";

export interface EnrollmentModalProps {
  open: boolean;
  onClose: () => void;
  onCourseSelected: (courseId: number) => void;
}

const courses = [
  {
    id: 1,
    title: "Curso de React",
    description: "Curso de React",
  },
  {
    id: 2,
    title: "Curso de Angular",
    description: "Curso de Angular",
  },
  {
    id: 3,
    title: "Curso de Vue",
    description: "Curso de Vue",
  },
];

const EnrollmentModal = ({
  open,
  onClose,
  onCourseSelected: onSubmit,
}: EnrollmentModalProps) => {
  const [selectedCourse, setSelectedCourse] = useState("0");

  const handleChange = (event: SelectChangeEvent) => {
    const value = event?.target?.value;
    setSelectedCourse(value);
  };
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModalCard>
        <Typography variant="h6" component="h2">
          Cursos Disponibles
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <FormControl fullWidth sx={{ marginTop: 4 }}>
            <InputLabel id="course-label">Select a course</InputLabel>
            <Select
              value={selectedCourse}
              fullWidth
              label="Select a course"
              onChange={handleChange}
            >
              {courses.map((course, index) => (
                <MenuItem key={index} value={course.id}>
                  {course.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
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
            onClick={() => onSubmit(parseInt(selectedCourse))}
            color="secondary"
          >
            Save
          </StyledButton>
        </StyledBoxButtonContainer>
      </StyledModalCard>
    </MuiModal>
  );
};

export default EnrollmentModal;
