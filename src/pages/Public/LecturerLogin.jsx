import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LecturerLogin() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-soft dark:bg-slate-950">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Lecturer Login</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Sign in to your lecturer dashboard</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Review course assignments, upload resources, and manage announcements from your secure portal.</p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Lecturer ID</label>
          <input type="text" placeholder="L123456" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
          <input type="password" placeholder="Your password" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
            Remember Me
          </label>
          <Link to="/" className="text-sm font-medium text-primary hover:text-primary/80">Forgot Password?</Link>
        </div>
        <button type="submit" className="button-primary w-full">Sign In</button>
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          No account? <Link to="/lecturer-register" className="font-semibold text-primary">Register here</Link>
        </p>
      </form>
    </motion.div>
  );
}

export default LecturerLogin;
