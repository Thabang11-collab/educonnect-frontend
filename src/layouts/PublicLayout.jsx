import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PublicLayout({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-page text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
