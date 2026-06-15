import { HiAcademicCap, HiUsers, HiBell, HiDocumentText } from 'react-icons/hi';
import DashboardCard from '../../components/DashboardCard';
import AnnouncementCard from '../../components/AnnouncementCard';

function LecturerDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Total Students" value="520" description="Across your modules" icon={<HiUsers className="h-6 w-6" />} />
        <DashboardCard title="Active Courses" value="12" description="Teaching this term" icon={<HiAcademicCap className="h-6 w-6" />} />
        <DashboardCard title="Announcements Posted" value="18" description="Recent updates" icon={<HiBell className="h-6 w-6" />} />
        <DashboardCard title="Resources Uploaded" value="34" description="Lesson materials" icon={<HiDocumentText className="h-6 w-6" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Pending Tasks</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Assignment Approval</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Review student submissions for module B.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Upload Timetable</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Publish the next week's lecture schedule.</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Latest Announcement</h2>
            <AnnouncementCard
              title="Course Evaluation"
              description="Please remind students to submit their evaluations this week."
              date="Today"
              author="Academic Office"
            />
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Quick Actions</h2>
          <div className="mt-6 space-y-4">
            {['Create Announcement', 'Upload Assignment', 'Upload Resources', 'Manage Timetable'].map((action) => (
              <div key={action} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">{action}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerDashboard;
