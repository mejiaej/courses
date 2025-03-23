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
import CoursesButtonModal from "../../../components/CoursesButtonModal/CoursesButtonModal";
import { useEffect, useState } from "react";
import { StyledBoxContainer } from "../../../components/StyledBoxContainer/StyledBoxContainer";
import { CourseApi } from "../../../api/CourseApi";
import { StudentModel } from "../../../models/StudentModel";
import { CourseModel } from "../../../models/CourseModel";

interface StudentFormProps {
  student: StudentModel;
  onStudentSave: (student: StudentModel) => void;
}

const StudentForm = (props: StudentFormProps) => {
  const [allCourses, setAllCourses] = useState<CourseModel[]>([]);
  const [student, setStudent] = useState<StudentModel>(props.student);


  useEffect(() => {
    CourseApi.getCourses().then((response) => {
      setAllCourses(response.data);
    });
  }, []);

  const handleCourseSelection = (selectedCourseId: number) => {
    const selectedCourse = allCourses.find((c) => c.id === selectedCourseId);
    if (selectedCourse) {
      setStudent((prev) => ({
        ...prev,
        courses: [...prev?.courses, selectedCourse],
      }));
    }
  };

  const handleRemoveCourse = (courseId: number | undefined) => {
    if (!courseId) return;

    setStudent((prev) => ({
      ...prev,
      courses: prev.courses.filter((course) => course.id !== courseId),
    }));
  };

  const handleStudentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudent((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const handleStudentLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudent((prev) => ({
      ...prev,
      lastName: event.target.value,
    }));
  };

  return (
    <StyledBoxContainer>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Student
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4, maxWidth: "600px" }}>
            <FormControl fullWidth>
              <TextField
                label="Name"
                variant="outlined"
                value={student.name}
                onChange={handleStudentNameChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Last Name"
                variant="outlined"
                value={student.lastName}
                onChange={handleStudentLastNameChange}
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6" color="textSecondary">
              Courses
            </Typography>
            <CoursesButtonModal onCourseSelected={handleCourseSelection} courses={allCourses} currentCourses={student.courses} />
          </Box>
          <List>
            {student.courses?.map((course, index) => (
              <ListItem key={index} divider>
                {`${course.code} - ${course.title}`}
                <IconButton edge="end" onClick={() => handleRemoveCourse(course.id)} sx={{ color: "red" }}>
                  <CancelIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={() => props.onStudentSave(student)}>
            Save
          </Button>
        </CardContent>
      </Card>
    </StyledBoxContainer>
  );
};

export default StudentForm;
