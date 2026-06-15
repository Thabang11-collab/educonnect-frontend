function ManageStudents() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Manage Students</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">View and manage student records across all colleges.</p>
      </div>
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-300">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Name</th>
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Student Number</th>
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Course</th>
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">College</th>
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                { name: 'Ayesha Khumalo', id: 'S212334', course: 'Software Engineering', college: 'Western Business College', status: 'Active' },
                { name: 'Sipho Mokoena', id: 'S214557', course: 'Digital Marketing', college: 'Coastal Tech Institute', status: 'Active' }
              ].map((student) => (
                <tr key={student.id}>
                  <td className="px-4 py-4">{student.name}</td>
                  <td className="px-4 py-4">{student.id}</td>
                  <td className="px-4 py-4">{student.course}</td>
                  <td className="px-4 py-4">{student.college}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{student.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageStudents;
