function ManageCourses() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Manage Courses</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Configure course details, modules, and active status.</p>
      </div>
      <div className="card overflow-x-auto p-6">
        <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-300">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Course</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Code</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">College</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {[
              { course: 'Software Engineering', code: 'SE101', college: 'Western Business College', status: 'Active' },
              { course: 'Cyber Security', code: 'CY201', college: 'Coastal Tech Institute', status: 'Active' },
              { course: 'Visual Communication', code: 'VC301', college: 'Northern Arts University', status: 'Draft' }
            ].map((course) => (
              <tr key={course.code}>
                <td className="px-4 py-4">{course.course}</td>
                <td className="px-4 py-4">{course.code}</td>
                <td className="px-4 py-4">{course.college}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageCourses;
