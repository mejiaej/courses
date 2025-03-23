import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StudentModel } from "../../../models/StudentModel";
import { StudentApi } from "../../../api/StudentApi";
import StudentForm from "./StudentForm";
import { PATHS } from "../../../constants/api.constants";

export const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<StudentModel>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    StudentApi.getStudentById(parseInt(id)).then((response) => {
      setStudent(response.data);
    });
  }, [id]);


  const handleStudentSave = (student: StudentModel) => {
    StudentApi.putStudent(student)
      .then(() => {
        navigate(PATHS.students);
      }
      );
  };

  if (!student) return null;

  return (
    <StudentForm
      student={student}
      onStudentSave={handleStudentSave}
    />
  );
}
