function EmptyState({ title, message }) {
  return (
    <div className="card flex flex-col items-center justify-center gap-3 p-10 text-center">
      <div className="rounded-full bg-primary/10 p-5 text-primary">
        <span className="text-3xl">📭</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">{message}</p>
    </div>
  );
}

export default EmptyState;
