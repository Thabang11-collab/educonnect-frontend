import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">iPLUG YAMA CAMPUS</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Modern university portal interface designed for campus adoption.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
