import { motion } from 'framer-motion';

const internships = [
  { company: 'TechWorks', role: 'Software Developer Intern', duration: '3 months' },
  { company: 'Campus Media', role: 'Digital Marketing Intern', duration: '2 months' },
  { company: 'EduLabs', role: 'Research Intern', duration: '4 months' }
];

function Internships() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Internships</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Browse internship opportunities curated for multi-college learners.</p>
      </div>
      <div className="grid gap-4">
        {internships.map((item) => (
          <motion.div key={item.company} whileHover={{ y: -3 }} className="card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.company}</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.role}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{item.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
