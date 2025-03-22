import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { StyledBoxContainer } from "../Students.styles";
import EnrollmentModal from "../../../components/EnrollmentModal/EnrollmentModal";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const student = {
  id: 1,
  name: "Student",
  lastName: "Student",
  courses: [
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
  ],
};

const Student = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBoxContainer>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {student.name} {student.lastName}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, my: 4 }}>
            <FormControl fullWidth>
              <TextField label="Student Name" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Student Last Name" variant="outlined" />
            </FormControl>
          </Box>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            startIcon={<AddIcon />}
          >
            Enrollment Student
          </Button>
          <Typography variant="h6" color="textSecondary">
            Cursos asignados
          </Typography>
          <List>
            {student.courses.map((course, index) => (
              <ListItem key={index} divider>
                {course.title}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <EnrollmentModal
        open={open}
        onClose={() => setOpen(false)}
        onCourseSelected={() => {
          console.log("submit");
        }}
      />
    </StyledBoxContainer>
  );
};

export default Student;
