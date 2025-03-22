import { StudentModel } from "../../../models/StudentModel";
import StudentForm from "./StudentForm";

const newStudent = {
  id: 0,
  name: "",
  lastName: "",
  courses: [],
}

export const NewStudent = () => {

  const handleStudentSave = (student: StudentModel) => {
    console.log(student);
  };

  return (
    <div>
      <h1>New Student</h1>
      <StudentForm
        student={newStudent}
        onStudentSave={handleStudentSave}
      />
    </div>
  );
}
