function Settings() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Settings</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Adjust system preferences and multi-college portal defaults.</p>
        <div className="mt-8 space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Portal Theme</p>
            <p className="mt-2 text-slate-900 dark:text-slate-100">Light / Dark mode support for admin users.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">College Settings</p>
            <p className="mt-2 text-slate-900 dark:text-slate-100">Manage defaults for new college provisioning and verification.</p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">System Notifications</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Configure alert preferences for system events and user actions.</p>
        <div className="mt-6 space-y-4">
          {['Verification Alerts', 'New Registration Alerts', 'System Health Updates'].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-900 dark:text-slate-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
