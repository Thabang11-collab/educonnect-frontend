function Reports() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Reports</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Review activity summaries and administrative performance dashboards.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">User Engagement</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Track active users, logins, and portal access across campuses.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Verification Reports</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Monitor student and lecturer verification requests and approvals.</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
