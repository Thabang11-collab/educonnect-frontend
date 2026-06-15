function NotificationCard({ title, message, time }) {
  return (
    <div className="card border border-slate-200/70 p-5 dark:border-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{message}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">{time}</span>
      </div>
    </div>
  );
}

export default NotificationCard;
