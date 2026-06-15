import { motion } from 'framer-motion';

function UploadScope() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-8">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Upload Subject Scope</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Share subject scope documents and syllabus outlines with your students.</p>
      <form className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
          <input type="text" placeholder="Course name" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject Scope File</label>
          <div className="mt-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">Upload scope placeholder</div>
        </div>
        <button type="submit" className="button-primary w-full">Upload Scope</button>
      </form>
    </motion.div>
  );
}

export default UploadScope;
