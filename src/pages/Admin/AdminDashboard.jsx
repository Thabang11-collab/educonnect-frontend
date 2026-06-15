import DashboardCard from '../../components/DashboardCard';
import { HiOutlineOfficeBuilding, HiUsers, HiAcademicCap, HiChartBar } from 'react-icons/hi';

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Total Colleges" value="15" description="Multi-college network" icon={<HiOutlineOfficeBuilding className="h-6 w-6" />} />
        <DashboardCard title="Total Students" value="12,000" description="Portal users" icon={<HiUsers className="h-6 w-6" />} />
        <DashboardCard title="Total Lecturers" value="450" description="Faculty accounts" icon={<HiAcademicCap className="h-6 w-6" />} />
        <DashboardCard title="Active Users" value="3,200" description="Online now" icon={<HiChartBar className="h-6 w-6" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">College Growth</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Overview of college adoption and platform usage.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Multi-College Support', 'Verification Engine', 'Real-time Alerts', 'Student Engagement'].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Summary</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Admin tools are designed to scale from one college to nationwide education networks.</p>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-primary/5 p-4 text-sm text-primary">Set up verified colleges and keep all student records secure.</div>
            <div className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">Manage lecturers, courses, and reports in a unified admin console.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
