import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../../constants/api.constants";
import CourseForm from "./CourseForm";
import { CourseApi } from "../../../api/CourseApi";
import { CourseModel } from "../../../models/CourseModel";

export const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<CourseModel>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    CourseApi.getCourseById(parseInt(id)).then((response) => {
      setCourse(response.data);
    });
  }, [id]);


  const handleCourseSave = (course: CourseModel) => {
    CourseApi.putCourse(course)
      .then(() => {
        navigate(PATHS.courses);
      }
      );
  };

  if (!course) return null;

  return (
    <CourseForm
      course={course}
      onCourseSave={handleCourseSave}
    />
  );
}
