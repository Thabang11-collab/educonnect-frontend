function StudentProfile() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Profile</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Manage your student information and verification settings.</p>
        <div className="mt-8 space-y-5">
          {[
            { label: 'Name', value: 'Ayesha Khumalo' },
            { label: 'Student Number', value: 'S212334' },
            { label: 'Course', value: 'Software Engineering' },
            { label: 'College', value: 'Western Business College' }
          ].map((item) => (
            <div key={item.label} className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Security Settings</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Your registration checks are based on the college verification database.</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm text-slate-500 dark:text-slate-400">Account Type</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Student</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm text-slate-500 dark:text-slate-400">Active Status</p>
            <p className="mt-2 text-lg font-semibold text-emerald-600 dark:text-emerald-400">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
