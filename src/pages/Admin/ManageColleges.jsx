const colleges = [
  { name: 'Western Business College', code: 'WBC', province: 'Gauteng', students: 2800, lecturers: 85, status: 'Active' },
  { name: 'Coastal Tech Institute', code: 'CTI', province: 'Western Cape', students: 1740, lecturers: 58, status: 'Active' },
  { name: 'Northern Arts University', code: 'NAU', province: 'Limpopo', students: 1140, lecturers: 39, status: 'Pending' }
];

function ManageColleges() {
  return (
    <div className="space-y-8">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Manage Colleges</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Review colleges, edit details, or add a new college to the network.</p>
      </div>
      <div className="card overflow-x-auto p-6">
        <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-300">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">College Name</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">College Code</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Province</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Students</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Lecturers</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Status</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {colleges.map((college) => (
              <tr key={college.code}>
                <td className="whitespace-nowrap px-4 py-4">{college.name}</td>
                <td className="whitespace-nowrap px-4 py-4">{college.code}</td>
                <td className="whitespace-nowrap px-4 py-4">{college.province}</td>
                <td className="whitespace-nowrap px-4 py-4">{college.students}</td>
                <td className="whitespace-nowrap px-4 py-4">{college.lecturers}</td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${college.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {college.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-primary">View · Edit · Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Add College</h2>
        <form className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">College Name</label>
            <input type="text" placeholder="College name" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">College Code</label>
            <input type="text" placeholder="Code" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Province</label>
            <input type="text" placeholder="Province" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Contact Email</label>
            <input type="email" placeholder="email@college.edu" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Contact Number</label>
            <input type="text" placeholder="Phone number" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="button-primary w-full">Add College</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageColleges;
