import { motion } from 'framer-motion';

const downloads = [
  { label: 'Course Syllabus', file: 'PDF' },
  { label: 'Timetable Overview', file: 'PDF' },
  { label: 'Exam Preparation Pack', file: 'ZIP' }
];

function Downloads() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Downloads</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Download course materials and resources for your classes.</p>
      </div>

      <div className="grid gap-4">
        {downloads.map((item) => (
          <motion.div key={item.label} whileHover={{ y: -3 }} className="card flex items-center justify-between gap-4 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.label}</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Download the latest resource package.</p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">{item.file}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Downloads;
