import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Students from "./pages/Students/Students";
import Courses from "./pages/Courses/Courses";
import Student from "./pages/Students/Student/Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="*" element={<Navigate to={"/students"} />} />
          <Route path={"/students"} Component={Students} />
          <Route path={"/student"} Component={Student} />
          <Route path={"/courses"} Component={Courses} />
          <Route path={"/course"} Component={Students} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
