function StatsCard({ value, label, accentColor = 'primary' }) {
  const colorClass = {
    primary: 'border-t-4 border-primary',
    secondary: 'border-t-4 border-secondary',
    accent: 'border-t-4 border-accent'
  }[accentColor] || 'border-t-4 border-primary';

  const textColorClass = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent'
  }[accentColor] || 'text-primary';

  return (
    <div className={`card p-6 text-center ${colorClass}`}>
      <p className={`text-4xl font-bold ${textColorClass}`}>{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default StatsCard;
