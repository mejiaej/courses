import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { StyledBoxContainer } from "../../../components/StyledBoxContainer/StyledBoxContainer";
import StudentsButtonModal from "../../../components/StudentsButtonModal/StudentsButtonModal";
import { useEffect, useState } from "react";
import { StudentModel } from "../../../models/StudentModel";
import { CourseModel } from "../../../models/CourseModel";
import { StudentApi } from "../../../api/StudentApi";

interface CourseFormProps {
  course: CourseModel;
  onCourseSave: (student: CourseModel) => void;
}

const CourseForm = (props: CourseFormProps) => {
  const [allStudents, setAllStudents] = useState<StudentModel[]>([]);
  const [course, setCourse] = useState<CourseModel>(props.course);

  useEffect(() => {
    StudentApi.getStudents().then((response) => {
      setAllStudents(response.data);
    });
  }, []);


  const handleStudentSelection = (selectedCourseId: number) => {
    const selectedStudent = allStudents.find((student) => student.id === selectedCourseId);

    if (selectedStudent) {
      setCourse((prev) => ({
        ...prev,
        students: [...prev.students, selectedStudent],
      }));
    }
  };

  const handleCourseTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setCourse((prev) => ({
      ...prev,
      title: newTitle,
    }));
  };

  const handleCourseDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setCourse((prev) => ({
      ...prev,
      description: newDescription,
    }));
  };

  const handleCourseCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = event.target.value;
    setCourse((prev) => ({
      ...prev,
      code: newCode,
    }));
  };

  const handleRemoveStudent = (studentId: number | undefined) => {
    if (!studentId) return;

    setCourse((prev) => ({
      ...prev,
      students: prev.students.filter((student) => student.id !== studentId),
    }));
  };


  return (
    <StyledBoxContainer>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Course
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4, maxWidth: "600px" }}>
          <FormControl fullWidth>
              <TextField label="Code" variant="outlined" value={course.code} onChange={handleCourseCodeChange} />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Title" variant="outlined" value={course.title} onChange={handleCourseTitleChange} />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Description" variant="outlined" value={course.description} onChange={handleCourseDescriptionChange} />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6" color="textSecondary">
              Students
            </Typography>
            <StudentsButtonModal
              onStudentSelected={handleStudentSelection}
              students={allStudents}
              currentStudents={course.students} />
          </Box>
          <List>
            {course.students.map((student, index) => (
              <ListItem key={index} divider>
                {`${student.name} ${student.lastName}`}
                <IconButton edge="end" onClick={() => handleRemoveStudent(student.id)} sx={{ color: "red" }}>
                  <CancelIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={() => props.onCourseSave(course)}>
            Save
          </Button>
        </CardContent>
      </Card>
    </StyledBoxContainer>
  );
};

export default CourseForm;
