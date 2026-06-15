import { motion } from 'framer-motion';

const resources = [
  { title: 'Lecture Slides', description: 'Slide deck for week 3 sessions.' },
  { title: 'Reading Pack', description: 'Essential reading materials for module assignments.' },
  { title: 'Project Templates', description: 'Templates for coursework submission.' }
];

function UploadResources() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Upload Resources</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Upload lecture materials and resource packages for your courses.</p>
      </div>
      <div className="grid gap-4">
        {resources.map((item) => (
          <div key={item.title} className="card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">PDF Upload</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default UploadResources;
