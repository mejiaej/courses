import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../constants/api.constants";
import CourseForm from "./CourseForm";
import { CourseModel } from "../../../models/CourseModel";
import { CourseApi } from "../../../api/CourseApi";

const newCourse: CourseModel = {
  title: "",
  description: "",
  students: [],
}

export const NewCourse = () => {
  const navigate = useNavigate();

  const handleCourseSave = (course: CourseModel) => {
    CourseApi.postStudent(course)
      .then(() => {
        navigate(PATHS.courses);
      }
      );
  };

  return (
    <CourseForm
      course={newCourse}
      onCourseSave={handleCourseSave}
    />
  );
}
