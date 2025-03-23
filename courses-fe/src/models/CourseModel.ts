import { StudentModel } from "./StudentModel";

export interface CourseModel {
  id?: number;
  title: string;
  code: string;
  description: string;
  students: StudentModel[];
}
  