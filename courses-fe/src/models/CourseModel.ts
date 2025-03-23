import { StudentModel } from "./StudentModel";

export interface CourseModel {
  id?: number;
  title: string;
  description: string;
  students: StudentModel[];
}
  