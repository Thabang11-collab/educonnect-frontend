function DashboardCard({ title, value, description, icon }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">{value}</p>
        </div>
        <div className="min-h-[56px] min-w-[56px] rounded-3xl bg-primary/10 text-primary grid place-items-center">
          {icon}
        </div>
      </div>
      {description && <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{description}</p>}
    </div>
  );
}

export default DashboardCard;
