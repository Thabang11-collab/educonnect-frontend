import { motion } from 'framer-motion';
import { HiBell, HiClipboardList, HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import DashboardCard from '../../components/DashboardCard';
import AnnouncementCard from '../../components/AnnouncementCard';

function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Upcoming Assignments" value="4" description="Due this week" icon={<HiClipboardList className="h-6 w-6" />} />
        <DashboardCard title="Upcoming Tests" value="2" description="Next scheduled exams" icon={<HiAcademicCap className="h-6 w-6" />} />
        <DashboardCard title="New Announcements" value="6" description="Unread messages" icon={<HiBell className="h-6 w-6" />} />
        <DashboardCard title="Internship Opportunities" value="8" description="Current openings" icon={<HiBriefcase className="h-6 w-6" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent Announcements</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Latest updates from your colleges and lecturers.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <AnnouncementCard title="Campus Orientation" description="New semester orientation on Monday at 9 AM." date="2 hours ago" author="Registrar" />
              <AnnouncementCard title="Assignment Update" description="Project 2 deadlines have been extended by two days." date="Yesterday" author="Course Coordinator" />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Quick Access</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Announcements', 'Assignments', 'Timetable', 'Downloads'].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Next Classes</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Your next lectures and lab sessions for today.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Data Structures</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">10:00 AM - Lecture Hall A</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Professional Practice</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">1:30 PM - Zoom Classroom</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Notifications</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Library Access</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Your e-library requests have been approved.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Career Fair</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Register for the campus career fair by Friday.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
