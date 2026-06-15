import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function StudentRegister() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-soft dark:bg-slate-950">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Student Registration</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Create your verified student account</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Student registration is only permitted if the Student Number already exists in the college verification database.</p>
      </div>

      <form className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
          <input type="text" placeholder="First name" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Surname</label>
          <input type="text" placeholder="Surname" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Student Number</label>
          <input type="text" placeholder="S1234567" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
          <input type="text" placeholder="Course name" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Contact Number</label>
          <input type="text" placeholder="Phone number" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
          <input type="password" placeholder="Password" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
          <input type="password" placeholder="Confirm password" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>

        <div className="sm:col-span-2">
          <button type="submit" className="button-primary w-full">Register Student</button>
          <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">Already registered? <Link to="/student-login" className="text-primary font-semibold">Sign in</Link></p>
        </div>
      </form>
    </motion.div>
  );
}

export default StudentRegister;
