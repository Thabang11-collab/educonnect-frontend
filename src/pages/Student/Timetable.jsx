import { motion } from 'framer-motion';

const schedule = [
  { time: '08:00', session: 'Math Essentials', location: 'Room B2' },
  { time: '10:30', session: 'Network Architecture', location: 'Room C1' },
  { time: '13:00', session: 'Digital Marketing', location: 'Room D5' },
  { time: '15:00', session: 'Team Collaboration', location: 'Online' }
];

function Timetable() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Timetable</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Your schedule for the selected week, with course locations and session times.</p>
      </div>
      <div className="grid gap-4">
        {schedule.map((item) => (
          <motion.div key={item.time} whileHover={{ y: -3 }} className="card p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.time}</p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.session}</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timetable;
