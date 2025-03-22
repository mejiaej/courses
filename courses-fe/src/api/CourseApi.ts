import axios from "axios";
import { BASE_URL } from "../constants/api.constants";

export const CourseApi = {
  getCourses: () => {
    return axios.get(`${BASE_URL}/course`);
  },
  deleteCourse: (courseId: number) => {
    return axios.delete(`${BASE_URL}/course/${courseId}`);
  },
};
