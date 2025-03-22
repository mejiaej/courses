import { CourseModel } from "../../models/CourseModel";

export interface CoursesButtonModalProps {
  onCourseSelected: (courseId: number) => void;
  courses: CourseModel[];
  currentCourses: CourseModel[];
}
