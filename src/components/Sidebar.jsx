import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  HiCube,
  HiClipboardList,
  HiBell,
  HiCalendar,
  HiBookOpen,
  HiBriefcase,
  HiDownload,
  HiUser,
  HiChartBar,
  HiOutlineOfficeBuilding,
  HiUsers,
  HiAcademicCap,
  HiDocumentText,
  HiTemplate,
  HiCog
} from 'react-icons/hi';

const menus = {
  student: [
    { label: 'Dashboard', to: '/student', icon: HiCube },
    { label: 'Announcements', to: '/student/announcements', icon: HiBell },
    { label: 'Assignments', to: '/student/assignments', icon: HiClipboardList },
    { label: 'Tests', to: '/student/tests', icon: HiDocumentText },
    { label: 'Timetable', to: '/student/timetable', icon: HiCalendar },
    { label: 'Subject Scope', to: '/student/subject-scope', icon: HiBookOpen },
    { label: 'Internships', to: '/student/internships', icon: HiBriefcase },
    { label: 'Downloads', to: '/student/downloads', icon: HiDownload },
    { label: 'Profile', to: '/student/profile', icon: HiUser }
  ],
  lecturer: [
    { label: 'Dashboard', to: '/lecturer', icon: HiCube },
    { label: 'Create Announcement', to: '/lecturer/create-announcement', icon: HiBell },
    { label: 'Upload Assignment', to: '/lecturer/upload-assignment', icon: HiClipboardList },
    { label: 'Upload Timetable', to: '/lecturer/upload-timetable', icon: HiCalendar },
    { label: 'Upload Subject Scope', to: '/lecturer/upload-scope', icon: HiBookOpen },
    { label: 'Upload Exam Information', to: '/lecturer/upload-exam-info', icon: HiAcademicCap },
    { label: 'Upload Resources', to: '/lecturer/upload-resources', icon: HiDownload },
    { label: 'Profile', to: '/lecturer/profile', icon: HiUser }
  ],
  admin: [
    { label: 'Dashboard', to: '/admin', icon: HiChartBar },
    { label: 'Colleges', to: '/admin/manage-colleges', icon: HiOutlineOfficeBuilding },
    { label: 'Students', to: '/admin/manage-students', icon: HiUsers },
    { label: 'Lecturers', to: '/admin/manage-lecturers', icon: HiAcademicCap },
    { label: 'Courses', to: '/admin/manage-courses', icon: HiTemplate },
    { label: 'Reports', to: '/admin/reports', icon: HiDocumentText },
    { label: 'Settings', to: '/admin/settings', icon: HiCog }
  ]
};

function Sidebar({ role, isOpen, onClose }) {
  const items = menus[role] || [];

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`fixed inset-y-0 left-0 z-30 w-72 overflow-y-auto border-r border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950 md:static md:translate-x-0 md:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-soft">
          <HiCube className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">iPLUG YAMA CAMPUS</p>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Portal Menu</h2>
        </div>
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'}`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </motion.aside>
  );
}

export default Sidebar;
