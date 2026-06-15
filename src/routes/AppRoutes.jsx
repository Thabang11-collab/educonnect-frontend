import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/Public/Home';
import About from '../pages/Public/About';
import Contact from '../pages/Public/Contact';
import StudentLogin from '../pages/Public/StudentLogin';
import StudentRegister from '../pages/Public/StudentRegister';
import LecturerLogin from '../pages/Public/LecturerLogin';
import LecturerRegister from '../pages/Public/LecturerRegister';
import StudentDashboard from '../pages/Student/StudentDashboard';
import Announcements from '../pages/Student/Announcements';
import Assignments from '../pages/Student/Assignments';
import Tests from '../pages/Student/Tests';
import Timetable from '../pages/Student/Timetable';
import SubjectScope from '../pages/Student/SubjectScope';
import Internships from '../pages/Student/Internships';
import Downloads from '../pages/Student/Downloads';
import StudentProfile from '../pages/Student/StudentProfile';
import LecturerDashboard from '../pages/Lecturer/LecturerDashboard';
import CreateAnnouncement from '../pages/Lecturer/CreateAnnouncement';
import UploadAssignment from '../pages/Lecturer/UploadAssignment';
import UploadTimetable from '../pages/Lecturer/UploadTimetable';
import UploadScope from '../pages/Lecturer/UploadScope';
import UploadExamInfo from '../pages/Lecturer/UploadExamInfo';
import UploadResources from '../pages/Lecturer/UploadResources';
import LecturerProfile from '../pages/Lecturer/LecturerProfile';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import ManageStudents from '../pages/Admin/ManageStudents';
import ManageLecturers from '../pages/Admin/ManageLecturers';
import ManageCourses from '../pages/Admin/ManageCourses';
import ManageColleges from '../pages/Admin/ManageColleges';
import Reports from '../pages/Admin/Reports';
import Settings from '../pages/Admin/Settings';

function AppRoutes({ darkMode, setDarkMode }) {
  return (
    <Routes>
      <Route element={<PublicLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/lecturer-login" element={<LecturerLogin />} />
        <Route path="/lecturer-register" element={<LecturerRegister />} />
      </Route>

      <Route path="/student" element={<DashboardLayout role="student" setDarkMode={setDarkMode} darkMode={darkMode} />}>
        <Route index element={<StudentDashboard />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="tests" element={<Tests />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="subject-scope" element={<SubjectScope />} />
        <Route path="internships" element={<Internships />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      <Route path="/lecturer" element={<DashboardLayout role="lecturer" setDarkMode={setDarkMode} darkMode={darkMode} />}>
        <Route index element={<LecturerDashboard />} />
        <Route path="create-announcement" element={<CreateAnnouncement />} />
        <Route path="upload-assignment" element={<UploadAssignment />} />
        <Route path="upload-timetable" element={<UploadTimetable />} />
        <Route path="upload-scope" element={<UploadScope />} />
        <Route path="upload-exam-info" element={<UploadExamInfo />} />
        <Route path="upload-resources" element={<UploadResources />} />
        <Route path="profile" element={<LecturerProfile />} />
      </Route>

      <Route path="/admin" element={<DashboardLayout role="admin" setDarkMode={setDarkMode} darkMode={darkMode} />}>
        <Route index element={<AdminDashboard />} />
        <Route path="manage-students" element={<ManageStudents />} />
        <Route path="manage-lecturers" element={<ManageLecturers />} />
        <Route path="manage-courses" element={<ManageCourses />} />
        <Route path="manage-colleges" element={<ManageColleges />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
