import { motion } from 'framer-motion';

const assignments = [
  { title: 'Database Project', due: 'May 28', status: 'In Progress' },
  { title: 'Software Engineering Report', due: 'May 31', status: 'Pending Review' },
  { title: 'UI/UX Design Portfolio', due: 'June 2', status: 'Open' }
];

function Assignments() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Assignments</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Track your active coursework tasks and due dates.</p>
      </div>
      <div className="grid gap-4">
        {assignments.map((item) => (
          <motion.div key={item.title} whileHover={{ y: -3 }} className="card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">Due date: {item.due}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{item.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
