function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">About iPLUG YAMA CAMPUS</p>
        <h1 className="max-w-3xl text-4xl font-bold text-slate-950 dark:text-white">A modern campus portal designed for education systems.</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">iPLUG YAMA CAMPUS is a frontend interface built for academic institutions that need secure verification, real-time updates, and a modern administrative dashboard for students, lecturers, and administrators.</p>
      </div>
      <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Interface highlights</h2>
        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
          <li>• Responsive student and lecturer dashboards with mobile-first navigation.</li>
          <li>• Accessible multi-college management and reporting modules.</li>
          <li>• Clean, professional SaaS dashboard styling with Tailwind CSS.</li>
          <li>• Built as a frontend-only React app ready for Supabase integration later.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
