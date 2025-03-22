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
} from "./CoursesButtonModal.styles";
import { useState } from "react";
import { CoursesButtonModalProps } from "./CoursesButtonModal.types";

const CoursesButtonModal = ({
  onCourseSelected,
  courses,
  currentCourses,
}: CoursesButtonModalProps) => {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const value = event?.target?.value;
    setSelectedCourse(value);
  };

  const handleSave = () => {
    onCourseSelected(parseInt(selectedCourse));
    setSelectedCourse("");
    setOpen(false);
  };

  const availableCourses = courses.filter(
    (course) => !currentCourses.some((sc) => sc.id === course.id)
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
                {availableCourses.map((course, index) => (
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
              onClick={handleSave}
              color="secondary"
              disabled={!selectedCourse}
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

export default CoursesButtonModal;
