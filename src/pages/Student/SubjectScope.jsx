import { motion } from 'framer-motion';

const subjects = [
  { title: 'Algorithms', description: 'Explore core data structures, algorithm design, and optimization strategies.' },
  { title: 'Database Systems', description: 'Study relational models, SQL operations, and query optimization techniques.' },
  { title: 'Software Engineering', description: 'Cover agile processes, version control, and system design principles.' },
  { title: 'Web Development', description: 'Review frontend frameworks, responsive styling, and UX fundamentals.' }
];

function SubjectScope() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Subject Scope</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Access the learning scope for each course and department area.</p>
      </div>
      <div className="grid gap-4">
        {subjects.map((subject) => (
          <motion.div key={subject.title} whileHover={{ y: -3 }} className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{subject.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{subject.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SubjectScope;
