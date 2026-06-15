import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-page text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <AnimatePresence mode="wait">
          <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
