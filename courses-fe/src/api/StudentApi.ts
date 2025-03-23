import axios from "axios";
import { BASE_URL } from "../constants/api.constants";
import { StudentModel } from "../models/StudentModel";

export const StudentApi = {
  getStudents: () => {
    return axios.get(`${BASE_URL}/student`);
  },
  postStudent: (student: StudentModel) => {
    return axios.post(`${BASE_URL}/student`, student);
  },
  getStudentById: (studentId: number) => {
    return axios.get(`${BASE_URL}/student/${studentId}`);
  },
  deleteStudent: (studentId: number) => {
    return axios.delete(`${BASE_URL}/student/${studentId}`);
  },
};
