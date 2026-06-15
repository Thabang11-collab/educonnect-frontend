import { motion } from 'framer-motion';

const tests = [
  { subject: 'Data Structures', date: 'June 5', time: '10:00 AM' },
  { subject: 'Web Application Development', date: 'June 8', time: '2:00 PM' },
  { subject: 'Accounting Fundamentals', date: 'June 10', time: '9:00 AM' }
];

function Tests() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Tests</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Upcoming assessments and exam preparation details.</p>
      </div>
      <div className="grid gap-4">
        {tests.map((item) => (
          <motion.div key={item.subject} whileHover={{ y: -3 }} className="card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.subject}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.date} • {item.time}</p>
              </div>
              <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-300">Prepare now</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tests;
