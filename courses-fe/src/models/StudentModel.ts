import { CourseModel } from "./CourseModel";

export interface StudentModel {
  id?: number;
  name: string;
  lastName: string;
  courses: CourseModel[];
}
