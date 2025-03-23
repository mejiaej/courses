import { StudentModel } from "../../models/StudentModel";

export interface StudentsButtonModalProps {
  onStudentSelected: (courseId: number) => void;
  students: StudentModel[];
  currentStudents: StudentModel[];
}
