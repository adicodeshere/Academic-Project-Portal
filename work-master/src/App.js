import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import StudentHome from "./Pages/StudentHome";
import TeacherHome from "./Pages/TeacherHome";
import AdminHome from "./Pages/AdminHome";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import AllocateProject from "./components/AllocateProject";
import GetAllStudent from "./components/GetAllStudent";
import GetAllTeachers from "./components/GetAllTeachers";
import GetAllProject from "./components/GetAllProject";
import AddSchedule from "./components/AddSchedule";
import Info from "./components/student/info";
import StudentProject from "./components/student/studentproject";
import Submitdocument from "./components/student/submitdocument";
import ProjectSchedule from "./components/ProjectSchedule";
import SubmitTitle from "./components/student/submitTitle";
import ViewProjects from "./components/teacher/GetAllProjects";
import MarkProject from "./components/teacher/MarkProject";
import TeacherInfo from "./components/teacher/info";
import Logout from "./components/logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/student" element={<StudentHome />}>
          <Route exact path="" element={<Info />} />
          <Route exact path="viewproject" element={<StudentProject />} />
          <Route exact path="submitdocument" element={<Submitdocument />} />
          <Route exact path="project-schedule" element={<ProjectSchedule />} />
          <Route exact path="submititle" element={<SubmitTitle />} />
          <Route exact path="logout" element={<Logout />} />
        </Route>
        <Route exact path="/admin" element={<AdminHome />}>
          <Route exact path="addstudent" element={<AddStudent />} />
          <Route exact path="addteacher" element={<AddTeacher />} />
          <Route exact path="allocateproject" element={<AllocateProject />} />
          <Route exact path="allstudents" element={<GetAllStudent />} />
          <Route exact path="allteachers" element={<GetAllTeachers />} />
          <Route exact path="allproject" element={<GetAllProject />} />
          <Route exact path="addschedule" element={<AddSchedule />} />
          <Route exact path="project-schedule" element={<ProjectSchedule />} />
          <Route exact path="logout" element={<Logout />} />
        </Route>
        <Route exact path="/teacher" element={<TeacherHome />}>
          <Route exact path="project-schedule" element={<ProjectSchedule />} />
          <Route exact path="" element={<TeacherInfo />} />
          <Route exact path="viewprojects" element={<ViewProjects />} />
          <Route exact path="markproject" element={<MarkProject />} />
          <Route exact path="logout" element={<Logout />} />
          {/*  */}
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
