import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HiBell, HiOutlineSearch, HiOutlineMenu, HiUserCircle } from 'react-icons/hi';
import Sidebar from '../components/Sidebar';

const pageTitles = {
  student: 'Student Portal',
  lecturer: 'Lecturer Portal',
  admin: 'Admin Console'
};

function DashboardLayout({ role, darkMode, setDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar role={role} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="md:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl px-6 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 md:hidden"
              >
                <HiOutlineMenu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{pageTitles[role]}</p>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{location.pathname.split('/').pop().replace(/-/g, ' ') || 'Dashboard'}</h1>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="hidden sm:flex flex-1 items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <HiOutlineSearch className="h-5 w-5 text-slate-400" />
                <input type="search" placeholder="Search portal" className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100" />
              </div>
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {darkMode ? '☀' : '🌙'}
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <HiBell className="h-5 w-5" />
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <HiUserCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
