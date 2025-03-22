import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Students from "./pages/Students/Students";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Courses/Course/Course";
import { PATHS } from "./constants/api.constants";
import { NewStudent } from "./pages/Students/Student/NewStudent";
import { EditStudent } from "./pages/Students/Student/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="*" element={<Navigate to={PATHS.students} />} />
          <Route path={PATHS.students} Component={Students} />
          <Route path={PATHS.editStudent} Component={EditStudent} />
          <Route path={PATHS.newStudent} Component={NewStudent} />
          <Route path={PATHS.courses} Component={Courses} />
          <Route path={PATHS.course} Component={Course} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
