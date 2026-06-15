import { motion } from 'framer-motion';

function UploadExamInfo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-8">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Upload Exam Information</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Configure exam details, instructions, and study resources.</p>
      <form className="mt-8 grid gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Exam Title</label>
          <input type="text" placeholder="Exam title" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Exam Date</label>
            <input type="date" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Exam Duration</label>
            <input type="text" placeholder="e.g. 2 hours" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Instructions</label>
          <textarea rows="5" placeholder="Exam instructions" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"></textarea>
        </div>
        <button type="submit" className="button-primary w-full">Save Exam Information</button>
      </form>
    </motion.div>
  );
}

export default UploadExamInfo;
