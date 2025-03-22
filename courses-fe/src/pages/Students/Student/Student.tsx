import {
  Box,
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

const Student = () => {
  const [courses, setCourses ] = useState<CourseModel[]>([]);
  const [student, setStudent] = useState<StudentModel>({
    id: 0,
    name: "",
    lastName: "",
    courses: [],
  });

  useEffect(() => {
    CourseApi.getCourses().then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleCourseSelection = (selectedCourseId: number) => {
    const selectedCourse = courses.find((c) => c.id === selectedCourseId);
    if (selectedCourse) {
      setStudent((prev) => ({
        ...prev,
        courses: [...prev.courses, selectedCourse],
      }));
    }
  };

  const handleRemoveCourse = (courseId: number) => {
    setStudent((prev) => ({
      ...prev,
      courses: prev.courses.filter((course) => course.id !== courseId),
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
              <TextField label="Name" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField label="Last Name" variant="outlined" />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6" color="textSecondary">
              Courses
            </Typography>
            <CoursesButtonModal onCourseSelected={handleCourseSelection} courses={courses} currentCourses={student.courses} />
          </Box>
          <List>
            {student.courses.map((course, index) => (
              <ListItem key={index} divider>
                {course.title}
                <IconButton edge="end" onClick={() => handleRemoveCourse(course.id)} sx={{ color: "red" }}>
                  <CancelIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </StyledBoxContainer>
  );
};

export default Student;
