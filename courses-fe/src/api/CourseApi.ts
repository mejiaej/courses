import axios from "axios";
import { BASE_URL } from "../constants/api.constants";
import { CourseModel } from "../models/CourseModel";

export const CourseApi = {
  getCourses: () => {
    return axios.get(`${BASE_URL}/course`);
  },
  postStudent: (course: CourseModel) => {
    return axios.post(`${BASE_URL}/course`, course);
  },
  putCourse: (course: CourseModel) => {
    return axios.put(`${BASE_URL}/course/${course.id}`, course);
  },
  getCourseById: (courseId: number) => {
    return axios.get(`${BASE_URL}/course/${courseId}`);
  },
  deleteCourse: (courseId: number) => {
    return axios.delete(`${BASE_URL}/course/${courseId}`);
  },
};
