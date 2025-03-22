import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentModel } from "../../../models/StudentModel";
import { StudentApi } from "../../../api/StudentApi";
import StudentForm from "./StudentForm";

export const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<StudentModel>();

  useEffect(() => {
    if (!id) return;

    StudentApi.getStudentById(parseInt(id)).then((response) => {
      setStudent(response.data);
    });
  }, [id]);


  const handleStudentSave = (student: StudentModel) => {
    console.log(student);
  };

  if (!student) return null;

  return (
    <StudentForm student={student} onStudentSave={handleStudentSave} />
  );
}
