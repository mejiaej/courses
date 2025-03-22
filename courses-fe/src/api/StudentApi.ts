import axios from "axios";
import { BASE_URL } from "../constants/api.constants";

export const StudentApi = {
  getStudents: () => {
    return axios.get(`${BASE_URL}/student`);
  },
  getStudentById: (studentId: number) => {
    return axios.get(`${BASE_URL}/student/${studentId}`);
  },
  deleteStudent: (studentId: number) => {
    return axios.delete(`${BASE_URL}/student/${studentId}`);
  },
};
