import { useNavigate } from "react-router-dom";
import { StudentApi } from "../../../api/StudentApi";
import { StudentModel } from "../../../models/StudentModel";
import StudentForm from "./StudentForm";
import { PATHS } from "../../../constants/api.constants";

const newStudent = {
  name: "",
  lastName: "",
  courses: [],
}

export const NewStudent = () => {
  const navigate = useNavigate();

  const handleStudentSave = (student: StudentModel) => {
    StudentApi.postStudent(student)
      .then(() => {
        navigate(PATHS.students);
      }
      );
  };

  return (
    <StudentForm
      student={newStudent}
      onStudentSave={handleStudentSave}
    />
  );
}
