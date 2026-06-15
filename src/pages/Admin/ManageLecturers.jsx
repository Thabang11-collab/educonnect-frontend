function ManageLecturers() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Manage Lecturers</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Manage lecturer details and department assignments.</p>
      </div>
      <div className="card overflow-x-auto p-6">
        <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-300">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Name</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Lecturer ID</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Department</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">College</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {[
              { name: 'Dr. Thabo Ndlovu', id: 'L998812', department: 'Information Technology', college: 'Innovation College', status: 'Active' },
              { name: 'Dr. Nadia Patel', id: 'L997001', department: 'Business Studies', college: 'Western Business College', status: 'Active' }
            ].map((lecturer) => (
              <tr key={lecturer.id}>
                <td className="px-4 py-4">{lecturer.name}</td>
                <td className="px-4 py-4">{lecturer.id}</td>
                <td className="px-4 py-4">{lecturer.department}</td>
                <td className="px-4 py-4">{lecturer.college}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{lecturer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageLecturers;
