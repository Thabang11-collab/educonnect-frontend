import { motion } from 'framer-motion';

function CreateAnnouncement() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-8">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Create Announcement</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Share a new announcement with your students and college community.</p>
      <form className="mt-8 grid gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
          <input type="text" placeholder="Announcement title" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
          <input type="text" placeholder="Course name" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
          <textarea rows="5" placeholder="Enter announcement details" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"></textarea>
        </div>
        <button type="submit" className="button-primary w-full">Publish Announcement</button>
      </form>
    </motion.div>
  );
}

export default CreateAnnouncement;
